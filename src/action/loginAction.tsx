import supabase from "@/utils/userAction";

const loginAction = async () => {
  try {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: "truonganfi@gmail.com",
      password: "test",
    });
    return data as any;
  } catch (error) {
    console.log(error);
  }
};

export default loginAction;
