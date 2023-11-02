import { ProductCallTypes, CustomError, ProductState, ProductRequestStatus, Product, ProductDetail, ProductDetailRequestStatus } from '@/types/user';
import { PayloadAction } from "@reduxjs/toolkit";

export const productReducers = {
    startCall:(
        state: ProductState,
        {payload}:PayloadAction<{callType: ProductCallTypes}>
    ) => {
        if(payload.callType != ProductCallTypes.GET_DETAIL) {
            state[payload.callType] = ProductRequestStatus.LOADING
        } else {
            state[payload.callType] = ProductDetailRequestStatus.LOADING
        }
    },
    getProductByStatus: (
        state: ProductState,
        {payload}:PayloadAction<{product: Product[] | null; error: CustomError | null}>
    ) => {
        state.product= payload.product
        state.getProductByStatusStatus = payload.error ? ProductRequestStatus.FAILED : ProductRequestStatus.IDLE
        state.getProductByStatusError = payload.error
        
    },
    getProductByCategory: (
        state: ProductState,
        {payload}:PayloadAction<{product: Product[] | null; error: CustomError | null}>
    ) => {
        state.product= payload.product
        state.getProductByCategoryStatus = payload.error ? ProductRequestStatus.FAILED : ProductRequestStatus.IDLE
        state.getProductByCategoryError = payload.error
    },
    getProductDetail: (state: ProductState, {payload}:PayloadAction<{productDetail: ProductDetail | null; error: CustomError | null}>) => {
        state.productDetail = payload.productDetail
        state.getProductDetailStatus = payload.error ? ProductDetailRequestStatus.FAILED : ProductDetailRequestStatus.IDLE
        state.getProductDetailError = payload.error
    },
}