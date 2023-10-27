import {  cartReducers } from './reducer';
import { initialState } from '@/types/user';
import { createSlice} from '@reduxjs/toolkit'


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: cartReducers,
})

