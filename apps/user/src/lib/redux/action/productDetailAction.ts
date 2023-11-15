import supabase from "@/utils/SupabaseUser";
import {
  ProductDetailOutput,
  CustomError,
  ProductDetail,
  ProductIdType,
} from "@/types/user";

export class ProductDetailSupabase implements ProductDetailOutput {
  async getProductDetail({product_id}: ProductIdType): Promise<{ 
    productDetail: ProductDetail | null;
    error: CustomError | null;
  }> {
    const { data: productDetail, error } = await supabase
    .from('product')
    .select("*, product_detail!inner(*)")
    .eq("product_id", product_id)
    .single()
    return Promise.resolve({ productDetail, error });
  }
}
