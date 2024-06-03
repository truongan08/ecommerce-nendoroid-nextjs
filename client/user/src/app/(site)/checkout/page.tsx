"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { getStripe } from "@/utils/StripeLoad";
import {
  selectLoggedInUser,
  selectCartInState,
  selectIsLoggedInSession,
  useAppDispatch,
  useAppSelector,
  clearCart,
} from "@/lib/redux";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { User, cartItem } from "@/types/user";
import PriceTag from "@/components/PriceTag";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Loading from "@/components/Loading/Loading";

const Checkout = () => {
  const [loading, setloading] = useState(false);
  const [address, setAddress] = useState<any>(null);
  const [selectedOption, setSelectedOption] = useState("cod");
  const [clientSecret, setClientSecret] = useState("");
  const supabase = createClientComponentClient();

  const dispatch = useAppDispatch();
  const router = useRouter();

  const cart: cartItem[] = useAppSelector(selectCartInState);

  const isLoggedInSession: boolean = useAppSelector(selectIsLoggedInSession);
  const getUserInSession: User = useAppSelector(selectLoggedInUser)!;
  const stripePromise = getStripe();

  const handleSelect = async (cart: cartItem[], user: User) => {
    setSelectedOption("stripe");
    if (clientSecret !== "") {
      return;
    }
    const checkoutSession = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart, user }),
    });
    const data = await checkoutSession.json();
    if (data.error !== null) {
      throw Error(data.error);
    }
    setClientSecret(data.clientSecret);
  };

  const handleSubmit = async (
    cart: cartItem[],
    address: any,
    user: User,
    method: any,
    e: any
  ) => {
    e.preventDefault();
    setloading(true);

    const response = await fetch("/api/create_order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart, user, address, method }),
    });

    const data = await response.json();
    if (!data.success || !data) {
      toast.error("Something is wrong, please try again");
    }
    if (data.success) {
      toast.success("Order success");
      dispatch(clearCart());
      router.push("/");
    }
  };

  useEffect(() => {
    async function getAddress() {
      const { data, error } = await supabase
        .from("customer")
        .select(`*,address(*)`)
        .single();
      if (error) {
        throw Error("Fail to fetch profile");
      }
      setAddress(data);
    }
    getAddress();
    if (!isLoggedInSession) {
      router.push("/");
    }
  }, [isLoggedInSession, router, supabase]);

  useEffect(() => {
    router.refresh();
  }, [clientSecret, router]);

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
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            {cart.slice(0, 2).map((item, index) => {
              return (
                <div key={index} className="flex flex-row rounded-lg bg-white">
                  <Image
                    className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                    src={item?.image_url?.slice(0).toString()}
                    alt={item?.name}
                    height={96}
                    width={112}
                  />
                  <div className="flex w-full flex-col px-4 py-4">
                    <span className="font-semibold">{item?.name}</span>
                    <span className="float-right text-gray-400">
                      x{item?.quantity}
                    </span>
                    <PriceTag
                      price={item?.price}
                      className="text-lg font-bold"
                    />
                  </div>
                </div>
              );
            })}
            {cart.length > 2 && (
              <div className="flex flex-col rounded-lg bg-white sm:flex-row border">
                <div className="flex w-full flex-col px-4 py-4 text-center">
                  <Link href="/cart" className="text-lg font-bold">
                    More
                  </Link>
                </div>
              </div>
            )}
          </div>

          <p className="mt-8 text-lg font-medium">Payment Methods</p>
          <form className="mt-5 grid gap-6" id="selectMethod">
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_1"
                type="radio"
                name="radio"
                checked={selectedOption === "cod"}
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
                checked={selectedOption === "stripe"}
                value={"stripe"}
                onChange={() => handleSelect(cart, getUserInSession)}
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
              <form
                id="cod"
                onSubmit={(e) =>
                  handleSubmit(
                    cart,
                    address,
                    getUserInSession,
                    selectedOption,
                    e
                  )
                }
              >
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
                    defaultValue={address?.full_name}
                  />
                </div>
                <label
                  htmlFor="phone"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="0123456789"
                    defaultValue={address?.phone}
                  />
                </div>
                <label
                  htmlFor="email"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="abc@example.com"
                    defaultValue={address?.email}
                  />
                </div>
                <label
                  htmlFor="billing-address"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Billing Address
                </label>
                <label
                  htmlFor="line1"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Line 1
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="line1"
                    name="line1"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Abc"
                    defaultValue={address?.address[0].line1}
                  />
                </div>
                <label
                  htmlFor="line2"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Line 2
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="line2"
                    name="line2"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="abc"
                    defaultValue={address?.address[0].line2}
                  />
                </div>
                <div className="flex flex-col sm:flex-row">
                  <div className="relative flex-shrink-0 sm:w-7/12">
                    <input
                      type="text"
                      id="billing-address"
                      name="billing-address"
                      className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Line 1"
                      defaultValue={address?.address[0].city}
                    />
                  </div>
                  <select
                    name="billing-state"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value={address?.address[0].country}>
                      {address?.address[0].country}
                    </option>
                  </select>
                  <input
                    type="text"
                    name="billing-zip"
                    className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="ZIP"
                    defaultValue={address?.address[0].postal_code}
                  />
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Total</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {cart
                      .reduce((a, b) => a + b?.price * b?.quantity, 0)
                      .toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                  </p>
                </div>
                <button
                  className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? <Loading /> : "Place Order"}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
