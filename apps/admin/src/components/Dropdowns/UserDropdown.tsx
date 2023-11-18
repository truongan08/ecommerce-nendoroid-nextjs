"use client";

import React from "react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "ui/components";
import { Avatar } from "ui/components";

import supabase from "@/utils/SupabaseAdmin";

import { useRouter } from "next/navigation";

const UserDropdown = () => {
  const router = useRouter();
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

  const handleLogout = async (items: React.Key) => {
    if (items === "logout") {
      await supabase.auth.signOut();
      router.push("/");
    }
  };

  return (
    <Dropdown placement="bottom-end" showArrow={true} backdrop="opaque">
      <DropdownTrigger>
        <div className="text-blueGray-500 block">
          <div className="items-center flex">
            <Avatar src="/img/team-1-800x800.jpg" />
          </div>
        </div>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Dynamic Actions"
        items={items}
        onAction={(key) => handleLogout(key)}
      >
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
