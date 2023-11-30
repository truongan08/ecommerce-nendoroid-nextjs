"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function Failed() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");
  const sessionId = searchParams.get("session_id");

  // useEffect(() => {
  //   fetch(`/api/checkout?session_id=${sessionId}`, {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setStatus(data.status);
  //       setCustomerEmail(data.customer_email);
  //     });
  // }, []);

  // if (status === "open") {
  //   return router.push("/");
  // }

  // if (status === "complete") {
  return (
    <section id="failed">
      <p>Your order failed, pls try again or buy other product</p>
    </section>
  );
  // }

  // return null;
}
