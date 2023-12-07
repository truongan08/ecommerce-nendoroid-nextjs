import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import ContentOrderDetail from "./components/ContentOrderDetail";
import { cookies } from "next/headers";

const OrderDetail = async ({ params }: { params: { slug: number } }) => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  console.log(params.slug);
  if (isNaN(params.slug)) {
    throw Error("Not found");
  }
  const { data, error } = await supabase
    .from("order")
    .select("*")
    .eq("order_id", params.slug)
    .single();
  if (error) {
    throw Error("Fail to fetch order");
  }
  const { data: order_detail, error: errororderdetail } = await supabase
    .from("order_detail")
    .select("*")
    .eq("order_id", params.slug)
    .single();
  if (errororderdetail) {
    throw Error("Fail to fetch order detail");
  }
  return (
    <>
      <ContentOrderDetail orderDetail={order_detail} order={data} />
    </>
  );
};

export default OrderDetail;
