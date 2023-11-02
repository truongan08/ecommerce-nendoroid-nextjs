//interface

import { AuthSupabase } from "@/action/authAction";
import { ProductSupabase } from "@/action/productAction";

export interface Product {
    product_id: string;
    category_id: string;
    name: string;
    description: string;
    image_url: string[];
    price: number;
	status: string;
    stock: number;
}

export interface ProductDetail {
	product_id: string;
    category_id: string;
    name: string;
    description: string;
    image_url: string[];
    price: number;
	status: string;
    stock: number;
	product_detail: Productdetail[]
}

export interface Productdetail {
	product_detail_id: string;
	product_id: string;
	sku: string;
	franchise: string;
	set: string;
	year: string;
}


export interface ProductOutput {
	getProductByStatus(status: StatusProduct): Promise<{product: Product[] | null; error: CustomError | null}>
	getProductByCategory(type: TypeProduct): Promise<{product: Product[] | null; error: CustomError | null}>
	getProductPagination({ query: { page } }: { query: { page?: number | undefined; }; }): Promise<{product: Product[] | null;count : number | null; error: CustomError | null}>
	getProductDetail(product_id: string): Promise<{productDetail: ProductDetail | null; error: CustomError | null}>
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
export interface ProductState {
	product: Product[] | null
	productDetail: ProductDetail | null
	getProductByStatusStatus: ProductRequestStatus
	getProductByStatusError: CustomError | null
	getProductByCategoryStatus: ProductRequestStatus
	getProductByCategoryError: CustomError | null
	getProductPaginationStatus: ProductRequestStatus
	getProductPaginationError: CustomError | null
	getProductDetailStatus: ProductDetailRequestStatus
	getProductDetailError: CustomError | null
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

export enum ProductCallTypes {
    GET_BY_STATUS = "getProductByStatusStatus",
    GET_BY_TYPE = "getProductByCategoryStatus",
    GET_PAGINATION = "getProductPaginationStatus",
	GET_DETAIL = "getProductDetailStatus"
}

export enum RequestStatus {
	IDLE = "IDLE",
	LOADING = "LOADING",
	COMPLETED = "COMPLETED",
	FAILED = "FAILED",
}

export enum ProductRequestStatus {
	IDLE = "IDLE",
	LOADING = "LOADING",
	FAILED = "FAILED",
}

export enum ProductDetailRequestStatus {
	IDLE = "IDLE",
	LOADING = "LOADING",
	FAILED = "FAILED",
}

//type

export type CustomError = {
	message: string
}

export type StatusProduct = {
	status: string
}

export type TypeProduct = {
	type: string
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
	productOutput: ProductOutput
}

//const

export const appOutputs: AppOutputs = {
	authOutput: new AuthSupabase(),
	productOutput: new ProductSupabase(),
}

export const initialStateAuth: AuthState = {
	session: null,
	signInStatus: RequestStatus.IDLE,
	signInError: null,
	signUpStatus: RequestStatus.IDLE,
	signUpError: null,
	signOutStatus: RequestStatus.IDLE,
	signOutError: null,
}

export const initialStateProduct: ProductState = {
	product: [],
	productDetail: null,
	getProductByStatusStatus: ProductRequestStatus.IDLE,
	getProductByStatusError: null,
	getProductByCategoryStatus: ProductRequestStatus.IDLE,
	getProductByCategoryError:  null,
	getProductPaginationStatus: ProductRequestStatus.IDLE,
	getProductPaginationError:  null,
	getProductDetailStatus: ProductDetailRequestStatus.IDLE,
	getProductDetailError: null,
}