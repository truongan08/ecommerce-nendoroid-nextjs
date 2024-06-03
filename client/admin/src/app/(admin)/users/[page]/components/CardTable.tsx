"use client";

import React, { useEffect, useState } from "react";
import { Avatar, AvatarGroup, Button } from "ui/components";
import { Pagination, PaginationItem, PaginationCursor } from "ui/components";
import { useRouter } from "next/navigation";
import AddUser from "@/components/Modals/User/AddUser";
import supabase from "@/utils/SupabaseAdmin";
import { MdDelete } from "react-icons/md";
import { User } from "@supabase/supabase-js";

interface CardTableProps {
  color?: string;
  tableName: string;
  data?: User[] | undefined;
  count?: number;
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
  const formatDate = (date: any) => {
    const dateNew = new Date(date);
    return `${dateNew.getDate()}/${
      dateNew.getMonth() + 1
    }/${dateNew.getFullYear()} ${dateNew.getHours()}:${dateNew.getMinutes()}`;
  };
  const handleDelete = async (id: any) => {
    const result = confirm("Are you sure, you cant back up after delete");
    if (result == true) {
      const { data, error } = await supabase.auth.admin.deleteUser(id);
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
  const keysOfFirstObject = data ? Object.keys(data[0]) : [];
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
            <AddUser />
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
                      {item?.id}
                    </span>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item?.aud}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item?.role}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item?.email}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {formatDate(item?.email_confirmed_at)}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item?.phone}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {formatDate(item?.confirmed_at)}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    null
                  </td>
                  {/* <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {formatDate(item?.last_sign_in_at)}
                  </td> */}

                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    Role: {item?.app_metadata.claims_admin ? "Admin" : "User"}{" "}
                    <br />
                    Fullname: {item?.user_metadata.full_name}
                    <Avatar src={item?.user_metadata.avatar_url} radius="sm" />
                  </td>

                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    null
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {formatDate(item?.created_at)}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {formatDate(item?.updated_at)}
                  </td>
                  <td className="border-t-0 align-middle border-l-0 border-r-0 text-right">
                    <Button
                      color="danger"
                      onPress={() => handleDelete(item.id)}
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
