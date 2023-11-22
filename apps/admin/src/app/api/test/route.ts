import supabase from "@/utils/SupabaseAdmin";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  // const cart = await request.json();
  // const cartDto = cart.cart.map(({ product_id, quantity }) => ({
  //   cart_id: 1,
  //   product_id: product_id,
  //   quantity: quantity,
  // }));

  // const { data: cartData } = await supabase
  //   .from("cart_product")
  //   .upsert(cartDto);
  // const { data: cart, error } = await supabase
  //   .from("cart")
  //   .select(`*,cartItem:product(*,quantity:cart_product(quantity))`)
  //   .eq("cart_id", "1");
  // const cartData = cart?.map((item) => ({
  //   cart_id: item.cart_id,
  //   customer_id: item.customer_id,
  //   cartItem: item.cartItem.map((innerItem: any) => ({
  //     product_id: innerItem.product_id,
  //     category_id: innerItem.category_id,
  //     name: innerItem.name,
  //     description: innerItem.description,
  //     image_url: innerItem.image_url,
  //     price: innerItem.price,
  //     status: innerItem.status,
  //     stock: innerItem.stock,
  //     quantity: innerItem.quantity[0].quantity,
  //   })),
  // }));
  const { data: cartData, error } = await supabase
    .from("cart")
    .select(`*,cartItem:product(*,quantity:cart_product(quantity))`)
    .eq("cart_id", 1);

  return NextResponse.json({
    success: true,
    status: 200,
    cart: cartData,
  });
}
