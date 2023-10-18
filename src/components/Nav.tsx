"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Button from "./Button";
import { BiSearch } from "react-icons/bi";
interface HeaderProps {
  logo: string;
}

const Nav: React.FC<HeaderProps> = ({}) => {
  let links = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/" },
    { name: "About", link: "/" },
    { name: "Blog's", link: "/" },
    { name: "Contact", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="w-full fixed shadow top-0 left-0 ">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="text-2xl flex items-center cursor-pointer font-bold text-blue-800">
          <span className="w-full">
            <Image
              src="/images/wigure.jpg"
              alt=""
              width={65}
              height={65}
              style={{ objectFit: "contain" }}
            />
          </span>
        </div>
        <div className="">
          <div className="flex items-center bg-gray-100 rounded-full p-2 mt-2">
            <button>
              <BiSearch size={20} className="opacity-50" />
            </button>
            <input
              type="text"
              className="outline-none bg-transparent ml-2 caret-blue-500 placeholder:font-light placeholder:text-gray-600 text-[15px]"
              placeholder="Search"
              autoComplete="false"
            />
            <button className="text-blue-800 ml-8 max-md:hidden max-sm:hidden text-sm border-s-2 mr-4">
              <div className="ml-4">Search</div>
            </button>
          </div>
        </div>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="absolute right-8 top-7 md:hidden cursor-pointer"
        >
          {open ? (
            <AiOutlineClose className="text-3xl" />
          ) : (
            <AiOutlineMenu className="text-3xl" />
          )}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ${
            open
              ? "top-16 opacity-100"
              : "top-[-350px] md:opacity-100 opacity-0"
          }`}
        >
          {links.map((link, index) => (
            <li key={index} className="md:ml-8 text-sm md:my-0 my-7">
              <Link
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <Button>Sign In</Button>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
