import { cartSlice } from "./cartSlice";
import { cart, cartItem, CartOutput, CustomError, Product } from "@/types/user";

const { actions } = cartSlice;

//call many reducers on an action

export const addToCart =
  (product: Product, quantity?: number) => async (dispatch: any, _: any) => {
    dispatch(actions.addToCart({ product, quantity }));
  };

export const fetchCart =
  (cart: cartItem[]) =>
  async (dispatch: any, _: any, { cartOutput }: { cartOutput: CartOutput }) => {
    const fetchcartRo: {
      cart: cartItem[];
      error: CustomError | null;
    } = await cartOutput.fetchCart(cart);
    dispatch(actions.fetchCart(fetchcartRo));
  };

export const getCart =
  () =>
  async (dispatch: any, _: any, { cartOutput }: { cartOutput: CartOutput }) => {
    const getcartRo: {
      cart: cartItem[];
      error: CustomError | null;
    } = await cartOutput.getCart();
    dispatch(actions.fetchCart(getcartRo));
  };

export const removeFromCart = (product: Product) => async (dispatch: any) => {
  dispatch(actions.removeFromCart({ product }));
};

export const deleteCartItem = (product: Product) => async (dispatch: any) => {
  dispatch(actions.deleteCartItem({ product }));
};
export const clearCart = () => async (dispatch: any) => {
  dispatch(actions.clearCart());
};

export const setCartFromLocalCartData =
  (cart: cartItem[]) => async (dispatch: any) => {
    dispatch(actions.setCartWithData({ cart }));
  };
