"use client";

import React, { useEffect, useState } from "react";
import {
  Avatar,
  AvatarGroup,
  Button,
  Select,
  SelectItem,
  Tab,
  Tabs,
} from "ui/components";

import { ProductTable, order } from "@/types/admin";
import { Pagination, PaginationItem, PaginationCursor } from "ui/components";
import { useRouter } from "next/navigation";
import AddProduct from "@/components/Modals/Product/AddProduct";
import EditProduct from "@/components/Modals/Product/EditProduct";
import supabase from "@/utils/SupabaseAdmin";
import { MdDelete } from "react-icons/md";

interface CardTableProps {
  color?: string;
  tableName: string;
  data?: order[];
}

const CardTable: React.FC<CardTableProps> = ({ color, data, tableName }) => {
  const [selected, setSelected] = React.useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const updateStatus = async (status: any, order_id: any) => {
    setLoading(true);
    const { error } = await supabase
      .from("order")
      .update({ status })
      .eq("order_id", order_id);
    if (!error) {
      router.refresh();
      setLoading(false);
    }
  };
  const handleDelete = async (order_id: any) => {
    const result = confirm("Are you sure, you cant back up after delete");
    if (result == true) {
      const { error } = await supabase
        .from("order_detail")
        .delete()
        .eq("order_id", order_id);
      const { error: Error } = await supabase
        .from("order")
        .delete()
        .eq("order_id", order_id);
      if (!error || !Error) {
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
  const keysOfFirstObject = data ? Object.keys(data[0]) : [];
  const formatDate = (date: any) => {
    const dateNew = new Date(date);
    return `${dateNew.getDate()}/${
      dateNew.getMonth() + 1
    }/${dateNew.getFullYear()} ${dateNew.getHours()}:${dateNew.getMinutes()}`;
  };
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
              {data?.map((item, index) => (
                <tr key={index}>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <span
                      className={
                        color === "light" ? "text-blueGray-600" : "text-white"
                      }
                    >
                      {item.order_id}
                    </span>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {formatDate(item.created_at)}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.customer_id}
                  </td>
                  <Tabs
                    aria-label="Options"
                    className="border-none shadow-none ring-offset-0 ring-0 focus:shadow-none focus:ring-offset-0 focus:ring-0 bg-transparent text-black/90 placeholder:text-default-700/500"
                    size="sm"
                    defaultSelectedKey={item.status}
                    onSelectionChange={(key: React.Key) =>
                      updateStatus(key, item.order_id)
                    }
                    isDisabled={loading}
                  >
                    <Tab title={"open"} key={"open"}></Tab>
                    <Tab title={"confirmed"} key="confirmed"></Tab>
                    <Tab title={"pending"} key="pending"></Tab>
                    <Tab title={"complete"} key="complete"></Tab>
                  </Tabs>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.total_amount}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.method}
                  </td>

                  <td className="border-t-0 align-middle border-l-0 border-r-0 text-right">
                    <Button
                      color="danger"
                      onPress={() => handleDelete(item.order_id)}
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
    </>
  );
};

CardTable.defaultProps = {
  color: "light",
};

export default CardTable;
