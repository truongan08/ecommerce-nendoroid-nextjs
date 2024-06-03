import { stripe } from "@/utils/Stripe";
import { cartItem } from "@/types/user";
import { NextRequest, NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const { cart }: { cart: cartItem[] } = await req.json();
  const { data, error } = await supabase
    .from("customer")
    .select("stripe_customer")
    .single();

  const checkoutItems = cart.map((cart: cartItem) => ({
    price_data: {
      currency: "vnd",
      unit_amount: cart.price,
      product_data: {
        name: cart.name,
        images: cart.image_url,
        metadata: {
          id: cart.product_id,
          title: cart.name,
          price: cart.price,
        },
      },
    },
    quantity: cart.quantity,
  }));
  if (data === null) {
    return NextResponse.json({
      fail: true,
      status: 400,
      error: error,
    });
  }

  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    mode: "payment",
    customer: data.stripe_customer,
    line_items: checkoutItems,
    return_url: `${req.nextUrl.origin}/return?session_id={CHECKOUT_SESSION_ID}`,
  });
  if (!session) {
    return NextResponse.json({
      fail: true,
      status: 400,
      error: error,
    });
  }
  return NextResponse.json({
    success: true,
    status: 200,
    clientSecret: session.client_secret,
    error: error,
  });
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const session_id = url.searchParams.get("session_id");

  if (!session_id) {
    return NextResponse.json({
      fail: true,
      status: 400,
      message: "Don't have session id for check",
    });
  }

  const session = await stripe.checkout.sessions.retrieve(session_id);

  return NextResponse.json(
    {
      success: true,
      status: session.status,
      customer_details: session.customer_details,
    },
    { status: 200 }
  );
}
