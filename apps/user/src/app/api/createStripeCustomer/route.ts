import { stripe } from "@/utils/Stripe";
import supabase from "@/utils/SupabaseUser";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  let data = await request.json();
  let email = data.email;
  let customer_id = data.id;

  const customer = await stripe.customers.create({
    email: email,
  });

  const { data: stripe_customer, error } = await supabase
    .from("customer")
    .select("stripe_customer")
    .eq("customer_id", customer_id)
    .single();

  if (stripe_customer !== null) {
    return NextResponse.json(
      { message: `Stripe customer existed:` },
      { status: 500 }
    );
  } else {
    await supabase
      .from("customer")
      .update({ stripe_customer: customer.id })
      .eq("customer_id", customer_id);
    return NextResponse.json(
      { customer: `stripe customer created: ${customer.id}` },
      { status: 200 }
    );
  }
}
