import supabase from "@/utils/SupabaseUser";
import {
  ProductOutput,
  CustomError,
  StatusProduct,
  Product,
  TypeProduct,
} from "@/types/user";
import getPagination from "./getPagination";

export class ProductSupabase implements ProductOutput {
  async getProductByStatus({ status }: StatusProduct): Promise<{
    product: Product[] | null;
    error: CustomError | null;
  }> {
    const { data: product, error } = await supabase
      .from("product")
      .select("*")
      .eq("status", status);
    return Promise.resolve({ product, error });
  }

  async getProductByCategory({ type }: TypeProduct): Promise<{
    product: Product[] | null;
    error: CustomError | null;
  }> {
    const { data: product, error } = await supabase
      .from("product")
      .select(`*, category!inner (category_id, name)`)
      .eq("category.name", type);
    return Promise.resolve({ product, error });
  }

  async getProductPagination({ query: { page = 1 } }): Promise<{
    product: Product[] | null;
    count: number | null;
    error: CustomError | null;
  }> {
    const { from, to } = getPagination(page, 10);
    const {
      data: product,
      count,
      error,
    } = await supabase
      .from("product")
      .select("*", { count: "exact" })
      .order("product_id", { ascending: true })
      .range(from, to);
    return Promise.resolve({ product, count, page: +page, error });
  }
}
