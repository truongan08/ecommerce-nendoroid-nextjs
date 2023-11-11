"use client";

import React, { useEffect, useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import supabaseAdmin from "@/utils/SupabaseAdmin";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabaseAdmin.auth.getSession();
      if (data.session) {
        router.push("/admin");
      }
    };
    checkSession();
  }, []);

  supabaseAdmin.auth.onAuthStateChange((event) => {
    if (event == "SIGNED_IN") {
      router.push("/admin");
    }
  });
  return (
    <div className="h-screen items-center mx-[30%]">
      <Auth
        view="sign_in"
        supabaseClient={supabaseAdmin}
        providers={[]}
        showLinks={false}
        localization={{
          variables: {
            sign_in: {
              email_label: "Email address",
              password_label: "Password",
            },
          },
        }}
        appearance={{ theme: ThemeSupa }}
        theme="light"
      />
    </div>
  );
}
