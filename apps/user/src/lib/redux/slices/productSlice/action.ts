import { productSlice } from "./productSlice";
import {
  ProductOutput,
  CustomError,
  StatusProduct,
  ProductCallTypes,
  Product,
  TypeProduct,
  Keyword,
} from "@/types/user";

const { actions } = productSlice;

//call many reducer on 1 action

export const getProductByStatus =
  (status: StatusProduct) =>
  async (
    dispatch: any,
    _: any,
    { productOutput }: { productOutput: ProductOutput }
  ) => {
    dispatch(actions.startCall({ callType: ProductCallTypes.GET_BY_STATUS }));

    const ProductStatusRo: { product: Product[]; error: CustomError | null } =
      await productOutput.getProductByStatus(status);

    dispatch(actions.getProductByStatus(ProductStatusRo));
  };

export const getProductByCategory =
  (type: TypeProduct) =>
  async (
    dispatch: any,
    _: any,
    { productOutput }: { productOutput: ProductOutput }
  ) => {
    dispatch(actions.startCall({ callType: ProductCallTypes.GET_BY_TYPE }));

    const ProductTypeRo: { product: Product[]; error: CustomError | null } =
      await productOutput.getProductByCategory(type);

    dispatch(actions.getProductByCategory(ProductTypeRo));
  };

export const getProductSearch =
  (keyword: Keyword) =>
  async (
    dispatch: any,
    _: any,
    { productOutput }: { productOutput: ProductOutput }
  ) => {
    dispatch(actions.startCall({ callType: ProductCallTypes.GET_SEARCH }));

    const ProductSearchRo: { product: Product[]; error: CustomError | null } =
      await productOutput.getProductSearch(keyword);

    dispatch(actions.getProductSearch(ProductSearchRo));
  };
export const getProductPagination =
  (page: number) =>
  async (
    dispatch: any,
    _: any,
    { productOutput }: { productOutput: ProductOutput }
  ) => {
    dispatch(actions.startCall({ callType: ProductCallTypes.GET_PAGINATION }));

    const ProductPaginationRo: {
      product: Product[];
      count: number | null;
      error: CustomError | null;
    } = await productOutput.getProductPagination(page);

    dispatch(actions.getProductPagination(ProductPaginationRo));
  };
