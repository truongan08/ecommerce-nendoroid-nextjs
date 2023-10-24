import { AuthCallTypes, CustomError, RequestStatus, AuthState, Session, GetLocalStatus } from '@/types/user';
import { PayloadAction } from "@reduxjs/toolkit";
export const authReducers = {
    startCall:(
        state: AuthState,
        {payload}:PayloadAction<{callType: AuthCallTypes}>
    ) => {
        state[payload.callType] = RequestStatus.LOADING
    },
    signIn: (
        state: AuthState,
        {payload}:PayloadAction<{session: Session | null; error: CustomError | null}>
    ) => {
        state.session= payload.session
        state.signInError = payload.error
        state.signInStatus = payload.error ? RequestStatus.FAILED : RequestStatus.COMPLETED
    },
    signUp: (
        state: AuthState,
        {payload}:PayloadAction<{ error: CustomError | null}>
    ) => {
        state.signUpError = payload.error
        state.signUpStatus = payload.error ? RequestStatus.FAILED : RequestStatus.COMPLETED
    },
    signOut: (
        state: AuthState,
        {payload}:PayloadAction<{error: CustomError | null}>
    ) => {
        state.signOutError = payload.error
        if(!payload.error)
        {
            state.signOutStatus = RequestStatus.COMPLETED
            state.session = null
            return
        }
        state.signOutStatus = RequestStatus.FAILED 
    },
    setLoggedInUserWithLocalData: (
        state: AuthState,
        {payload}: PayloadAction<{localSessionData: Session}>
        )=> {
            state.session = payload.localSessionData
        },
}