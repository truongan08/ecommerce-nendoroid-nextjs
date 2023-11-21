/* Instruments */
import type { RootState } from "@/lib/redux";
import { cartItem } from "@/types/user";

export const selectLocalCartData = (): cartItem[] => {
  const localCartData: string | null = localStorage.getItem(`cart`);
  if (!localCartData) return [];
  return JSON.parse(localCartData);
};

export const selectCartInState = ({ cart }: RootState): cartItem[] =>
  cart.cartItems;
