import { stripe } from "@/utils/Stripe";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const prices = await stripe.prices.list({
    limit: 2,
  });
  return NextResponse.json(prices.data.reverse());
}
