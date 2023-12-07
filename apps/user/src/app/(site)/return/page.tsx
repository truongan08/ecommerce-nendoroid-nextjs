"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { AiOutlineCheckCircle } from "react-icons/ai";
import {
  clearCart,
  selectCartInState,
  selectIsLoggedInSession,
  selectLoggedInUser,
  useAppDispatch,
  useAppSelector,
} from "@/lib/redux";
import { User, cartItem } from "@/types/user";
import { toast } from "react-toastify";
import supabase from "@/utils/SupabaseUser";

export default function Return() {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const [address, setAddress] = useState<any>(null);
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");
  const sessionId = searchParams.get("session_id");
  const router = useRouter();
  const isLoggedInSession: boolean = useAppSelector(selectIsLoggedInSession);
  const cart: cartItem[] = useAppSelector(selectCartInState);
  const getUserInSession: User = useAppSelector(selectLoggedInUser)!;
  const selectedOption = "stripe";

  useEffect(() => {
    if (!isLoggedInSession || !sessionId) {
      router.push("/");
    }

    fetch(`/api/checkout?session_id=${sessionId}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_details.email);
      });
    const fetchAddress = async () => {
      const { data, error } = await supabase
        .from("customer")
        .select(`*,address(*)`)
        .single();
      if (error) {
        throw Error("Fail to fetch profile");
      }
      setAddress(data);
    };
    fetchAddress();
  }, [sessionId]);

  useEffect(() => {
    if (isLoggedInSession && status === "complete") {
      const handleStripe = async (
        cart: cartItem[],
        address: any,
        user: User,
        method: any
      ) => {
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
      };

      handleStripe(cart, address, getUserInSession, selectedOption);
      dispatch(clearCart());
    }
  }, [status]);

  if (status === "open" && customerEmail !== "") {
    return (
      <div className="mt-36 max-w-[1200px] mx-auto px-2 min-h-[50vh]">
        Your bill is ongoing, please pay again
      </div>
    );
  }

  return (
    <>
      {status === "complete" && (
        <section id="success">
          <div
            id="SuccessPage"
            className="mt-36 max-w-[1200px] mx-auto px-2 min-h-[50vh]"
          >
            <div className="bg-white w-full p-6 min-h-[150px] flex items-center justify-center">
              <div>
                <div className="flex items-center text-xl">
                  <AiOutlineCheckCircle className="text-green-500" size={35} />
                  <span className="pl-4">Payment Successful</span>
                </div>
                <p className="text-sm">
                  Thank you {customerEmail}! We&apos;ve received your payment.
                </p>

                <div
                  className="w-full text-center bg-blue-600 text-sm font-semibold text-white p-[11px] mt-4"
                  onClick={() => router.push("/")}
                >
                  Back to shop
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
