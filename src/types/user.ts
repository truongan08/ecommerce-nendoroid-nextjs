//interface

import { AuthSupabase } from "@/action/authAction";

export interface Product {
    product_id: string;
    category_id: string;
    name: string;
    description: string;
    image_url: string[];
    price: number;
}

export interface AuthOutput {
	signIn(
		signInDto: SignInDto
	): Promise<{ session: Session | null; error: CustomError | null }>

	signUp(signUpDto: SignUpDto): Promise<{ error: CustomError | null }>

	signOut(): Promise<{ error: CustomError | null }>
}

export interface AuthState {
	session: Session | null
	signInStatus: RequestStatus
	signInError: CustomError | null
	signUpStatus: RequestStatus
	signUpError: CustomError | null
	signOutStatus: RequestStatus
	signOutError: CustomError | null
}

export interface CartOutput {
addToCart(
	signInDto: SignInDto
): Promise<{ session: Session | null; error: CustomError | null }>

signUp(signUpDto: SignUpDto): Promise<{ error: CustomError | null }>

removeFromCart(): Promise<{ error: CustomError | null }>}

// enum

export enum AuthCallTypes {
    SIGN_IN = "signInStatus",
    SIGN_UP = "signUpStatus",
    SIGN_OUT = "signOutStatus",
}

export enum RequestStatus {
	IDLE = "IDLE",
	LOADING = "LOADING",
	COMPLETED = "COMPLETED",
	FAILED = "FAILED",
}

//type

export type CustomError = {
	message: string
}

export type SignInDto = {
	email: string
	password: string
}

export type SignUpDto = {
	email: string
	password: string
}

export type User = {
	id: string
	email: string
}

export type Session = {
	access_token: string
	token_type: string
	expires_in: number
	refresh_token: string
	user: User
	expires_at?: number
}

export type AppOutputs = {
	authOutput: AuthOutput
}

//const

export const appOutputs: AppOutputs = {
	authOutput: new AuthSupabase(),
}

export const initialState: AuthState = {
	session: null,
	signInStatus: RequestStatus.IDLE,
	signInError: null,
	signUpStatus: RequestStatus.IDLE,
	signUpError: null,
	signOutStatus: RequestStatus.IDLE,
	signOutError: null,
}