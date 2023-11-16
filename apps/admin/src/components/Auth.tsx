import supabase from "@/utils/SupabaseAdmin";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const AuthSupabase = () => {
  return (
    <div className="max-w-screen">
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
