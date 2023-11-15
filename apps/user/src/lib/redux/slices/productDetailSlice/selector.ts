import type { RootState } from '@/lib/redux'
import { CustomError, ProductDetail, ProductDetailRequestStatus } from '@/types/user'

export const selectProductDetailInState = ({productDetail}: RootState): ProductDetail | null => productDetail.productDetail;

export const selectGetProductDetailStatus = ({productDetail}: RootState): ProductDetailRequestStatus => 
productDetail.getProductDetailStatus
export const selectGetProductDetailError = ({productDetail}: RootState): CustomError | null => 
productDetail.getProductDetailError
