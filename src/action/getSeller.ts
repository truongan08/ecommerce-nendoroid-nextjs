import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Product } from "@/types/user";

const getSeller = async (
): Promise<Product[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  let { data, error } = await supabase
    .from("product")
    .select("*")
    .eq("status", "best-seller")

  if (error) {
    console.log(error.message);
  }
  return (data as any) || [];
};
export default getSeller;
