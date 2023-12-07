import ProfileUser from "@/components/Profile/Profile";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
const Profile = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const { data, error } = await supabase
    .from("customer")
    .select(`*,address(*)`)
    .single();
  if (error) {
    throw Error("Fail to fetch profile");
  }
  return (
    <>
      <ProfileUser profile={data} />
    </>
  );
};

export default Profile;
