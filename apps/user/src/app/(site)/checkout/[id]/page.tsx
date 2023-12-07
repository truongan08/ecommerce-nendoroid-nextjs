"use client";

import { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { provinces } from "vietnam-provinces";
import { getStripe } from "@/utils/StripeLoad";
import {
  selectLoggedInUser,
  selectCartInState,
  selectIsLoggedInSession,
  useAppDispatch,
  useAppSelector,
  selectProductDetailInState,
} from "@/lib/redux";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { User, cartItem, type Product, ProductDetail } from "@/types/user";
import PriceTag from "@/components/PriceTag";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const Checkout = ({ params }: { params: { id: string } }) => {
  const [loading, setloading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("cod");
  const [clientSecret, setClientSecret] = useState("");

  const dispacth = useAppDispatch();
  const router = useRouter();
  const supabase = createClientComponentClient();

  const isLoggedInSession: boolean = useAppSelector(selectIsLoggedInSession);
  const getUserInSession: User = useAppSelector(selectLoggedInUser)!;
  const getProductDetail: ProductDetail = useAppSelector(
    selectProductDetailInState
  )!;

  useEffect(() => {
    if (!isLoggedInSession || !getProductDetail) {
      router.push("/");
    }
  }, [isLoggedInSession, router]);

  const cart = {
    ...getProductDetail,
    quantity: 1,
  };
  const stripePromise = getStripe();

  const handleSubmit = async (product: any) => {
    setSelectedOption("stripe");
    if (clientSecret !== "") {
      return;
    }
    const cart = [product];
    const checkoutSession = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart }),
    });
    const data = await checkoutSession.json();
    setClientSecret(data.clientSecret);
  };

  return (
    <div className="mt-24 mb-16">
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32 ">
        <p className="text-2xl font-bold text-gray-800">
          Your order already complete!
        </p>
        <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div className="relative">
            <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <Link
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700 ring ring-emerald-200 ring-offset-2"
                  href="/product"
                >
                  ✓
                </Link>
                <span className="font-semibold text-gray-900">Shop</span>
              </li>

              <FaArrowRight />

              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <Link
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                  href="/checkout"
                >
                  2
                </Link>
                <span className="font-semibold text-gray-900">Checkout</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            <div className="flex flex-row rounded-lg bg-white">
              <Image
                className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                src={getProductDetail?.image_url?.slice(0).toString()}
                alt={getProductDetail?.name}
                height={96}
                width={112}
              />
              <div className="flex w-full flex-col px-4 py-4">
                <span className="font-semibold">{getProductDetail?.name}</span>
                <span className="float-right text-gray-400">x1</span>
                <PriceTag
                  price={getProductDetail?.price}
                  className="text-lg font-bold"
                />
              </div>
            </div>
          </div>

          <p className="mt-8 text-lg font-medium">Payment Methods</p>
          <form className="mt-5 grid gap-6">
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_1"
                type="radio"
                name="radio"
                checked
                value={"cod"}
                onChange={() => setSelectedOption("cod")}
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                htmlFor="radio_1"
              >
                <Image
                  className="w-14 object-contain"
                  src="/images/cod.png"
                  alt=""
                  width={56}
                  height={42}
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">COD</span>
                  <p className="text-slate-500 text-sm leading-6">
                    Cash on Delivery
                  </p>
                </div>
              </label>
            </div>
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_2"
                type="radio"
                name="radio"
                value={"stripe"}
                onChange={() => handleSubmit(cart)}
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                htmlFor="radio_2"
              >
                <Image
                  className="w-14 object-contain"
                  src="/images/cc_stripe.png"
                  alt=""
                  width={56}
                  height={42}
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Stripe</span>
                  <p className="text-slate-500 text-sm leading-6">
                    Online Payment
                  </p>
                </div>
              </label>
            </div>
          </form>
        </div>

        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0" id="checkout">
          {selectedOption === "stripe" && clientSecret && (
            <EmbeddedCheckoutProvider
              stripe={stripePromise}
              options={{ clientSecret }}
            >
              <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
          )}
          {selectedOption === "cod" && (
            <div>
              <p className="text-xl font-medium">Payment Details</p>
              <p className="text-gray-400">
                Complete your order by providing your payment details.
              </p>
              <div className="">
                <label
                  htmlFor="fullname"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Full name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <label
                  htmlFor="number"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="number"
                    name="number"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="0123456789"
                  />
                </div>
                <label
                  htmlFor="billing-address"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Billing Address
                </label>
                <div className="flex flex-col sm:flex-row">
                  <div className="relative flex-shrink-0 sm:w-7/12">
                    <input
                      type="text"
                      id="billing-address"
                      name="billing-address"
                      className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Street Address"
                    />
                  </div>
                  <select
                    name="billing-state"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="State">State</option>
                  </select>
                  <input
                    type="text"
                    name="billing-zip"
                    className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="ZIP"
                  />
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Total</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {(getProductDetail.price * 1).toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </p>
                </div>
              </div>
              <button
                className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
                onClick={() => handleSubmit(cart)}
              >
                Place Order
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
