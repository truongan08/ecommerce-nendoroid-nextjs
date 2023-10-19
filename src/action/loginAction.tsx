import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Product } from "../../types";
interface Props {
  user: string;
}
const getNendoroid = async (): Promise<user> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  let { data, error } = await supabase.auth.signInWithPassword({
    email: "truonganfi@gmail.com",
    password: "test",
  });

  if (error) {
    console.log(error.message);
  }
  return (data as any) || [];
};

export default getNendoroid;
