"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

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
        <p>
          We appreciate your business! A confirmation email will be sent to
          {customerEmail}. If you have any questions, please email
          <a href="mailto:truonganfi@gmail.com">truonganfi@gmail.com</a>.
        </p>
      </section>
    );
  }

  return null;
}
