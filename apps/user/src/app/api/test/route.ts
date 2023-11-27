import supabase from "@/utils/SupabaseUser";
import { loadStripe } from "@stripe/stripe-js";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const cookieStore = cookies();
  const supabasee = createServerComponentClient({ cookies: () => cookieStore });
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
  // const { data, error } = await supabase.auth.signUp({
  //   email: "truonganfi@gmail.com",
  //   password: "test111",
  // });
  //   const { data: cart_id, error: cartIdError } = await supabase
  //     .from("cart")
  //     .select("cart_id")
  //     .single();
  const stripes = loadStripe(
    "pk_test_51O5lSZC45JnkZGbw1s5zx43mcU4baS05RYzlUNOllC4lvp0bm0hrmukwvyKslhpOiumOvCptADKfY2TQ1i3D8uND0068z33Vwp"
  );

  return NextResponse.json({
    success: true,
    status: 200,
    data: stripes,
  });
}
