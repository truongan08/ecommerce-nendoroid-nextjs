"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Session } from "@supabase/supabase-js";
import { useAuthSupabaseContext } from "@/provider/supabase";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import Button from "./Button";
import SignIn from "@/components/ModalSignIn";
import Register from "@/components/ModalRegister";
import SearchBar from "./Search";
interface NavProps {
  session: Session | null;
}
const Nav: React.FC<NavProps> = ({ session }) => {
  const links = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/product/0" },
    { name: "About", link: "/" },
    { name: "Blog's", link: "/" },
    { name: "Contact", link: "/" },
  ];
  const [open, setOpen] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);
  const { user } = useAuthSupabaseContext();

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
      console.log("doi register");
      setModalLogin(!modalLogin);
      const timeout = await setTimeout(() => {
        setModalRegister(!modalRegister);
        console.log("delay");
      }, 1000);
      console.log("login");
      return () => clearInterval(timeout);
    }
  };

  return (
    <>
      <div className="w-full fixed shadow top-0 left-0 right-0">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
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
                ? "top-16 opacity-100 mt-12"
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
            {session?.user ? (
              <Link href={"/dashboard"}>
                <Image
                  src="/images/avatar.png"
                  width={40}
                  height={40}
                  alt="avatar"
                  className="w-10 h-10 rounded-full ml-7 md:ml-8"
                />
                {user.name}
              </Link>
            ) : (
              <Button
                text={"Sign In"}
                onClickProps={() => onCLickModalLogin()}
              ></Button>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Nav;
