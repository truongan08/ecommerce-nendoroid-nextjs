import {  cartReducers } from './reducer';
import { initialStateCart } from '@/types/user';
import { createSlice} from '@reduxjs/toolkit'


export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialStateCart,
  reducers: cartReducers,
})

