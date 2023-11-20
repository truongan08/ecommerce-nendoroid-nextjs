import { stripe } from "@/utils/Stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const endpointSecret =
    "whsec_73d35b5abb0b3781855c3e81572c22bf1231f93006dd736343949169cff35f3d";
  const sig = req.headers.get("stripe-signature");

  const body = await req.json();

  try {
    const event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntentSucceeded = event.data.object;
        // Then define and call a function to handle the event payment_intent.succeeded
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  } catch (err) {
    return NextResponse.json(`Webhook Error: ${err}`);
  }

  return NextResponse.json({
    success: true,
    status: 200,
    body: body,
  });
}
