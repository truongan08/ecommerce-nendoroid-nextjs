import { stripe } from "@/utils/Stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // const endpointSecret = "";
  // const sig = req.headers.get("stripe-signature");

  // const body = await req.json();

  // try {
  //   const event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  //   switch (event.type) {
  //     case "payment_intent.succeeded":
  //       const paymentIntentSucceeded = event.data.object;
  //       break;
  //     default:
  //       console.log(`Unhandled event type ${event.type}`);
  //   }
  // } catch (err) {
  //   return NextResponse.json(`Webhook Error: ${err}`);
  // }

  return NextResponse.json({
    success: true,
    status: 200,
    // body: body,
  });
}
