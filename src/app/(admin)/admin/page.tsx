"use client";

import React, { Suspense } from "react";
import supabaseAdmin from "@/utils/SupabaseAdmin";
import { useRouter } from "next/navigation";

import AuthSupabase from "@/components/Auth";

const AdminPage = () => {
  const router = useRouter();

  supabaseAdmin.auth.onAuthStateChange((event) => {
    if (event == "SIGNED_IN") {
      router.push("/admin/dashboard");
    }
  });

  return (
    <div className="h-screen items-center mx-[30%]">
      <Suspense fallback={<p>Loading auth...</p>}>
        <AuthSupabase />
      </Suspense>
    </div>
  );
};
export default AdminPage;
