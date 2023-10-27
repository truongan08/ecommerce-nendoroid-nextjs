import supabase from "@/utils/SupabaseUser";

export async function getUser() {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  } catch (error) {
    console.log(error);
  }
}
