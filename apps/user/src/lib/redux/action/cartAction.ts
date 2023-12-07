import { CartOutput, CustomError, cartItem } from "@/types/user";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();
export class CartSupabase implements CartOutput {
  async fetchCart(cartDto: cartItem[]): Promise<{
    cart: any | null;
    error: CustomError | null;
  }> {
    const { data: cart_id, error: cartIdError } = await supabase
      .from("cart")
      .select("cart_id")
      .single();
    const cartUpsert = cartDto.map(({ product_id, quantity }) => ({
      cart_id: cart_id?.cart_id,
      product_id: product_id,
      quantity: quantity,
    }));
    await supabase.from("cart_product").upsert(cartUpsert);

    const { data: cartData, error } = await supabase
      .from("cart")
      .select(`*,cartItem:product(*,quantity:cart_product(quantity))`)
      .single();

    const cart = cartData.cartItem.map((innerItem: any) => ({
      product_id: innerItem.product_id,
      category_id: innerItem.category_id,
      name: innerItem.name,
      description: innerItem.description,
      image_url: innerItem.image_url,
      price: innerItem.price,
      status: innerItem.status,
      stock: innerItem.stock,
      quantity: innerItem.quantity[0].quantity,
    }));

    return Promise.resolve({ cart, error });
  }

  async getCart(): Promise<{
    cart: any | null;
    error: CustomError | null;
  }> {
    const { data: cartData, error } = await supabase
      .from("cart")
      .select(`*,cartItem:product(*,quantity:cart_product(quantity))`)
      .single();

    const cart = cartData.cartItem.map((innerItem: any) => ({
      product_id: innerItem.product_id,
      category_id: innerItem.category_id,
      name: innerItem.name,
      description: innerItem.description,
      image_url: innerItem.image_url,
      price: innerItem.price,
      status: innerItem.status,
      stock: innerItem.stock,
      quantity: innerItem.quantity[0].quantity,
    }));

    return Promise.resolve({ cart, error });
  }
}
