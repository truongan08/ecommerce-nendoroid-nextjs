import {  productReducers } from './reducer';
import { initialStateProduct } from '@/types/user';
import { createSlice} from '@reduxjs/toolkit'


export const productSlice = createSlice({
  name: 'product',
  initialState: initialStateProduct,
  reducers: productReducers,
})

