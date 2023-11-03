import { ProductDetailCallTypes, CustomError, ProductDetailState, ProductDetail, ProductDetailRequestStatus } from '@/types/user';
import { PayloadAction } from "@reduxjs/toolkit";

export const productDetailReducers = {
    startCall:(
        state: ProductDetailState,
        {payload}:PayloadAction<{callType: ProductDetailCallTypes}>
    ) => {
        state[payload.callType] = ProductDetailRequestStatus.LOADING
    },
    getProductDetail: (state: ProductDetailState, {payload}:PayloadAction<{productDetail: ProductDetail | null; error: CustomError | null}>) => {
        state.productDetail = payload.productDetail
        state.getProductDetailStatus = payload.error ? ProductDetailRequestStatus.FAILED : ProductDetailRequestStatus.IDLE
        state.getProductDetailError = payload.error
    },
}