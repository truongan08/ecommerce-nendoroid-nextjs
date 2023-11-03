"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  useAppDispatch,
  useAppSelector,
  getProductDetail,
  selectGetProductDetailStatus,
  selectGetProductDetailError,
  selectProductDetailInState,
} from "@/lib/redux";
import {
  ProductDetail,
  ProductDetailRequestStatus,
  CustomError,
} from "@/types/user";
import PriceTag from "@/components/PriceTag";

interface DetailContentProps {
  product_id: string;
}

const DetailContent: React.FC<DetailContentProps> = ({ product_id }) => {
  const dispatch = useAppDispatch();

  const productDetail: ProductDetail | null = useAppSelector(
    selectProductDetailInState
  );
  const getProductDetailStatus: ProductDetailRequestStatus = useAppSelector(
    selectGetProductDetailStatus
  );
  const getProductDetailError: CustomError | null = useAppSelector(
    selectGetProductDetailError
  );

  useEffect(() => {
    async function fetchData(product_id: string) {
      await dispatch(getProductDetail({ product_id }));
    }
    fetchData(product_id);
  }, [product_id]);

  if (getProductDetailStatus === ProductDetailRequestStatus.FAILED) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <Image
            src="/images/PNF.png"
            alt="product-not-found"
            height={500}
            width={500}
            className="object-contain overflow-hidden"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="eager"
          />

          <div className="text-neutral-400 text-lg">
            No products because error {getProductDetailError?.message}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 overflow-hidden bg-white font-poppins">
      <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 md:w-1/2 ">
            <div className="sticky top-0 overflow-hidden z-1">
              <div className="relative mb-6 lg:mb-10 h-[450px]">
                {productDetail ? (
                  <Image
                    src={`${productDetail?.image_url[0]}`}
                    alt=""
                    className="w-full h-full object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : null}
              </div>
              <div className="flex-wrap hidden md:flex ">
                {/* {{productDetail?.image_url}.map((item) ={">"} {
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <Link
                      href="#"
                      className="block border border-blue-100  hover:border-blue-300 "
                    >
                      <Image
                        src={item}
                        alt=""
                        className="object-cover w-full lg:h-32"
                        width={200}
                        height={200}
                      />
                    </Link>
                  </div>
                })} */}
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 ">
            <div className="lg:pl-20">
              <div className="pb-6 mb-8 border-b border-gray-200 ">
                <span className="text-lg font-medium text-rose-500 ">New</span>
                <h2 className="max-w-xl mt-2 mb-6 text-xl font-bold  md:text-4xl">
                  {productDetail?.name}
                </h2>

                <p className="max-w-md mb-8 text-gray-700 ">
                  Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet
                  Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet
                  Lorem ispum dor amet Lorem ispum dor amet
                </p>
                <div className="p-4 mb-8 border border-gray-300 ">
                  <div className="mb-1 text-xs font-medium text-gray-700">
                    Hurry up! left {productDetail?.stock} in Stock
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full w-5/12"></div>
                  </div>
                </div>
                <p className="inline-block text-2xl font-semibold text-gray-700  ">
                  <span>
                    {productDetail?.price && (
                      <PriceTag price={productDetail?.price} />
                    )}
                  </span>
                </p>
              </div>
              <div className="mb-8">
                <h2 className="mb-2 text-xl font-bold ">Color</h2>
                <div className="flex flex-wrap -mb-2">
                  <button className="p-1 mb-2 mr-2 border border-transparent rounded-full hover:border-gray-400  ">
                    <div className="w-6 h-6 bg-red-600 rounded-full"></div>
                  </button>
                  <button className="p-1 mb-2 mr-2 border border-transparent rounded-full hover:border-gray-400 ">
                    <div className="w-6 h-6 bg-green-600 rounded-full"></div>
                  </button>
                  <button className="p-1 mb-2 border border-transparent rounded-full hover:border-gray-400 ">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                  </button>
                  <button className="p-1 mb-2 border border-transparent rounded-full hover:border-gray-400 ">
                    <div className="w-6 h-6 rounded-full bg-sky-400"></div>
                  </button>
                </div>
              </div>
              <div className="pb-6 mb-8 border-b border-gray-300 ">
                <h2 className="mb-2 text-xl font-bold ">Size</h2>
                <div className="flex flex-wrap -mb-2">
                  <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400  hover:text-blue-600 ">
                    XL
                  </button>
                  <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600  ">
                    S
                  </button>
                  <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 ">
                    M
                  </button>
                  <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 ">
                    XS
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap items-center ">
                <div className="mb-4 mr-4 lg:mb-0">
                  <div className="w-28">
                    <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                      <button className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer hover:bg-gray-300">
                        <span className="m-auto text-2xl font-thin">-</span>
                      </button>
                      <input
                        className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none  focus:outline-none text-md hover:text-black"
                        placeholder="1"
                      />
                      <button className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer  hover:text-gray-700 hover:bg-gray-300">
                        <span className="m-auto text-2xl font-thin">+</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mb-4 mr-4 lg:mb-0">
                  <button className="w-full h-10 p-2 mr-4 bg-blue-500  text-gray-50 hover:bg-blue-600 ">
                    Buy Now
                  </button>
                </div>
                <div className="mb-4 mr-4 lg:mb-0">
                  <button className="flex items-center justify-center w-full h-10 p-2 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50  hover:bg-blue-600 hover:border-blue-600 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-cart"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                  </button>
                </div>
                <div className="mb-4 lg:mb-0">
                  <button className="flex items-center justify-center w-full h-10 p-2 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50  hover:bg-blue-600 hover:border-blue-600 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className=" bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailContent;
