
/* Instruments */
import type { RootState } from '@/lib/redux'
import { createSelector } from '@reduxjs/toolkit'
import { Session, User, CustomError, RequestStatus } from '@/types/user'

export const selectLocalSessionData = (): Session | null => {
    const localSessionDataString: string | null = localStorage.getItem(
        `sb-${process.env.NEXT_PUBLIC_SUPABASE_REFRENCE_ID}-auth-token`
    )
    if (!localSessionDataString) return null
    return JSON.parse(localSessionDataString)
}

export const selectLoggedInSession = ({auth}: RootState) : Session | null => auth.session;

export const selectIsLoggedInSession = createSelector(
    [selectLoggedInSession],
    (loggedInSession): boolean => {
        return !!loggedInSession
    }
)
export const selectLoggedInUser = ({ auth }: RootState): User | null =>
	auth.session?.user || null

export const selectIsLoggedInUser = createSelector(
	[selectLoggedInUser],
	(loggedInUser) => !!loggedInUser
)

export const selectSignInError = ({ auth }: RootState): CustomError | null =>
	auth.signInError

export const selectSignInStatus = ({ auth }: RootState): RequestStatus =>
	auth.signInStatus

export const selectSignUpError = ({ auth }: RootState): CustomError | null =>
	auth.signUpError

export const selectSignUpStatus = ({ auth }: RootState): RequestStatus =>
	auth.signUpStatus

export const selectSignOutStatus = ({ auth }: RootState): RequestStatus =>
	auth.signOutStatus
