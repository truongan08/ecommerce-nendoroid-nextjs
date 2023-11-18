/* Instruments */
import type { RootState } from "@/lib/redux";
import { cartItem } from "@/types/user";

export const selectLocalCartData = (): cartItem[] | null => {
  const localCartDataString: string | null = localStorage.getItem(
    `sb-${process.env.NEXT_PUBLIC_SUPABASE_REFRENCE_ID}-cart-token`
  );
  if (!localCartDataString) return null;
  return JSON.parse(localCartDataString);
};

export const selectCartInState = ({ cart }: RootState): cartItem[] =>
  cart.cartItems;

export const selectCart = ({ cart }: RootState) => cart;
