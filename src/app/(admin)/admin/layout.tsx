"use client";

import React, { useEffect, useState } from "react";

import AdminNavbar from "@/components/Navbars/AdminNavbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import HeaderStats from "@/components/Headers/HeaderStats";
import FooterAdmin from "@/components/Footers/FooterAdmin";
import { NextUIProvider } from "@nextui-org/system";
import supabaseAdmin from "@/utils/SupabaseAdmin";

export default function Admin({ children }: { children: React.ReactNode }) {
  const [claimAdmin, setClaimAdmin] = useState(false);
  useEffect(() => {
    supabaseAdmin.auth.onAuthStateChange((event, session) => {
      if (
        event == "SIGNED_IN" &&
        session?.user.app_metadata.claims_admin == true
      ) {
        setClaimAdmin(true);
      }
    });
  });

  return (
    <div className="h-screen w-screen">
      <NextUIProvider>
        {claimAdmin ? (
          <>
            <Sidebar />
            <main className="relative md:ml-64 bg-blueGray-100">
              <AdminNavbar />
              <HeaderStats />
              <div className="px-4 md:px-10 mx-auto w-full -m-24">
                {children}
                <FooterAdmin />
              </div>
            </main>
          </>
        ) : (
          <div>{children}</div>
        )}
      </NextUIProvider>
    </div>
  );
}
