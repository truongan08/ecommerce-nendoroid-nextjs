"use client";

import React, { useEffect, useState } from "react";

import AdminNavbar from "@/components/Navbars/AdminNavbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import FooterAdmin from "@/components/Footers/FooterAdmin";
import supabase from "@/utils/SupabaseAdmin";
import { useRouter } from "next/navigation";

export default function Admin({ children }: { children: React.ReactNode }) {
  const [claimAdmin, setClaimAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onAuth = async () => {
      await supabase.auth.onAuthStateChange((event, session) => {
        if (event == "SIGNED_IN") {
          if (session) {
            if (session?.user.app_metadata.claims_admin == true) {
              setClaimAdmin(true);
            }
          }
          router.refresh();
        }
        if (event == "SIGNED_OUT") {
          setClaimAdmin(false);
          router.refresh();
        }
      });
    };
    onAuth();
  }, []);

  if (!claimAdmin) {
    return <div>{children}</div>;
  }

  return (
    <div className="h-screen w-screen flex flex-col min-h-screen">
      <Sidebar />
      <main className="relative md:ml-64 bg-blueGray-100">
        <div className="relative bg-blueGray-800 md:pt-32 pb-16 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full">
            <AdminNavbar />
          </div>
        </div>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </main>
    </div>
  );
}
