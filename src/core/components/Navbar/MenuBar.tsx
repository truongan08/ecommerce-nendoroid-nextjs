import Link from "next/link";
import { useRouter } from "next/router";
import Dropdown from "../Dropdown";
import { DropdownOption } from "../types";

// const dropdownOptions: DropdownOption[] = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/about" },
// ];

const options = [
  {
    logo: "/icons/sofa.svg",
    slug: "sofa",
  },
  {
    logo: "/icons/terrace.svg",
    slug: "terrace",
  },
  {
    logo: "/icons/bed.svg",
    slug: "bed",
  },
  {
    logo: "/icons/bed-2.svg",
    slug: "mattress",
  },
  {
    logo: "/icons/office.svg",
    slug: "office",
  },
  {
    logo: "/icons/outdoor-cafe.svg",
    slug: "outdoor",
  },
];

const MenuBar = () => {
  const router = useRouter();

  return (
    <div className="z-10 shadow-lg bg-gray-800 text-gray-200 sticky top-0">
      <div className="w-full flex justify-center items-center gap-4">
        {/* Pages */}
        <Link
          href="/"
          className={` ${
            router.pathname === "/" ? "font-bold text-white" : ""
          } hover:text-white`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={` ${
            router.pathname === "/about" ? "font-bold text-white" : ""
          } hover:text-white`}
        >
          About
        </Link>

        <Link
          href="/shop"
          className={` ${
            router.pathname === "/shop" ? "font-bold text-white" : ""
          } hover:text-white`}
        >
          Shop
        </Link>

        <Dropdown options={options} />
      </div>
    </div>
  );
};

export default MenuBar;
