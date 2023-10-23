import supabase from "@/utils/userAction";
import {
  AuthOutput,
  SignInDto,
  SignUpDto,
  Session,
  CustomError,
} from "@/types/user";

export class AuthSupabase implements AuthOutput {
  async signIn({ email, password }: SignInDto): Promise<{
    session: Session | null;
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
  async signUp({
    email,
    password,
  }: SignUpDto): Promise<{ error: CustomError | null }> {
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    return Promise.resolve({ error });
  }
  async signOut(): Promise<{ error: CustomError | null }> {
    const { error } = await supabase.auth.signOut();
    return Promise.resolve({ error });
  }
}
