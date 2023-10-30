import { AuthCallTypes } from '@/types/user'
import { authSlice } from './slices/authSlice/authSlice'
import { cartSlice } from './slices/cartSlice/cartSlice'
import { productSlice } from './slices/productSlice/productSlice'
import { AnyAction, combineReducers } from '@reduxjs/toolkit'


export const appReducers = combineReducers({
	[authSlice.name]: authSlice.reducer,
  // [cartSlice.name]: cartSlice.reducer,
  [productSlice.name]: productSlice.reducer,
})

export const rootReducer = (state: any, action: AnyAction) => {
  if(action?.payload?.callType === AuthCallTypes.SIGN_OUT) {
    return appReducers(undefined, action)
  }
  return appReducers(state, action)
}