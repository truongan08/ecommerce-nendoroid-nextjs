import { NextRequest, NextResponse } from "next/server";
import supabase from "@/utils/SupabaseUser";
import { cartItem } from "@/types/user";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const {
    cart,
    user,
    address,
    method,
  }: { cart: cartItem[]; user: any; address: any; method: any } =
    await req.json();
  const { data, error } = await supabase
    .from("order")
    .insert({
      customer_id: user.id,
      status: "open",
      total_amount: cart.reduce((a, b) => a + b?.price * b?.quantity, 0),
      method: method,
    })
    .select("order_id")
    .single();
  if (error !== null) {
    throw Error("Error in insert order");
  }
  const { error: errorDetail } = await supabase.from("order_detail").insert({
    product: cart,
    address: address,
    order_id: data.order_id,
  });
  if (errorDetail !== null) {
    throw Error("Error in insert order detail");
  }

  return NextResponse.json({
    success: true,
    status: 200,
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

  return NextResponse.json(
    {
      success: true,
    },
    { status: 200 }
  );
}
