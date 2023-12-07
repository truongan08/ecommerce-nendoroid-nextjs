import React from "react";
import CardTable from "./components/CardTable";
import supabase from "@/utils/SupabaseAdmin";

async function getData(page: number) {
  const { data, error } = await supabase.from("order").select(`*`);
  if (error) {
    throw Error("Failed to fetch data");
  }
  return { tableName: "Order", data };
}

const Orders = async ({ params }: { params: { page: number } }) => {
  const data: any = await getData(params.page);
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable data={data.data} tableName={data.tableName} />
        </div>
      </div>
    </>
  );
};

export default Orders;
