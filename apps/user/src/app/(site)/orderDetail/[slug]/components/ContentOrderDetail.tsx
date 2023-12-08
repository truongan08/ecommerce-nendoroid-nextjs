"use client";

import { useState } from "react";
import Review from "@/components/ModalReview";
import PriceTag from "@/components/PriceTag";
import { order, orderDetail } from "@/types/user";
import Image from "next/image";
interface ContentOrderDetailProps {
  order: order;
  orderDetail: orderDetail;
}
const ContentOrderDetail: React.FC<ContentOrderDetailProps> = ({
  order,
  orderDetail,
}) => {
  const [modalReview, setModalReview] = useState(false);
  const onCLickModalReview = () => {
    setModalReview(!modalReview);
  };
  const date = new Date(order?.created_at);
  return (
    <div className="mt-24 py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex justify-start item-start space-y-2 flex-col ">
        <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
          Order {order?.order_id}
        </h1>
        <p className="text-base font-medium leading-6 text-gray-600">
          {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
          {date.getHours()}:{date.getMinutes()}
        </p>
      </div>
      <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
            <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
              Customer Cart
            </p>
            {orderDetail?.product.map((item, index) => {
              return (
                <div
                  key={index}
                  className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full "
                >
                  <div className="pb-4 md:pb-8 w-full md:w-40">
                    <Image
                      className="w-full hidden md:block"
                      src={`${item.image_url}`}
                      width={200}
                      height={200}
                      alt="dress"
                    />
                    <Image
                      className="w-full md:hidden"
                      src={`${item.image_url}`}
                      alt="dress"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                    <div className="w-full flex flex-col justify-start items-start space-y-8">
                      <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                        {item?.name}
                      </h3>
                      <div className="flex justify-start items-start flex-col space-y-2">
                        <p className="text-sm leading-none text-gray-800">
                          <span className="text-gray-300">Stock: </span>
                          {item.stock}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between space-x-8 items-start w-full">
                      <p className="text-base xl:text-lg leading-6">
                        <PriceTag price={item?.price} />
                      </p>
                      <p className="text-base xl:text-lg leading-6 text-gray-800">
                        x{item?.quantity}
                      </p>
                      <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                        <PriceTag price={item.price * item.quantity} />
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
            <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
              <h3 className="text-xl font-semibold leading-5 text-gray-800">
                Summary
              </h3>
              <div className="flex justify-between items-center w-full">
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Total
                </p>
                <p className="text-base font-semibold leading-4 text-gray-600">
                  <PriceTag
                    price={orderDetail?.product.reduce(
                      (a, b) => a + b?.price * b?.quantity,
                      0
                    )}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
          <h3 className="text-xl font-semibold leading-5 text-gray-800">
            Customer
          </h3>
          <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
            <div className="flex flex-col justify-start items-start flex-shrink-0">
              <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                <Image
                  src={`${orderDetail?.address.avatar_url}`}
                  alt="avatar"
                  width={50}
                  height={50}
                />
                <div className=" flex justify-start items-start flex-col space-y-2">
                  <p className="text-base font-semibold leading-4 text-left text-gray-800">
                    {orderDetail?.address.full_name}
                  </p>
                  <p className="text-sm leading-5 text-gray-600">
                    {orderDetail?.address.phone}
                  </p>
                </div>
              </div>

              <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 7L12 13L21 7"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="cursor-pointer text-sm leading-5 text-gray-800">
                  {orderDetail?.address.email}
                </p>
              </div>
            </div>
            <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
              <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ">
                <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
                  <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">
                    Shipping Address
                  </p>
                  <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                    Address: {orderDetail?.address.address[0].line1},
                    {orderDetail?.address.address[0].line2},
                    {orderDetail?.address.address[0].city},
                    {orderDetail?.address.address[0].country}
                  </p>
                  <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                    Postal code: {orderDetail?.address.address[0].postal_code}
                  </p>
                </div>
                <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
                  <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">
                    Status
                  </p>
                  <p className="w-48 lg:w-full xl:w-48 text-center md:text-left leading-5 text-green-600 text-2xl uppercase">
                    {order?.status}
                  </p>
                </div>
              </div>
              <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                <button
                  className={`mt-6 md:mt-0 py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base leading-4 text-gray-800  ${
                    order?.status === "complete" ? "" : "hidden"
                  }`}
                  onClick={() => onCLickModalReview()}
                >
                  Review
                </button>
                <Review
                  modalReview={modalReview}
                  clickModalReview={() => onCLickModalReview()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentOrderDetail;
