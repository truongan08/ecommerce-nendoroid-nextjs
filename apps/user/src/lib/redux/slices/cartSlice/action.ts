import { cartSlice } from "./cartSlice";
import { cart, cartItem, CartOutput, CustomError, Product } from "@/types/user";

const { actions } = cartSlice;

//call many reducers on an action

export const addToCart =
  (product: Product, quantity?: number) =>
  async (dispatch: any, _: any, { cartOutput }: { cartOutput: CartOutput }) => {
    dispatch(actions.addToCart({ product, quantity }));
    // const cart_id = await cartOutput.get_cart_id();
    // const fecthcartRo: { cart_id: number | null; error: CustomError | null } =
    //   await cartOutput.fetchCart(cart_id);

    // dispatch(actions.addToCart(fecthcartRo));
  };

export const removeFromCart = (product: Product) => async (dispatch: any) => {
  dispatch(actions.removeFromCart({ product }));
};

export const deleteCartItem = (product: Product) => async (dispatch: any) => {
  dispatch(actions.deleteCartItem({ product }));
};

export const setCartFromLocalCartData =
  (localCartData: cartItem[] | null) => async (dispatch: any) => {
    dispatch(actions.setCartWithLocalData({ localCartData }));
  };
