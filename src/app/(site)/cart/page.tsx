"use client";

import getCart from "@/action/getCart";
import { selectIsLoggedInSession, useAppSelector } from "@/lib/redux";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Cart = () => {
  const isLoggedInSession: boolean = useAppSelector(selectIsLoggedInSession);
  // const cart = getCart(user);
  const cart = [];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 mt-12">
      <div className="lg:col-span-2 lg:ml-16 lg:mr-16">
        <div className="text-lg font-bold mt-6 mb-4 lg:mt-11 lg:mb-10 lg:ml-2">
          <h2>Giỏ hàng</h2>
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
                  Quatity
                </th>
                <th className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Total
                </th>
                <th className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Delete
                </th>
              </tr>
            </thead>
            {isLoggedInSession ? (
              <tbody>
                <tr>
                  <td colSpan="4" className="px-4 py-2">
                    <div className="flex justify-center items-center">
                      Login first
                    </div>
                  </td>
                </tr>
              </tbody>
            ) : cart.length <= 0 ? (
              <tbody>
                <tr>
                  <td colSpan="4" className="px-4 py-2">
                    <div className="flex justify-center items-center">
                      No product in cart
                    </div>
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan="4" className="px-4 py-2">
                      <div className="flex justify-center items-center">
                        <div className="w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full animate-spin mb-8 "></div>
                      </div>
                    </td>
                  </tr>
                ) : (
                  cart.map((item) => {
                    return (
                      <tr key={item.item_id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center">
                            <Image
                              src={
                                "https://1.bp.blogspot.com" + item?.image_url
                              }
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
                            {/* <button
                              className="text-sm font-medium text-gray-700 focus:outline-none"
                              onClick={() =>
                                decreaseCount(item.item_id, item.sku, item.qty)
                              }
                            >
                              -
                            </button> */}
                            <span className="text-sm font-medium text-gray-700">
                              {item.quantity}
                            </span>
                            {/* <button
                              className="text-sm font-medium text-gray-700 focus:outline-none"
                              onClick={() =>
                                increaseCount(item.item_id, item.sku, item.qty)
                              }
                            >
                              +
                            </button> */}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <span className="text-sm font-medium text-gray-700 mr-4">
                            {(item.price * item.qty).toLocaleString("vi-VN", {
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
                          <Link
                            href={"#"}
                            // onClick={() => handledelete(item.item_id)}
                            className="cursor-pointer "
                          >
                            {/* <DeleteIcon /> */}
                          </Link>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            )}
          </table>
        </div>
      </div>
      <div className="lg:col-span-1 mt-4 lg:mt-28 lg:mr-16">
        <div className="grid grid-rows-2">
          {/* <div className="bg-white border-2 rounded-lg p-4 shadow-2xl row-span-1 lg:mb-8">
            <h2 className="text-lg font-bold mb-4">Khuyến mãi</h2>
            <span>Đơn hàng chưa đủ điều kiện</span>
          </div> */}

          {/* <div className="bg-white border-2 rounded-lg p-4 shadow-2xl mt-2 row-span-1 mb-16">
            <h2 className="text-lg font-bold mb-4">Thanh toán</h2>
            <p className="flex mb-1">
              Tạm tính
              <span className="ml-auto">
                {get.isloading
                  ? 0
                  : get.cart
                      .reduce((a, b) => a + b.price * b.qty, 0)
                      .toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
              </span>
            </p>
            {!isSmallScreen && (
              <p className="flex mb-4">
                Giảm giá
                <span className="text-green-500 ml-auto">-0 đ</span>
              </p>
            )}
            <p className="flex mb-4">
              Tổng cộng
              <span className="text-blue-500 ml-auto font-bold">
                {get.isloading
                  ? 0
                  : get.cart
                      .reduce((a, b) => a + b.price * b.qty, 0)
                      .toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
              </span>
            </p>
            {user.User ? (
              get.cart.length <= 0 ? (
                <Link className="group w-full flex justify-center py-2 px-4 cursor-pointer	 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 uppercase text-lg">
                  <p className="group w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 uppercase text-lg">
                    Khống có sản phẩm để Thanh Toán
                  </p>
                </Link>
              ) : (
                <Link
                  className="group w-full flex justify-center py-2 px-4 cursor-pointer	 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 uppercase text-lg"
                  to="/payment"
                >
                  <p className="group w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 uppercase text-lg">
                    Thanh toán
                  </p>
                </Link>
              )
            ) : (
              <Link className="group w-full flex justify-center py-2 px-4 cursor-pointer	 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 uppercase text-lg">
                <p className="group w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 uppercase text-lg">
                  Chưa Đăng Nhập
                </p>
              </Link>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Cart;
