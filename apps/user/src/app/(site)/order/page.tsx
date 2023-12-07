import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import OrderContent from "./components/OrderContent";
import { cookies } from "next/headers";

const Order = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const { data, error } = await supabase
    .from("order")
    .select(`*,profile:order_detail(address)`);
  if (error || session === null) {
    throw Error("Fail to fetch order");
  }
  return (
    <>
      <OrderContent order={data} session={session} />
    </>
  );
};
export default Order;
