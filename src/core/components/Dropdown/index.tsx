import { DropdownProps } from "../types";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({ options }: DropdownProps) => {
  return (
    <div className="px-8 bg-primary flex items-center cursor-pointer relative group">
      <span className="text-white">
        <FontAwesomeIcon icon={faBars} />
      </span>
      {/* <span className="capitalize ml-2 text-white">All Categories</span> */}
      <Link href="/categories" className="flex items-center gap-4 px-6 py-3">
        <span className="capitalize ml-2 text-white">All Categories</span>
      </Link>

      <div className="absolute w-full left-0 top-full bg-white shadow-md divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
        {options.map(option => (
          <Link
            key={option.slug}
            href={`/shop/${option.slug}`}
            className="flex items-center gap-4 px-6 py-3 hover:bg-gray-100 transition"
          >
            <Image
              width={50}
              height={50}
              src={option.logo}
              alt="sofa"
              className="w-5 h-5 object-contain"
            />
            <span className="text-gray-600 text-sm capitalize">
              {option.slug}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
