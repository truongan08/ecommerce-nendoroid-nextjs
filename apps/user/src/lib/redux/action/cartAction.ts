import { CartOutput, CustomError, cartItem } from "@/types/user";
import supabase from "@/utils/SupabaseUser";

export class CartSupabase implements CartOutput {
  async get_cart_id(): Promise<{
    cart_id: any | null;
    error: CustomError | null;
  }> {
    const { data: cart_id, error } = await supabase
      .from("cart")
      .select("cart_id")
      .eq(
        "customer_id",
        JSON.parse(
          localStorage.getItem(
            `sb-${process.env.NEXT_PUBLIC_SUPABASE_REFRENCE_ID}-auth-token`
          )!
        ).user.id
      )
      .single();
    return Promise.resolve({ cart_id, error });
  }

  async fetchCart(
    cart_id: any,
    cartDto: cartItem[]
  ): Promise<{
    cart: any | null;
    error: CustomError | null;
  }> {
    const { data: cartData } = await supabase.rpc("insert_cart", {
      cartSet: cartDto,
    });

    const { data: cart, error } = await supabase
      .from("cart")
      .select(`*,cartItem:product(*),quantity:cart_product(quantity)`)
      .eq("cart_id", "1");
    return Promise.resolve({ cart, error });
  }

  async getCart(cart_id: number): Promise<{
    cart: any | null;
    error: CustomError | null;
  }> {
    const { data: cart, error } = await supabase
      .from("cart")
      .select(
        `*,
          product (
           *
          )`
      )
      .eq("cart_id", cart_id);
    return Promise.resolve({ cart, error });
  }
}
