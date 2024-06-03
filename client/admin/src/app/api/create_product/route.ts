import { stripe } from "@/utils/Stripe";
import supabase from "@/utils/SupabaseAdmin";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  let data = await request.json();
  let email = data.record.email;
  let id = data.record.id;

  const customer = await stripe.customers.create({
    email: email,
  });

  await supabase
    .from("customer")
    .update({ stripe_customer: customer.id })
    .eq("customer_id", id);
  return NextResponse.json(
    { customer: `stripe customer created: ${customer.id}` },
    { status: 200 }
  );
}
