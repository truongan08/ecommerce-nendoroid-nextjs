import Image from "next/image";
import Link from "next/link";
import UserNav from "./UserNav";
import GuestNav from "./GuestNav";
import { getStorage } from "@/core/lib/utils";
import CONSTANTS from "@/constants";
import NavSearch from "./NavSearch";

const Navbar = () => {
  const userSignedIn = getStorage(CONSTANTS.IS_AUTHENTICATED);

  return (
    <div className="container mx-auto flex justify-between items-center mb-4">
      <div className="md:w-48 flex-shrink-0">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            width={150}
            height={50}
            alt="company logo"
          />
        </Link>
      </div>

      <NavSearch />

      <div className="lg:max-w-sm hidden lg:flex flex-col place-items-end">
        <span className="font-bold md:text-xl">8 800 332 65-66</span>
        <span className="font-semibold text-sm text-gray-400">
          Support 24/7
        </span>
      </div>

      {userSignedIn ? <UserNav /> : <GuestNav />}

      {/* <div className="ml-4 hidden sm:flex flex-col font-bold">
          <span className="text-xs text-gray-400">Your Cart</span>
          <span>$2,650,59</span>
        </div> */}
    </div>
  );
};

export default Navbar;
