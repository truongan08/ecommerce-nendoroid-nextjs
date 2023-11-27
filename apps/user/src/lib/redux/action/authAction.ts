import supabase from "@/utils/SupabaseUser";
import { AuthOutput, SignInDto, SignUpDto, CustomError } from "@/types/user";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export class AuthSupabase implements AuthOutput {
  supabase = createClientComponentClient();
  async signIn({ email, password }: SignInDto): Promise<{
    session: any | null;
    error: CustomError | null;
  }> {
    const {
      data: { session },
      error,
    } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    return Promise.resolve({ session, error });
  }

  async signUp({ fullname, email, password }: SignUpDto): Promise<{
    session: any | null;
    error: CustomError | null;
  }> {
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: fullname,
          avatar_url:
            "https://gonkolbxsaadkmuxbrak.supabase.co/storage/v1/object/sign/avatars/avatar.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL2F2YXRhci5wbmciLCJpYXQiOjE3MDA0Nzg5MTQsImV4cCI6MTczMjAxNDkxNH0.9H02QY_2tAClcTjKzt3leslmccrh2s9wSbM6_01cWI0&t=2023-11-20T11%3A15%3A16.141Z",
        },
      },
    });
    return Promise.resolve({ session, error });
  }

  async signOut(): Promise<{ error: CustomError | null }> {
    const { error } = await supabase.auth.signOut();
    return Promise.resolve({ error });
  }
}
