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
      unit_amount: cart.product.price,
      product_data: {
        name: cart.product.name,
        images: cart.product.image_url,
        metadata: {
          id: cart.product.product_id,
          title: cart.product.name,
          price: cart.product.price,
        },
      },
    },
    quantity: cart.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: checkoutItems,
    success_url: `${req.nextUrl.origin}`,
    cancel_url: `${req.nextUrl.origin}`,
  });

  return NextResponse.json({
    success: true,
    status: 200,
    id: session.id,
  });
}
