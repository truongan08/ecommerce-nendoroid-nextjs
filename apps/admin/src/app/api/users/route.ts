import supabase from "@/utils/SupabaseAdmin";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    return res.status(401);
  }

  // Check if user is an admin //... your code here

  const { email, password, full_name } = JSON.parse(req.body);
  console.log(email, password, full_name);

  if (!email || !password) {
    return res.status(400).json("Missing email or password");
  }

  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  if (error) {
    console.log("#1 ", error);
    return res.status(400).json(error.message);
  }

  const { error: errorPost } = await supabase
    .from("users")
    .upsert({ id: data.user.id });

  if (errorPost) {
    console.log("#2 ", errorPost);

    return res.status(500).json(errorPost.message);
  }

  return res.status(200).json(data);
}
