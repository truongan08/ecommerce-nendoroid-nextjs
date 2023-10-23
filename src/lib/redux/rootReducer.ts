import { AuthCallTypes } from '@/types/user'
import { authSlice } from './slices'
import { AnyAction, combineReducers } from '@reduxjs/toolkit'

export const appReducers = combineReducers({
	[authSlice.name]: authSlice.reducer,
})

export const rootReducer = (state: any, action: AnyAction) => {
  if(action?.payload?.callType === AuthCallTypes.SIGN_OUT) {
    return appReducers(undefined, action)
  }
  return appReducers(state, action)
}