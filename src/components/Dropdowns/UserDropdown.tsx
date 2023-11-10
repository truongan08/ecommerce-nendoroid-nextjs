"use client";

import React from "react";
import Link from "next/link";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";

const UserDropdown = () => {
  const items = [
    {
      key: "profile",
      label: "Profile",
    },
    {
      key: "setting",
      label: "Setting",
    },
    {
      key: "logout",
      label: "Logout",
    },
  ];
  return (
    <Dropdown
      placement="bottom-end"
      showArrow={true}
      offset={10}
      backdrop="opaque"
    >
      <DropdownTrigger>
        <div className="text-blueGray-500 block">
          <div className="items-center flex">
            <Avatar src="/img/team-1-800x800.jpg" size="lg" />
          </div>
        </div>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={items}>
        {(item) => (
          <DropdownItem
            key={item.key}
            color={item.key === "logout" ? "danger" : "default"}
            className={item.key === "logout" ? "text-danger" : ""}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserDropdown;
