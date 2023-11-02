import { productSlice } from "./productSlice"
import { ProductOutput, CustomError, StatusProduct, ProductCallTypes, Product, TypeProduct, ProductDetail } from "@/types/user"

const { actions } = productSlice

export const getProductByStatus = (status: StatusProduct) =>
	async (
		dispatch: any,
		_: any,
		{ productOutput }: { productOutput: ProductOutput }
	) => {
		dispatch(actions.startCall({ callType: ProductCallTypes.GET_BY_STATUS }))

		const ProductStatusRo: { product: Product[] | null; error: CustomError | null } =
			await productOutput.getProductByStatus(status)

		dispatch(actions.getProductByStatus(ProductStatusRo))
	}

export const getProductByCategory = (type: TypeProduct) =>
	async (
		dispatch: any,
		_: any,
		{ productOutput }: { productOutput: ProductOutput }
	) => {
		dispatch(actions.startCall({ callType: ProductCallTypes.GET_BY_TYPE }))

		const ProductTypeRo: { product: Product[] | null; error: CustomError | null } =
			await productOutput.getProductByCategory(type)

		dispatch(actions.getProductByCategory(ProductTypeRo))
	}
export const getProductDetail = (product_id: string) => 
	async (
		dispatch:any,
		_:any,
		{ productOutput }: { productOutput: ProductOutput }
	) => {
		dispatch(actions.startCall({callType: ProductCallTypes.GET_DETAIL}))

		const ProductDetailRo: { productDetail: ProductDetail | null; error:CustomError | null } = 
			await productOutput.getProductDetail(product_id)

		dispatch(actions.getProductDetail(ProductDetailRo))
}