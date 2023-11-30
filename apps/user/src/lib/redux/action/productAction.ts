import supabase from "@/utils/SupabaseUser";
import {
  ProductOutput,
  CustomError,
  StatusProduct,
  TypeProduct,
  Keyword,
} from "@/types/user";

export class ProductSupabase implements ProductOutput {
  async getProductByStatus({ status }: StatusProduct): Promise<{
    product: any;
    error: CustomError | null;
  }> {
    const { data: product, error } = await supabase
      .from("product")
      .select("*")
      .eq("status", status);
    return Promise.resolve({ product, error });
  }

  async getProductByCategory({ type }: TypeProduct): Promise<{
    product: any;
    error: CustomError | null;
  }> {
    const { data: product, error } = await supabase
      .from("product")
      .select(`*, category!inner (category_id, name)`)
      .eq("category.name", type);
    return Promise.resolve({ product, error });
  }

  async getProductPagination(page: number): Promise<{
    product: any;
    count: any | null;
    error: CustomError | null;
  }> {
    const limit = 7;
    const from = page ? page * limit : 0;
    const to = page ? from + limit : limit;

    const {
      data: product,
      count,
      error,
    } = await supabase
      .from("product")
      .select("*", { count: "exact" })
      .range(from, to);
    return Promise.resolve({ product, count, error });
  }

  async getProductSearch({
    keyword,
  }: Keyword): Promise<{ product: any; error: CustomError | null }> {
    const { data: product, error } = await supabase
      .from("product")
      .select("*")
      .textSearch("name", keyword, {
        config: "english",
        type: "plain",
      });
    return Promise.resolve({ product, error });
  }
}
