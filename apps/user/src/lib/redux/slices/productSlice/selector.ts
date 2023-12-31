import type { RootState } from "@/lib/redux";
import { CustomError, Product, ProductRequestStatus } from "@/types/user";

export const selectProductInState = ({
  product,
}: RootState): Product[] | null => product.product;

export const selectCountInState = ({ product }: RootState): number | null =>
  product.count;

export const selectGetProductByStatusStatus = ({
  product,
}: RootState): ProductRequestStatus => product.getProductByStatusStatus;
export const selectGetProductByStatusError = ({
  product,
}: RootState): CustomError | null => product.getProductByStatusError;

export const selectGetProductByCategoryStatus = ({
  product,
}: RootState): ProductRequestStatus => product.getProductByCategoryStatus;
export const selectGetProductByCategoryError = ({
  product,
}: RootState): CustomError | null => product.getProductByCategoryError;

export const selectGetProductPaginationStatus = ({
  product,
}: RootState): ProductRequestStatus => product.getProductPaginationStatus;
export const selectGetProductPaginationError = ({
  product,
}: RootState): CustomError | null => product.getProductPaginationError;

export const selectGetProductSearchStatus = ({
  product,
}: RootState): ProductRequestStatus => product.getProductSearchStatus;
export const selectGetProductSearchError = ({
  product,
}: RootState): CustomError | null => product.getProductSearchError;
