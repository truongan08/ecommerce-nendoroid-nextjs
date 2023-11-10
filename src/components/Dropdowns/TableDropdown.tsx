"use client";

import React from "react";
import Link from "next/link";
import { AiOutlineEllipsis } from "react-icons/ai";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";

const TableDropdown = () => {
  const items = [
    {
      key: "new",
      label: "Add",
    },
    {
      key: "edit",
      label: "Edit",
    },
    {
      key: "delete",
      label: "Delete",
    },
  ];
  return (
    <Dropdown backdrop="blur" showArrow>
      <DropdownTrigger>
        <div className="text-blueGray-500 py-1 px-3">
          <AiOutlineEllipsis className="h-4 w-4 rotate-90" />
        </div>
      </DropdownTrigger>

      <DropdownMenu aria-label="Dynamic Actions" items={items}>
        {(item) => (
          <DropdownItem
            key={item.key}
            color={item.key === "delete" ? "danger" : "default"}
            className={item.key === "delete" ? "text-danger" : ""}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};

export default TableDropdown;
