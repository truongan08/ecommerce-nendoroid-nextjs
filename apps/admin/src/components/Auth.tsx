"use client";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const AuthSupabase = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (
        event == "SIGNED_IN" &&
        session?.user.app_metadata.claims_admin == true
      ) {
        router.push("/dashboard");
      }
    });
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session?.user.app_metadata.claims_admin == true) {
        router.push("/dashboard");
      }
      if (data.session?.user.app_metadata.claims_admin == false) {
        supabase.auth.signOut();
      }
    };
    checkSession();
  });
  return (
    <div className="max-w-sm mx-auto">
      <Auth
        view="sign_in"
        supabaseClient={supabase}
        providers={[]}
        showLinks={false}
        appearance={{ theme: ThemeSupa }}
        theme="light"
      />
    </div>
  );
};
export default AuthSupabase;
