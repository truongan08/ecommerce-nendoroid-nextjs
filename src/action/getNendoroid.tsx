import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Product } from "../../types";

const getNendoroid = async (): Promise<Product[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });
  let { data, error } = await supabase.from("product").select("*");
  if (error) {
    console.log(error.message);
  }
  return (data as any) || [];
};

export default getNendoroid;
