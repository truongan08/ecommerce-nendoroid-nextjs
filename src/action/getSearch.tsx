import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Product } from "../../types";

const getSearch = async (textSearch: string): Promise<Product[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  let { data, error } = await supabase
    .from("product")
    .select("*")
    .textSearch("name", textSearch, {
      config: "english",
    });

  if (error) {
    console.log(error.message);
  }
  return (data as any) || [];
};
export default getSearch;
