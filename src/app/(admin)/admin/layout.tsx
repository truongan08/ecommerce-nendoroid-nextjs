import React from "react";

// components

import AdminNavbar from "@/components/Navbars/AdminNavbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import HeaderStats from "@/components/Headers/HeaderStats";
import FooterAdmin from "@/components/Footers/FooterAdmin";
import { AdminProvider } from "@/provider/admin-provider";

export default function Admin({ children }: { children: React.ReactNode }) {
  const isLoggedInAdmin = true;
  return (
    <>
      <AdminProvider>
        {isLoggedInAdmin ? (
          <>
            <Sidebar />
            <div className="relative md:ml-64 bg-blueGray-100">
              <AdminNavbar />
              {/* Header */}
              <HeaderStats />
              <div className="px-4 md:px-10 mx-auto w-full -m-24">
                {children}
                <FooterAdmin />
              </div>
            </div>
          </>
        ) : (
          <div className="mt-16 sm:mx-auto sm:w-full mb-28 bg-white py-1 px-4 sm:px-10 mb-26">
            {children}
          </div>
        )}
      </AdminProvider>
    </>
  );
}
