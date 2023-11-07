"use client";

import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import { NextUIProvider } from "@nextui-org/system";

type AdminProviderProps = {
  children: ReactNode;
};

export const AdminProvider = ({ children }: AdminProviderProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const isLoggedInAdmin = true;
  if (!isLoggedInAdmin) {
    router.push("admin/login");
  }

  return (
    <NextUIProvider>
      <div className="max-h-screen max-w-screen">
        {!isLoading ? (
          <div
            className="min-h-screen min-w-screen bg-fixed bg-auto bg-no-repeat bg-center"
            style={{ backgroundImage: `url(/images/figre.gif)` }}
          ></div>
        ) : (
          children
        )}
      </div>
    </NextUIProvider>
  );
};
