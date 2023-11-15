import React from "react";
import CardTable from "@/components/Cards/CardTable";
import { DtaTable } from "@/types/admin";

const Products = () => {
  const data: DtaTable = {
    tableName: "Products",
    data: [
      {
        product_id: "1",
        category_id: "1223",
        name: "name",
        description: "description",
        image_url: [
          "https://gonkolbxsaadkmuxbrak.supabase.co/storage/v1/object/public/products/026-Ouka-Chan-1.jpg?t=2023-10-30T19%3A04%3A58.330Z",
          "https://gonkolbxsaadkmuxbrak.supabase.co/storage/v1/object/public/products/026-Ouka-Chan-2.jpg?t=2023-10-30T19%3A05%3A17.993Z",
        ],
        price: 123,
        status: "status",
        stock: 12,
      },
      {
        product_id: "1",
        category_id: "1223",
        name: "name",
        description: "description",
        image_url: [
          "https://gonkolbxsaadkmuxbrak.supabase.co/storage/v1/object/public/products/026-Ouka-Chan-1.jpg?t=2023-10-30T19%3A04%3A58.330Z",
          "https://gonkolbxsaadkmuxbrak.supabase.co/storage/v1/object/public/products/026-Ouka-Chan-2.jpg?t=2023-10-30T19%3A05%3A17.993Z",
          "https://gonkolbxsaadkmuxbrak.supabase.co/storage/v1/object/public/products/026-Ouka-Chan-1.jpg?t=2023-10-30T19%3A04%3A58.330Z",
          "https://gonkolbxsaadkmuxbrak.supabase.co/storage/v1/object/public/products/026-Ouka-Chan-2.jpg?t=2023-10-30T19%3A05%3A17.993Z",
        ],
        price: 123,
        status: "status",
        stock: 12,
      },
      {
        product_id: "1",
        category_id: "1223",
        name: "name",
        description: "description",
        image_url: [
          "https://gonkolbxsaadkmuxbrak.supabase.co/storage/v1/object/public/products/026-Ouka-Chan-1.jpg?t=2023-10-30T19%3A04%3A58.330Z",
          "https://gonkolbxsaadkmuxbrak.supabase.co/storage/v1/object/public/products/026-Ouka-Chan-2.jpg?t=2023-10-30T19%3A05%3A17.993Z",
        ],
        price: 123,
        status: "status",
        stock: 12,
      },
    ],
  };
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable data={data} />
        </div>
      </div>
    </>
  );
};

export default Products;
