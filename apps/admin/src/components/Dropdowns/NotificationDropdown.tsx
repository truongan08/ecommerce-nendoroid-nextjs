"use client";

import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "ui/components";

import { AiOutlineBell } from "react-icons/ai";

const NotificationDropdown = () => {
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
    <Dropdown showArrow={true} offset={10} backdrop="opaque">
      <DropdownTrigger>
        <div className="text-blueGray-500 block py-1 px-3">
          <AiOutlineBell />
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

export default NotificationDropdown;
