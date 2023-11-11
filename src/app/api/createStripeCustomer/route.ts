import { stripe } from "@/utils/Stripe";
import { NextRequest, NextResponse } from "next/server";

export default async function POST(request: NextRequest) {
  if (request.method !== "POST") {
    console.log("Only POST request allowed");
    return;
  }

  let data = await request.json();
  let email = data.email;

  const customer = await stripe.customers.create({
    email: email,
  });
  return NextResponse.json(
    { customer: `stripe customer created: ${customer.id}` },
    { status: 500 }
  );
}
