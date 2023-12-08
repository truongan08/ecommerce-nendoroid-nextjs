"use client";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { toast } from "react-toastify";

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
      if (event == "SIGNED_IN" && !session?.user.app_metadata.claims_admin) {
        router.refresh();
        toast.error("Your email or password not correct");
      }
    });
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session?.user.app_metadata.claims_admin == true) {
        router.push("/dashboard");
      }
      if (!data.session?.user.app_metadata.claims_admin && data) {
        await supabase.auth.signOut();
      }
    };
    checkSession();
  }, []);
  return (
    <div className="max-w-sm mx-auto">
      <div className="font-bold text-xl text-center mt-12">Admin</div>
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
