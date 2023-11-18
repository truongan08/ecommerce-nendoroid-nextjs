"use client";

import React, { Suspense, useEffect } from "react";
import supabase from "@/utils/SupabaseAdmin";
import { useRouter } from "next/navigation";

import AuthSupabase from "@/components/Auth";

const AdminPage = () => {
  const router = useRouter();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (
        event == "SIGNED_IN" &&
        session?.user.app_metadata.claims_admin == true
      ) {
        router.push("/dashboard");
      }
    });
  }, []);

  return (
    <div className="h-screen items-center">
      <AuthSupabase />
    </div>
  );
};
export default AdminPage;
