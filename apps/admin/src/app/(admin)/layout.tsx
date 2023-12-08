import React from "react";

import AdminNavbar from "@/components/Navbars/AdminNavbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import FooterAdmin from "@/components/Footers/FooterAdmin";
import {
  SupabaseClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import HeaderStats from "@/components/Headers/HeaderStats";
import supabase from "@/utils/SupabaseAdmin";

export default async function LayoutAdmin({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const supabaseClient = createServerComponentClient({
    cookies: () => cookieStore,
  });

  const {
    data: { user },
  } = await supabaseClient.auth.getUser();
  if (!user || !user.app_metadata.claims_admin) {
    return <>Logged first</>;
  }

  const {
    data: { users },
    error,
  } = await supabase.auth.admin.listUsers();
  if (error) {
    throw Error("Wrong when get user");
  }
  const { count, error: ErrorORder } = await supabase
    .from("order")
    .select("*", { count: "exact" });
  if (!count) {
    throw Error("Wrong when get order");
  }
  if (ErrorORder) {
    throw Error("Wrong when get order");
  }
  return (
    <>
      <div className="h-screen w-screen flex flex-col min-h-screen">
        <Sidebar />
        <main className="relative md:ml-64 bg-blueGray-100">
          <div className="relative bg-blueGray-800 md:pt-32 pb-16 pt-12">
            <div className="px-4 md:px-10 mx-auto w-full">
              <AdminNavbar />
              <HeaderStats countUser={users.length} countOrder={count} />
            </div>
          </div>
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            {children}
            <FooterAdmin />
          </div>
        </main>
      </div>
    </>
  );
}
