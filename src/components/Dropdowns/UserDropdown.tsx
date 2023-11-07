"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";

const UserDropdown = () => {
  return (
    <Popover placement="bottom-end" showArrow={true}>
      <PopoverTrigger>
        <div className="text-blueGray-500 block">
          <div className="items-center flex">
            <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
              <Image
                alt="..."
                className="w-full rounded-full align-middle border-none shadow-lg"
                src="/img/team-1-800x800.jpg"
                height={800}
                width={800}
              />
            </span>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="text-base z-50 float-left py-2 list-none text-left min-w-48">
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

export default UserDropdown;
