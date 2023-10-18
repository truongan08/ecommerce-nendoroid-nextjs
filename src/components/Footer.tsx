"use client";
import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  congty: string;
}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="w-full text-center border-t bg-black text-white p-4 pin-b text-lg">
      <ul className="grid grid-cols-4 gap-4 ">
        <li className="col-span-1 ">
          <a className="opacity-70">About Us</a>
          <ul className="text-sm">
            <li>What is Wigure?</li>
            <li>How to buy?</li>
            <li>Our Promise</li>
          </ul>
        </li>
        <li className="col-span-1 border-s">
          <a className="opacity-70">LEGAL</a>
          <ul className="text-sm">
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Personal Information Protection Policies</li>
            <li>Merchandise Policy</li>
          </ul>
        </li>
        <li className="col-span-1 border-s">
          <a className="opacity-70">Help</a>
          <ul className="text-sm">
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </li>
        <li className="col-span-1 border-s">
          <a className="opacity-70">More Info</a>
          <ul className="text-sm">
            <li>Advertise</li>
            <li>Our Business Partners</li>
            <li>Icon and Banner</li>
            <li>Otapedia</li>
          </ul>
        </li>
      </ul>
      <Link href={"/"}>
        <span className=" lg:text-xl">
          <Image
            width={50}
            height={50}
            src={"/images/footer_image.jpg"}
            alt=""
            className="inline-block"
          />
          <p className="inline-block font-bold mt-6 max-md:text-sm">
            Wigure 2023
          </p>
        </span>
      </Link>
    </div>
  );
};
export default Footer;
