import supabase from "@/utils/SupabaseAdmin";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const AuthSupabase = () => {
  return (
    <div>
      <Auth
        view="sign_in"
        supabaseClient={supabase}
        providers={[]}
        showLinks={false}
        appearance={{ theme: ThemeSupa }}
      />
    </div>
  );
};
export default AuthSupabase;
