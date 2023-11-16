"use client";

import React, { Suspense } from "react";
import supabase from "@/utils/SupabaseAdmin";
import { useRouter } from "next/navigation";

import AuthSupabase from "@/components/Auth";

const AdminPage = () => {
  const router = useRouter();

  supabase.auth.onAuthStateChange((event, session) => {
    if (
      event == "SIGNED_IN" &&
      session?.user.app_metadata.claims_admin == true
    ) {
      router.push("/dashboard");
    }
    // } else {
    //   supabase.auth.signOut();
    //   return console.error("this account not admin");
    // }
  });

  return (
    <div className="h-screen items-center">
      <Suspense fallback={<p>Loading auth...</p>}>
        <AuthSupabase />
      </Suspense>
    </div>
  );
};
export default AdminPage;
