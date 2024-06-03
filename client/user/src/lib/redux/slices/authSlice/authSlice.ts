import {  authReducers } from './reducer';
import { initialStateAuth } from '@/types/user';
import { createSlice} from '@reduxjs/toolkit'


export const authSlice = createSlice({
  name: 'auth',
  initialState: initialStateAuth,
  reducers: authReducers,
})

