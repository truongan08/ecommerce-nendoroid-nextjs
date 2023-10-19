"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "../../types";
import PriceTag from "./PriceTag";
interface NendoroidItemProps {
  data: Product;
}
const NendoroidItem: React.FC<NendoroidItemProps> = ({ data }) => {
  return (
    <Link href="/detail/product" className="wrapper__Card-product color__black">
      <div className="image">
        <Image
          src={"https://1.bp.blogspot.com" + data?.image_url}
          alt={data.name}
          width={800}
          height={400}
          className="h-48 object-cover"
          priority
        />
      </div>
      <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
        <h5 className="mb-0 bold font__size--16 text__16-1024 text__16-md">
          {data.name}
        </h5>
        <h5 className="mb-0 bold font__size--14 text__14-1024 opacity__8">
          ${data.price}
        </h5>
      </div>
      <p className="mb-0 medium font__size--14 text__14-1024 opacity__5">
        type gi do
      </p>
    </Link>
  );
};

export default NendoroidItem;
