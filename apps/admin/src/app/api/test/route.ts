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
  // const { data: cartData, error } = await supabase
  //   .from("cart")
  //   .select(`cart_id`);
  // const { data, error } = await supabase.auth.admin.createUser({
  //   email: "an2021875@email.com",
  //   password: "password",
  //   user_metadata: { fullname: "Yoda" },
  // });
  // const { count, error } = await supabase
  //   .from("product")
  //   .select("", { count: "exact" });
  // console.log(count);
  // if (error) {
  //   return error;
  // }
  // if (!count) {
  //   return console.log("ads");
  // }

  // const limit = 3;
  // const from = 0 ? 0 * limit : 0;
  // const to = 0 ? from + limit : limit;

  // const { data, error: PaginationError } = await supabase
  //   .from("product")
  //   .select(`name`)
  //   .range(from, to);

  return NextResponse.json({
    success: true,
    status: 200,
  });
}
