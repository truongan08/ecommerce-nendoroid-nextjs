import React from "react";
import Link from "next/link";
import { AiOutlineEllipsis } from "react-icons/ai";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";

const TableDropdown = () => {
  return (
    <Popover placement="bottom-end" showArrow={true}>
      <PopoverTrigger>
        <div className="text-blueGray-500 py-1 px-3">
          <AiOutlineEllipsis />
        </div>
      </PopoverTrigger>

      <PopoverContent>
        <div className="text-base z-50 float-left py-2 list-none text-left min-w-48">
          <Link
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Action
          </Link>
          <Link
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Another action
          </Link>
          <Link
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Something else here
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default TableDropdown;
