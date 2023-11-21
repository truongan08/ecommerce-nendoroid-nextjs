import {
  CartState,
  Product,
  cartItem,
  cart,
  CustomError,
  RequestCartStatus,
} from "@/types/user";
import { PayloadAction } from "@reduxjs/toolkit";

export const cartReducers = {
  addToCart: (
    state: CartState,
    { payload }: PayloadAction<{ product: Product; quantity?: number }>
  ) => {
    const { product, quantity = 1 } = payload;
    const cartItemIndex = state.cartItems?.findIndex(
      (item) => item.product?.product_id === product.product_id
    );

    if (cartItemIndex !== -1) {
      state.cartItems[cartItemIndex].quantity += quantity;
    } else {
      state.cartItems.push({ product, quantity });
    }
  },

  removeFromCart: (
    state: CartState,
    { payload }: PayloadAction<{ product: Product }>
  ) => {
    const { product } = payload;
    const cartItem = state.cartItems?.find(
      (item) => item.product.product_id === product.product_id
    );

    if (cartItem && cartItem.quantity >= 2) {
      cartItem.quantity = cartItem.quantity - 1;
    } else {
      state.cartItems = state.cartItems.filter((item) => item !== cartItem);
    }
  },

  fecthCart: (
    state: CartState,
    { payload }: PayloadAction<{ cart: cartItem[]; error: CustomError | null }>
  ) => {
    state.cartItems = payload.cart;
    state.cartError = payload.error;
    state.cartStatus = payload.error
      ? RequestCartStatus.FAILED
      : RequestCartStatus.COMPLETED;
  },

  deleteCartItem: (
    state: CartState,
    { payload }: PayloadAction<{ product: Product }>
  ) => {
    const { product } = payload;
    const cartItem = state.cartItems?.find(
      (item) => item.product.product_id === product.product_id
    );

    if (cartItem) {
      state.cartItems = state.cartItems.filter((item) => item !== cartItem);
    }
  },

  setCartWithData: (
    state: CartState,
    { payload }: PayloadAction<{ cart: any }>
  ) => {
    state.cartItems.push(payload.cart);
  },
};
