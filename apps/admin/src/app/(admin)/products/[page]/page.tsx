import React from "react";
import CardTable from "@/components/Cards/CardTable";
import supabase from "@/utils/SupabaseAdmin";

const Products = async ({ params }: { params: { page: number } }) => {
  const getStaticProps = async (page: number) => {
    const limit = 3;
    const from = page ? page * limit : 0;
    const to = page ? from + limit : limit;

    const { data, count, error } = await supabase
      .from("product")
      .select("*", { count: "exact" })
      .range(from, to);
    if (error) {
      throw Error("Failed to fetch data");
    }
    return { tableName: "Product", data, count };
  };

  const data: any = await getStaticProps(params.page);

  if (isNaN(params.page) || params.page > data.count / 4) {
    return <>Not found your page, pls reload</>;
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
