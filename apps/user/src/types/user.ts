//interface

import { AuthSupabase } from "@/lib/redux/action/authAction";
import { ProductSupabase } from "@/lib/redux/action/productAction";
import { ProductDetailSupabase } from "@/lib/redux/action/productDetailAction";
import { CartSupabase } from "@/lib/redux/action/cartAction";

export interface cart {
  cartItems: cartItem[];
  total: number;
}

export interface ProductOutput {
  getProductByStatus(
    status: StatusProduct
  ): Promise<{ product: Product[]; error: CustomError | null }>;
  getProductByCategory(
    type: TypeProduct
  ): Promise<{ product: Product[]; error: CustomError | null }>;
  getProductPagination({
    query: { page },
  }: {
    query: { page?: number | undefined };
  }): Promise<{
    product: Product[];
    count: number | null;
    error: CustomError | null;
  }>;
  getProductSearch(
    keyword: Keyword
  ): Promise<{ product: Product[]; error: CustomError | null }>;
}

export interface ProductDetailOutput {
  getProductDetail(product_id: ProductIdType): Promise<{
    productDetail: ProductDetail | null;
    error: CustomError | null;
  }>;
}

export interface AuthOutput {
  signIn(
    signInDto: SignInDto
  ): Promise<{ session: Session | null; error: CustomError | null }>;

  signUp(signUpDto: SignUpDto): Promise<{
    user: User | null;
    session: Session | null;
    error: CustomError | null;
  }>;

  signOut(): Promise<{ error: CustomError | null }>;
}

export interface CartOutput {
  fetchCart(
    id: any | null,
    cart: cartItem[]
  ): Promise<{ cart: cartItem[]; error: CustomError | null }>;
  getCart(
    cart_id: number
  ): Promise<{ cart: cartItem[]; error: CustomError | null }>;
}

export interface AuthState {
  user: User | null;
  session: Session | null;
  signInStatus: RequestStatus;
  signInError: CustomError | null;
  signUpStatus: RequestStatus;
  signUpError: CustomError | null;
  signOutStatus: RequestStatus;
  signOutError: CustomError | null;
}
export interface ProductState {
  product: Product[];
  getProductByStatusStatus: ProductRequestStatus;
  getProductByStatusError: CustomError | null;
  getProductByCategoryStatus: ProductRequestStatus;
  getProductByCategoryError: CustomError | null;
  getProductPaginationStatus: ProductRequestStatus;
  getProductPaginationError: CustomError | null;
  getProductSearchStatus: ProductRequestStatus;
  getProductSearchError: CustomError | null;
}

export interface ProductDetailState {
  productDetail: ProductDetail | null;
  getProductDetailStatus: ProductDetailRequestStatus;
  getProductDetailError: CustomError | null;
}

export interface CartState {
  cartItems: cartItem[];
  cartStatus: RequestCartStatus;
  cartError: CustomError | null;
}

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
  GET_SEARCH = "getProductSearchStatus",
}

export enum ProductDetailCallTypes {
  GET_DETAIL = "getProductDetailStatus",
}

export enum RequestStatus {
  IDLE = "IDLE",
  LOADING = "LOADING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
}

export enum RequestCartStatus {
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
  message: string;
};

export type StatusProduct = {
  status: string;
};

export type TypeProduct = {
  type: string;
};

export type Keyword = {
  keyword: string;
};

export type ProductIdType = {
  product_id: string;
};

export type SignInDto = {
  email: string;
  password: string;
};

export type SignUpDto = {
  fullname: string;
  email: string;
  password: string;
};

export type User = {
  id: string;
  email: string;
};

export type Session = {
  provider_token?: string | null;
  provider_refresh_token?: string | null;
  access_token: string;
  refresh_token: string;
  expires_in: number;
  expires_at?: number;
  token_type: string;
  user: User;
};

export type Product = {
  product_id: string;
  category_id: string;
  name: string;
  description: string;
  image_url: string[];
  price: number;
  status: string;
  stock: number;
};

export type ProductDetail = {
  product_id: string;
  category_id: string;
  name: string;
  description: string;
  image_url: string[];
  price: number;
  status: string;
  stock: number;
  product_detail: Productdetail;
};

export type Productdetail = {
  product_detail_id: string;
  product_id: string;
  sku: string;
  franchise: string;
  set: string;
  year: string;
};

export type cartItem = {
  product_id: string;
  category_id: string;
  name: string;
  description: string;
  image_url: string[];
  price: number;
  status: string;
  stock: number;
  quantity: number;
};

export type AppOutputs = {
  authOutput: AuthOutput;
  productOutput: ProductOutput;
  productDetailOutput: ProductDetailOutput;
  cartOutput: CartOutput;
};

//const

export const appOutputs: AppOutputs = {
  authOutput: new AuthSupabase(),
  productOutput: new ProductSupabase(),
  productDetailOutput: new ProductDetailSupabase(),
  cartOutput: new CartSupabase(),
};

export const initialStateAuth: AuthState = {
  user: null,
  session: null,
  signInStatus: RequestStatus.IDLE,
  signInError: null,
  signUpStatus: RequestStatus.IDLE,
  signUpError: null,
  signOutStatus: RequestStatus.IDLE,
  signOutError: null,
};

export const initialStateProduct: ProductState = {
  product: [],
  getProductByStatusStatus: ProductRequestStatus.IDLE,
  getProductByStatusError: null,
  getProductByCategoryStatus: ProductRequestStatus.IDLE,
  getProductByCategoryError: null,
  getProductPaginationStatus: ProductRequestStatus.IDLE,
  getProductPaginationError: null,
  getProductSearchStatus: ProductRequestStatus.IDLE,
  getProductSearchError: null,
};

export const initialStateProductDetail: ProductDetailState = {
  productDetail: null,
  getProductDetailStatus: ProductDetailRequestStatus.IDLE,
  getProductDetailError: null,
};

export const initialStateCart: CartState = {
  cartItems: [],
  cartStatus: RequestCartStatus.IDLE,
  cartError: null,
};
