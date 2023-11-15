import {stripe} from "@/utils/Stripe"
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  if (request.method !== 'POST') {
    console.log('Only POST requests allowed')
    return
  }
  let data = await request.json();
  let priceId = data.priceId;
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
      price: priceId,
      quantity: 5,
      }
    ],
    success_url: `http://localhost:3000`,
    cancel_url: `http://localhost:3000`
  })
  return NextResponse.json(session.url);
}
