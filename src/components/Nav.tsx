"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import Button from "./Button";
import SearchBar from "./Search";
import SignIn from "@/components/ModalSignIn";
import Register from "@/components/ModalRegister";
import { selectIsLoggedInUser, useAppSelector } from "@/lib/redux";
import SideBar from "./SideBar";

const Nav = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/product/0" },
    { name: "About", link: "/" },
    { name: "Blog's", link: "/" },
    { name: "Contact", link: "/" },
  ];
  const [open, setOpen] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);
  const isLoggedInUser: boolean = useAppSelector(selectIsLoggedInUser);

  const onCLickModalLogin = () => {
    setModalLogin(!modalLogin);
  };

  const onCLickModalRegister = () => {
    setModalRegister(!modalRegister);
  };

  const onCLickSwitchModal = async (e: any) => {
    if (e == "login") {
      setModalRegister(!modalRegister);
      const timeout = await setTimeout(() => {
        setModalLogin(!modalLogin);
      }, 1000);
      return () => clearInterval(timeout);
    }
    if (e == "register") {
      setModalLogin(!modalLogin);
      const timeout = await setTimeout(() => {
        setModalRegister(!modalRegister);
      }, 1000);
      console.log("login");
      return () => clearInterval(timeout);
    }
  };

  const onCLickOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <>
      <div className="w-full shadow top-0 left-0 right-0 bottom-0 absolute">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div className="text-2xl flex items-center cursor-pointer font-bold text-blue-800">
            <Link href={"/"} className="w-full">
              <Image
                src="/images/wigure.jpg"
                alt=""
                width={65}
                height={65}
                style={{ objectFit: "contain", maxWidth: "65px" }}
              />
            </Link>
          </div>

          <SearchBar />

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
            className={`md:flex md:items-center md:pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ${
              open
                ? "top-16 mt-16 bg-white z-100"
                : "top-[-350px] md:opacity-100 opacity-0 "
            }`}
          >
            {links.map((link, index) => (
              <li key={index} className="md:ml-8 text-sm md:my-0 my-7 ml-2">
                <Link
                  href={link.link}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {/* {open &&  */}
            <li
              className={`md:ml-8 text-sm md:my-0 my-7 ml-2 ${
                open ? "" : "hidden"
              }`}
            >
              {isLoggedInUser ? (
                <Image
                  onClick={() => setOpenSidebar(!openSidebar)}
                  src="/images/avatar.png"
                  width={40}
                  height={40}
                  alt="avatar"
                  className="rounded-full relative md:hidden cursor-pointer"
                  style={{ objectFit: "contain", maxWidth: "40px" }}
                />
              ) : (
                <SignIn
                  modalLogin={modalLogin}
                  clickModalLogin={() => onCLickModalLogin()}
                  clickSwitchModal={(e) => {
                    onCLickSwitchModal(e);
                  }}
                />
              )}
            </li>
          </ul>

          <div>
            {isLoggedInUser ? (
              <>
                <Image
                  onClick={() => setOpenSidebar(!openSidebar)}
                  src="/images/avatar.png"
                  width={40}
                  height={40}
                  alt="avatar"
                  className="rounded-full relative max-md:hidden cursor-pointer"
                  style={{ objectFit: "contain", maxWidth: "40px" }}
                />

                <SideBar
                  openSidebar={openSidebar}
                  onCLickOpenSidebar={() => onCLickOpenSidebar()}
                />
              </>
            ) : (
              <>
                <Button
                  text={"Sign In"}
                  onClickProps={() => onCLickModalLogin()}
                ></Button>

                <SignIn
                  modalLogin={modalLogin}
                  clickModalLogin={() => onCLickModalLogin()}
                  clickSwitchModal={(e) => {
                    onCLickSwitchModal(e);
                  }}
                />

                <Register
                  modalRegister={modalRegister}
                  clickModalRegister={() => onCLickModalRegister()}
                  clickSwitchModal={(e) => {
                    onCLickSwitchModal(e);
                  }}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Nav;
