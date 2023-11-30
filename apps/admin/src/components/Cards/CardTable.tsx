"use client";

import React, { useEffect, useState } from "react";
import { Avatar, AvatarGroup, Button } from "ui/components";

import { ProductTable } from "@/types/admin";
import { Pagination, PaginationItem, PaginationCursor } from "ui/components";
import { useRouter } from "next/navigation";
import AddProduct from "@/components/Modals/Product/AddProduct";
import EditProduct from "../Modals/Product/EditProduct";
import supabase from "@/utils/SupabaseAdmin";
import { MdDelete } from "react-icons/md";

interface CardTableProps {
  color?: string;
  tableName: string;
  data?: ProductTable | undefined;
  count: number;
  page: number;
}

const CardTable: React.FC<CardTableProps> = ({
  color,
  data,
  tableName,
  count,
  page,
}) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const handleDelete = async (id: any) => {
    const result = confirm("Are you sure, you cant back up after delelte");
    if (result == true) {
      const { error } = await supabase
        .from("product")
        .delete()
        .eq("product_id", id);
      if (!error) {
        router.refresh();
      }
    } else {
      return;
    }
  };
  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, []);
  const keysOfFirstObject = data ? Object.keys(data?.data[0]) : [];
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                {tableName}
              </h3>
            </div>
            <AddProduct />
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                {keysOfFirstObject.map((item, index) => (
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                    }
                    key={index}
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.data.map((item, index) => (
                <tr key={index}>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <span
                      className={
                        color === "light" ? "text-blueGray-600" : "text-white"
                      }
                    >
                      {item.product_id}
                    </span>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.category_id}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.name}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.description}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <AvatarGroup max={2} className="float-left" radius="sm">
                      {item?.image_url.map((item, index) => (
                        <Avatar key={index} src={item} radius="sm" />
                      ))}
                    </AvatarGroup>
                  </td>

                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.price}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.status}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.stock}
                  </td>
                  <td className="border-t-0 align-middle border-l-0 border-r-0 text-right">
                    <EditProduct props={item} />
                  </td>
                  <td className="border-t-0 align-middle border-l-0 border-r-0 text-right">
                    <Button
                      color="danger"
                      onPress={() => handleDelete(item.product_id)}
                      isIconOnly
                    >
                      <MdDelete />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="float-right ">
        <Pagination
          showControls
          isCompact
          total={count / 4}
          isDisabled={loading}
          disableAnimation={true}
          onChange={(page: number) => {
            router.push(`/products/${page}`);
          }}
          page={Number(page)} //! Error start in prev button when refresh page so convert it to number
        />
      </div>
    </>
  );
};

CardTable.defaultProps = {
  color: "light",
};

export default CardTable;
