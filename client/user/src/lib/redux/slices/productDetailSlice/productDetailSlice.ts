import {  productDetailReducers } from './reducer';
import { initialStateProductDetail } from '@/types/user';
import { createSlice} from '@reduxjs/toolkit'


export const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState: initialStateProductDetail,
  reducers: productDetailReducers,
})

