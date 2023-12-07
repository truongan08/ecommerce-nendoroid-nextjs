import React from "react";

import AdminNavbar from "@/components/Navbars/AdminNavbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import FooterAdmin from "@/components/Footers/FooterAdmin";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function Admin({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClientComponentClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return (
    <>
      {session?.user.app_metadata.claim_admin === false || session === null ? (
        <>{children}</>
      ) : (
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
      )}
    </>
  );
}
