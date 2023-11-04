import { useAppSelector } from "../.."
import { selectProductInState } from '..';
import { cartSlice } from "./cartSlice"
import {  cart, cartItem, Product } from "@/types/user"

const { actions } = cartSlice

//call many reducer on 1 action

export const addToCart = (product: Product, quantity?: number) => async(dispatch: any)=> {
	dispatch(actions.addToCart({ product, quantity }))
	}

export const removeFromCart = (product: Product) => async(dispatch: any)=> {
	dispatch(actions.removeFromCart({ product }))
	}

export const deleteCartItem = (product: Product) => async(dispatch: any)=> {
	dispatch(actions.deleteCartItem({ product }))
	}

export const setCartFromLocalCartData =
	(localCartData: cartItem[] | null) => async (dispatch: any) => {
		dispatch(actions.setCartWithLocalData({ localCartData }))
	}
