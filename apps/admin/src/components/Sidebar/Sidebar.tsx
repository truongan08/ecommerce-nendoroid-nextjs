"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  AiOutlineBars,
  AiOutlineClose,
  AiOutlineDashboard,
  AiOutlineShopping,
  AiOutlineSkin,
  AiOutlineUser,
} from "react-icons/ai";

import UserDropdown from "@/components/Dropdowns/UserDropdown";

const Sidebar = () => {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const pathname = usePathname();

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <AiOutlineBars />
          </button>
          {/* Brand */}
          <Link
            href="/"
            legacyBehavior
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
          >
            Wigure
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <Link
                      href="#pablo"
                      className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    >
                      Wigure
                    </Link>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <AiOutlineClose />
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="my-0 md:hidden">
              <div className="pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-0 h-12 border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Admin action database
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  href="/dashboard"
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (pathname.indexOf("/dashboard") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                >
                  <AiOutlineDashboard
                    className={
                      "mr-2 text-sm inline h-5 w-5 " +
                      (pathname.indexOf("/dashboard") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></AiOutlineDashboard>
                  Dashboard
                </Link>
              </li>

              <li className="items-center">
                <Link
                  href="/products/0"
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (pathname.indexOf("/products") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                >
                  <AiOutlineSkin
                    className={
                      "mr-2 text-sm inline h-5 w-5 " +
                      (pathname.indexOf("/products") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></AiOutlineSkin>
                  Products
                </Link>
              </li>

              <li className="items-center">
                <Link
                  href="/users/0"
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (pathname.indexOf("/users") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                >
                  <AiOutlineUser
                    className={
                      "mr-2 text-sm inline h-5 w-5 " +
                      (pathname.indexOf("/users") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></AiOutlineUser>
                  Users
                </Link>
              </li>

              <li className="items-center">
                <Link
                  href="/orders/0"
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (pathname.indexOf("/orders") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                >
                  <AiOutlineShopping
                    className={
                      "mr-2 text-sm inline h-5 w-5 " +
                      (pathname.indexOf("/orders") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></AiOutlineShopping>
                  Orders
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
