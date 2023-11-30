"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Link from "next/link";

export default function Return() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    fetch(`/api/checkout?session_id=${sessionId}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, []);

  if (status === "open") {
    return router.push("/");
  }

  if (status === "complete") {
    return (
      <section id="success">
        <div
          id="SuccessPage"
          className="mt-12 max-w-[1200px] mx-auto px-2 min-h-[50vh]"
        >
          <div className="bg-white w-full p-6 min-h-[150px] flex items-center justify-center">
            <div>
              <div className="flex items-center text-xl">
                <AiOutlineCheckCircle className="text-green-500" size={35} />
                <span className="pl-4">Payment Successful</span>
              </div>
              <p className="text-sm">
                Thank you {customerEmail}! We`&apos;`ve received your payment.
              </p>

              <Link href="/" className="w-full">
                <div className="w-full text-center bg-blue-600 text-sm font-semibold text-white p-[11px] mt-4">
                  Back to shop
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return null;
}
