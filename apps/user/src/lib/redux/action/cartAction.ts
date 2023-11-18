import {
  CartOutput,
  CustomError,
  Product,
  User,
  cart,
  cartItem,
} from "@/types/user";
import supabase from "@/utils/SupabaseUser";

export class CartSupabase implements CartOutput {
  async get_cart_id(): Promise<{
    cart_id: number | null;
    error: CustomError | null;
  }> {
    const { data: cart_id, error: cartError } = await supabase
      .from("cart")
      .select("cart_id")
      .eq(
        "customer_id",
        "0d6a56da-4ef1-4796-b815-3755e585ce8a"
        // JSON.parse(
        //   localStorage.getItem(
        //     `sb-${process.env.NEXT_PUBLIC_SUPABASE_REFRENCE_ID}-auth-token`
        //   )!
        // ).user.id
      )
      .single();
    return Promise.resolve({ cart_id, cartError });
  }

  async fetchCart(
    cart_id: number,
    cart: cartItem[]
  ): Promise<{
    cart: cartItem[];
    error: CustomError | null;
  }> {
    const pid: string[] = cart.map((item) => {
      return item.product.product_id;
    });
    const { error: cartItemError } = await supabase
      .from("cart")
      .insert(pid)
      .select();

    const { data: CartData, error: CustomError } = await supabase
      .from("cart")
      .select(
        `quantity,
          product (
           *
          )`
      )
      .eq("cart_id", cart_id);
    return Promise.resolve({ CartData, CustomError });
  }

  async getCart(cart_id: number): Promise<{
    cart: cartItem[];
    error: CustomError | null;
  }> {
    const { data: CartData, error: CustomError } = await supabase
      .from("cart")
      .select(
        `quantity,
          product (
           *
          )`
      )
      .eq("cart_id", cart_id);
    return Promise.resolve({ CartData, CustomError });
  }
}
