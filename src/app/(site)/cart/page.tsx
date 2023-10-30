"use client";

import { selectIsLoggedInSession, useAppSelector } from "@/lib/redux";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineDelete } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const isLoggedInSession: boolean = useAppSelector(selectIsLoggedInSession);
  // const cart = getCart(user);
  const cart = [
    {
      id: 1,
      name: "Neko Arc",
      price: 150000,
      quantity: 50,
      image_url:
        "/-DNr1T5JvK1k/X4GwL-e8jHI/AAAAAAAAo-I/H13V1KYu6owNCRVAUxFIFPv4lhmAQuDfgCLcBGAsYHQ/s135/000-Neko-Arc-Melty-Blood-Video-Games-Nendoroid-3.jpg",
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 mt-16">
      <div className="lg:col-span-2 lg:ml-16 lg:mr-16">
        <div className="text-lg font-bold mt-6 mb-4 lg:mt-11 lg:mb-10 lg:ml-2">
          <h2>Your cart</h2>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-2xl border-2">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="border-b ">
                <th className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Product
                </th>
                <th className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Price
                </th>
                <th className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Quantity
                </th>
                <th className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Total
                </th>
                <th className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Delete
                </th>
              </tr>
            </thead>
            {!isLoggedInSession ? (
              <tbody>
                <tr>
                  <td colSpan={4} className="px-4 py-2">
                    <div className="flex justify-center items-center">
                      You must log in before using this feature
                    </div>
                  </td>
                </tr>
              </tbody>
            ) : cart.length <= 0 ? (
              <tbody>
                <tr>
                  <td colSpan={4} className="px-4 py-2">
                    <div className="flex justify-center items-center">
                      No product in cart
                    </div>
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {cart.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center">
                          <Image
                            src={"https://1.bp.blogspot.com" + item?.image_url}
                            alt={item.name}
                            width={800}
                            height={400}
                            className="w-20 h-20 object-contain mr-2"
                          />

                          <span className="font-bold">{item.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <span className="text-sm font-medium text-gray-700 mr-4">
                          {item.price.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </span>
                        {/* {!isSmallScreen && (
                          <span className="hidden lg:inline-block text-gray-400">
                            đơn vị tính
                          </span>
                        )} */}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center justify-between px-2 py-1 bg-gray-200 rounded w-[70px]">
                          <button
                            className="text-sm font-medium text-gray-700 focus:outline-none "
                            //   onClick={() =>
                            //     decreaseCount(item.item_id, item.sku, item.qty)
                            //   }
                          >
                            -
                          </button>
                          <span className="text-sm font-medium text-gray-700 border-x-2">
                            {item.quantity}
                          </span>
                          <button
                            className="text-sm font-medium text-gray-700 focus:outline-none"
                            // onClick={() =>
                            //   increaseCount(item.item_id, item.sku, item.qty)
                            // }
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <span className="text-sm font-medium text-gray-700 mr-4">
                          {(item.price * item.quantity).toLocaleString(
                            "vi-VN",
                            {
                              style: "currency",
                              currency: "VND",
                            }
                          )}
                        </span>
                        {/* {!isSmallScreen && (
                          <span className="hidden lg:inline-block text-gray-400">
                            đơn vị tính
                          </span>
                        )} */}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-md font-medium">
                        <Link
                          href={"#"}
                          // onClick={() => handledelete(item.item_id)}
                          onClick={() => toast("Feature developing")}
                          className="cursor-pointer "
                        >
                          <AiOutlineDelete className="text-red-700" />
                          <ToastContainer />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            )}
          </table>
        </div>
      </div>
      <div className="lg:col-span-1 mt-4 lg:mt-28 lg:mr-16">
        <div className="grid grid-rows-2">
          {/* <div className="bg-white border-2 rounded-lg p-4 shadow-2xl row-span-1 lg:mb-8">
            <h2 className="text-lg font-bold mb-4">Promotion</h2>
            <span>Feature developing</span>
          </div> */}

          <div className="bg-white border-2 rounded-lg p-4 shadow-2xl mt-2 row-span-1 mb-16">
            <h2 className="text-lg font-bold mb-4">Check out</h2>
            {/* <p className="flex mb-1">
              Tạm tính
              <span className="ml-auto">
                {cart.length < 0
                  ? 0
                  : cart
                      .reduce((a, b) => a + b.price * b.qty, 0)
                      .toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
              </span>
            </p>
            {true && (
              <p className="flex mb-4">
                Giảm giá
                <span className="text-green-500 ml-auto">-0 đ</span>
              </p>
            )} */}
            <p className="flex mb-4">
              Total
              <span className="text-blue-500 ml-auto font-bold">
                {cart.length <= 0
                  ? 0
                  : cart
                      .reduce((a, b) => a + b.price * b.quantity, 0)
                      .toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
              </span>
            </p>

            {cart.length <= 0 ? (
              <Link
                className="group w-full flex justify-center py-2 px-4 cursor-pointer text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 uppercase"
                href={"#"}
              >
                <p className="group w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 uppercase">
                  No product for check out
                </p>
              </Link>
            ) : (
              <Link
                className="group w-full flex justify-center py-2 px-4 cursor-pointer	 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 uppercase"
                href="/checkout"
                itemProp="cart"
              >
                <p className="group w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 uppercase">
                  Check out
                </p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
