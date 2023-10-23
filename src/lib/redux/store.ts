/* Core */
import { configureStore, type ThunkAction, type AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import {
  useSelector,
  useDispatch,
  type TypedUseSelectorHook,
} from 'react-redux'

import { rootReducer } from './rootReducer'
import { appOutputs } from '@/types/user'
// import { middleware } from './middleware'


export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch
export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>
export const reduxStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware: any) => [
		...getDefaultMiddleware({
			serializableCheck: {
				isSerializable: () => true,
			},
			thunk: { extraArgument: appOutputs },
		}),
	],
	devTools: process.env.NODE_ENV !== "production",
})

export const useAppDispatch = () => useDispatch<TypedDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
