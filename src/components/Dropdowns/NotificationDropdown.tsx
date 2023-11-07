"use client";

import React from "react";
import Link from "next/link";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";

import { AiOutlineBell } from "react-icons/ai";

const NotificationDropdown = () => {
  return (
    <Popover placement="bottom-end" showArrow={true}>
      <PopoverTrigger>
        <div className="text-blueGray-500 block py-1 px-3">
          <AiOutlineBell />
        </div>
      </PopoverTrigger>

      <PopoverContent>
        <div className="text-base float-left py-2 list-none text-left min-w-48">
          <Link
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
            onClick={(e) => e.preventDefault()}
          >
            Action
          </Link>
          <Link
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
            onClick={(e) => e.preventDefault()}
          >
            Another action
          </Link>
          <Link
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
            onClick={(e) => e.preventDefault()}
          >
            Something else here
          </Link>
          <div className="h-0 my-2 border border-solid border-blueGray-100" />
          <Link
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
            onClick={(e) => e.preventDefault()}
          >
            Seprated link
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationDropdown;
