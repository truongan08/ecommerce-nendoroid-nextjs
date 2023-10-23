import {  authReducers } from './reducer';
import { initialState } from '@/types/user';
import { createSlice} from '@reduxjs/toolkit'


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: authReducers,
})

