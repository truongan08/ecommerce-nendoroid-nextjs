import supabase from "@/utils/SupabaseAdmin";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const cart = await request.json();

  const number = [{ number: [{ num: 1 }, { num: 2 }] }, { number: 2 }];

  const cart_id = number.reduce((output, current) => {
    output = output.push({current.number});
    return output;
  });
  // const product_id = { ...cart.cart.product.product_id };
  // const quantity = { ...cart.cart.quantity };

  // const cartDto = [{ cart_id, product_id, quantity }];

  // const { data: cartData } = await supabase
  //   .from("cart_product")
  //   .insert(cartDto);

  return NextResponse.json({
    success: true,
    status: 200,
    id: cart_id,
  });
}
