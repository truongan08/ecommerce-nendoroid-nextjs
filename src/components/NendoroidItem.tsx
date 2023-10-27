"use client";

import Image from "next/image";
import Link from "next/link";

import { Product } from "../../types";
import PriceTag from "./PriceTag";
import { AiOutlineShoppingCart } from "react-icons/ai";
interface NendoroidItemProps {
  data: Product[];
}
const NendoroidItem: React.FC<NendoroidItemProps> = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <div key={item.product_id} className="hover:shadow-xl">
          <div className="col-span-1 border-2 rounded-lg">
            <Link
              // onClick={() => handle()}
              href={`productdetail/${item.product_id}`}
            >
              <div className="py-2 px-4 ">
                <div className="flex justify-center items-center md:h-auto bg-white ">
                  <Image
                    src={"https://1.bp.blogspot.com" + item?.image_url}
                    alt={item.name}
                    width={800}
                    height={400}
                    className="object-cover max-w-full h-[120px] rounded-lg priority"
                  />
                </div>
              </div>

              <div
                className="product-name overflow-hidden mt-2 ml-4 line-clamp-2 min-h-[50px] pr-2"
                title={item.name}
              >
                {item.name}
              </div>
            </Link>

            <div className="product-price mt-2 mb-1 flex">
              <PriceTag
                price={item.price}
                className="text-lg font-bold text-red-700 ml-4"
              />
              <Link
                href={"/"}
                // onClick={() => handlecart(data.product_id)}
                className="ml-auto mr-4 hover:bg-gray-300 rounded-full w-8 h-8 flex justify-center items-center"
              >
                <AiOutlineShoppingCart />
              </Link>
            </div>
            {item.stock != null ? (
              <div className="rounded-full bg-red-700 ml-2 mr-2 mb-2 flex items-center justify-center">
                <span className=" text-white">{item.stock} products left</span>
              </div>
            ) : (
              <div className="rounded-full bg-gray-700 ml-2 mr-2 mb-2 flex items-center justify-center">
                <span className=" text-white">Sold out</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default NendoroidItem;
