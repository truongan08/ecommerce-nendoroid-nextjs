import { productDetailSlice } from "./productDetailSlice"
import { ProductDetailOutput, CustomError, ProductDetailCallTypes, ProductDetail, ProductIdType } from "@/types/user"

const { actions } = productDetailSlice

export const getProductDetail = (product_id: ProductIdType) => 
	async (
		dispatch:any,
		_:any,
		{ productDetailOutput }: { productDetailOutput: ProductDetailOutput }
	) => {
		dispatch(actions.startCall({callType: ProductDetailCallTypes.GET_DETAIL}))

		const ProductDetailRo: { productDetail: ProductDetail | null; error:CustomError | null } = 
			await productDetailOutput.getProductDetail(product_id)

		dispatch(actions.getProductDetail(ProductDetailRo))
}