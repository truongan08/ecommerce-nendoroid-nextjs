"use client";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

import PriceTag from "./PriceTag";

import { Product } from "@/types/user";
import { addToCart, useAppDispatch } from "@/lib/redux";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
interface NendoroidItemProps {
  data: Product[] | null;
}
const NendoroidItem: React.FC<NendoroidItemProps> = ({ data }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const CLickAddToCart = async (data: any) => {
    await dispatch(addToCart(data));
    toast("Add to cart complete");
  };

  useEffect(() => router.refresh(), [router, dispatch]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 max-md:grid-cols-1 sm:grid-cols-3 gap-4 mt-4 ml-6 max-md:ml-auto h-full">
      {data?.map((item, index) => (
        <div
          key={index}
          className="group relative m-5 w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md grid col-span-1"
        >
          <Link
            className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
            href={`/detail/${item.product_id}`}
          >
            <Image
              className="absolute top-0 right-0 h-auto w-full object-cover"
              width={294}
              height={240}
              src={item.image_url[0]}
              alt="product"
            />
            <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
              <button className="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
                <AiOutlineHeart className="w-5 h-5" />
              </button>
            </div>
          </Link>

          <div className="mt-4 px-5 pb-5">
            <Link href="#">
              <h5 className="w-[150px] text-xl tracking-tight text-slate-900 truncate">
                {item.name}
              </h5>
            </Link>
            <div className="mt-2 mb-5 flex items-center justify-between">
              <PriceTag
                price={item.price}
                className="text-xl font-bold text-slate-900"
              />
            </div>
            <button
              onClick={() => CLickAddToCart(item)}
              className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <AiOutlineShoppingCart className="mr-2 w-6 h-6" />
              Add to cart
            </button>
          </div>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
};

export default NendoroidItem;
