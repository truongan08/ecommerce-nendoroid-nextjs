import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Product } from "@/types/user";

const getNenPagination = async (
  from: number,
  to: number
): Promise<Product[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  let { data, error } = await supabase
    .from("product")
    .select("*")
    .range(from, to);

  if (error) {
    console.log(error.message);
  }
  return (data as any) || [];
};
export default getNenPagination;
