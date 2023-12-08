import React from "react";
import CardTable from "./components/CardTable";

const Products = async ({ params }: { params: { page: number } }) => {
  const response = await fetch(
    "https://wigure-admin.vercel.app/api/get_product",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ page: params.page }),
    }
  );

  const data = await response.json();

  if (
    isNaN(params.page) ||
    params.page > data.count / 8 ||
    data.error !== null
  ) {
    return (
      <div className="min-h-[600px] mx-auto my-0 w-auto max-w-[560px] flex items-center justify-center flex-col">
        <h1 className="max-w-[529px] text-[38px] font-bold text-black">
          Woops! Something went wrong!
        </h1>
      </div>
    );
  }
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable
            data={data}
            tableName={data.tableName}
            count={data.count}
            page={params.page}
          />
        </div>
      </div>
    </>
  );
};

export default Products;
