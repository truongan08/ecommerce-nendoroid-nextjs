import { CartOutput, CustomError, cartItem } from "@/types/user";
import supabase from "@/utils/SupabaseUser";

export class CartSupabase implements CartOutput {
  async fetchCart(
    id: any,
    cartDto: cartItem[]
  ): Promise<{
    cart: any | null;
    error: CustomError | null;
  }> {
    const { data: cart_id, error: cartIdError } = await supabase
      .from("cart")
      .select("cart_id")
      .eq("customer_id", id)
      .single();

    console.log(cart_id);

    const cartUpsert = cartDto.map(({ product_id, quantity }) => ({
      cart_id: 1,
      product_id: product_id,
      quantity: quantity,
    }));

    await supabase.from("cart_product").upsert(cartUpsert);

    const { data: cartData, error } = await supabase
      .from("cart")
      .select(`*,cartItem:product(*,quantity:cart_product(quantity))`)
      .eq("cart_id", 1);

    const cartItem: any = cartData?.map((item: any) => ({
      cartItem: item.cartItem.map((innerItem: any) => ({
        product_id: innerItem.product_id,
        category_id: innerItem.category_id,
        name: innerItem.name,
        description: innerItem.description,
        image_url: innerItem.image_url,
        price: innerItem.price,
        status: innerItem.status,
        stock: innerItem.stock,
        quantity: innerItem.quantity[0].quantity,
      })),
    }));

    const cart = cartItem?.cartItem || [];

    return Promise.resolve({ cart, error });
  }

  async getCart(cart_id: number): Promise<{
    cart: any | null;
    error: CustomError | null;
  }> {
    const { data: cartData, error } = await supabase
      .from("cart")
      .select(`*,cartItem:product(*,quantity:cart_product(quantity))`)
      .eq("cart_id", cart_id);

    const cart = cartData?.map((item: any) => ({
      cartItem: item.cartItem.map((innerItem: any) => ({
        product_id: innerItem.product_id,
        category_id: innerItem.category_id,
        name: innerItem.name,
        description: innerItem.description,
        image_url: innerItem.image_url,
        price: innerItem.price,
        status: innerItem.status,
        stock: innerItem.stock,
        quantity: innerItem.quantity[0].quantity,
      })),
    }));
    return Promise.resolve({ cart, error });
  }
}
