"use client";

import Image from "next/image";
import { Product } from "../../types";

interface NendoroidItemProps {
  data: Product;
}
const NendoroidItem: React.FC<NendoroidItemProps> = ({ data }) => {
  return (
    <>
      <div key={data.product_id}>
        <div>{data.product_id}</div>
        <div>{data.name}</div>
        <div>{data.description}</div>
        <div>{data.price}</div>
        <Image
          className="object-cover"
          src={"https://1.bp.blogspot.com" + data?.image_url}
          alt="Image"
          height={150}
          width={150}
        />
        <div>-------------------------------</div>
      </div>
    </>
  );
};

export default NendoroidItem;
