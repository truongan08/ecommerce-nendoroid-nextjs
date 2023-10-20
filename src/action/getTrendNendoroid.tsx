import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Product } from "../../types";

const getTrendNendoroid = async (): Promise<Product[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });
  let { data, error } = await supabase
    .from("product")
    .select("*")
    .eq("status", "trending");

  if (error) {
    console.log(error.message);
  }
  return (data as any) || [];
};
export default getTrendNendoroid;
