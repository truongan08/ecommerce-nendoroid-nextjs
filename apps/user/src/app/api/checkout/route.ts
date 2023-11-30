import { stripe } from "@/utils/Stripe";
import { cartItem } from "@/types/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // const { email, id } = await req.json();

  // if (!email || !id) {
  //   return NextResponse.json(
  //     { error: "Missing customer email or customer id" },
  //     { status: 405 }
  //   );
  // }
  const { cart }: { cart: cartItem[] } = await req.json();

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

  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    mode: "payment",
    line_items: checkoutItems,
    return_url: `${req.nextUrl.origin}/return?session_id={CHECKOUT_SESSION_ID}`,
  });

  return NextResponse.json({
    success: true,
    status: 200,
    clientSecret: session,
  });
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const session_id = url.searchParams.get("session_id");

  if (!session_id) {
    return NextResponse.json({
      fail: true,
      status: 400,
      message: "Dont have any session id for check",
    });
  }

  const session: any = await stripe.checkout.sessions.retrieve(session_id);

  return NextResponse.json({
    success: true,
    status: 200,
    customer_email: session.customer_email,
  });
}
