import { cartSlice } from "./cartSlice"
import { AuthOutput, SignInDto, SignUpDto, Session, CustomError, AuthCallTypes } from "@/types/user"

const { actions } = cartSlice

export const addToCart = (signInDto: SignInDto) =>
	async (
		dispatch: any,
		_: any,
		{ authOutput }: { authOutput: AuthOutput }
	) => {
		dispatch(actions.startCall({ callType: AuthCallTypes.SIGN_IN }))

		const signInRo: { session: Session | null; error: CustomError | null } =
			await authOutput.signIn(signInDto)

		dispatch(actions.signIn(signInRo))
	}

export const removeFromCart =
	() =>
	async (
		dispatch: any,
		_: any,
		{ authOutput }: { authOutput: AuthOutput }
	) => {
		dispatch(actions.startCall({ callType: AuthCallTypes.SIGN_OUT }))

		const signOutRo: { error: CustomError | null } =
			await authOutput.signOut()

		dispatch(actions.signOut(signOutRo))
	}

export const signUp =
	(signUpDto: SignUpDto) =>
	async (
		dispatch: any,
		_: any,
		{ authOutput }: { authOutput: AuthOutput }
	) => {
		dispatch(actions.startCall({ callType: AuthCallTypes.SIGN_UP }))

		const signUpRo: { error: CustomError | null } = await authOutput.signUp(
			signUpDto
		)

		dispatch(actions.signUp(signUpRo))
	}

export const setSessionFromLocalSessionData =
	(localSessionData: Session) => async (dispatch: any) => {
		dispatch(actions.setLoggedInUserWithLocalData({ localSessionData }))
	}
