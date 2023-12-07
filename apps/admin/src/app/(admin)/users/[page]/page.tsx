import React from "react";
import CardTable from "./components/CardTable";
import supabase from "@/utils/SupabaseAdmin";

const getData = async (page: number) => {
  const {
    data: { users },
    error,
  } = await supabase.auth.admin.listUsers({
    page: page,
    perPage: 8,
  });
  if (error) {
    throw Error("Failed to fetch data");
  }
  return { tableName: "User", users };
};

const Users = async ({ params }: { params: { page: number } }) => {
  const data: any = await getData(params.page);
  console.log(data);

  if (isNaN(params.page) || params.page > data.count / 8) {
    return <>Not found page, pls reload</>;
  }
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable
            data={data.users}
            tableName={data.tableName}
            count={data.count}
            page={params.page}
          />
        </div>
      </div>
    </>
  );
};

export default Users;
