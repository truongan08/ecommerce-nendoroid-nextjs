import {
  ProductCallTypes,
  CustomError,
  ProductState,
  ProductRequestStatus,
  Product,
} from "@/types/user";
import { PayloadAction } from "@reduxjs/toolkit";

export const productReducers = {
  startCall: (
    state: ProductState,
    { payload }: PayloadAction<{ callType: ProductCallTypes }>
  ) => {
    state[payload.callType] = ProductRequestStatus.LOADING;
  },
  getProductByStatus: (
    state: ProductState,
    {
      payload,
    }: PayloadAction<{ product: Product[]; error: CustomError | null }>
  ) => {
    state.product = payload.product;
    state.getProductByStatusStatus = payload.error
      ? ProductRequestStatus.FAILED
      : ProductRequestStatus.IDLE;
    state.getProductByStatusError = payload.error;
  },
  getProductByCategory: (
    state: ProductState,
    {
      payload,
    }: PayloadAction<{ product: Product[]; error: CustomError | null }>
  ) => {
    state.product = payload.product;
    state.getProductByCategoryStatus = payload.error
      ? ProductRequestStatus.FAILED
      : ProductRequestStatus.IDLE;
    state.getProductByCategoryError = payload.error;
  },
  getProductSearch: (
    state: ProductState,
    {
      payload,
    }: PayloadAction<{ product: Product[]; error: CustomError | null }>
  ) => {
    state.product = payload.product;
    state.getProductSearchStatus = payload.error
      ? ProductRequestStatus.FAILED
      : ProductRequestStatus.IDLE;
    state.getProductSearchError = payload.error;
  },
};
