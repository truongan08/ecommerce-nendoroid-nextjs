import { NextRequest, NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
  const { formEntries } = await req.json();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user !== null) {
    const { error } = await supabase
      .from("customer")
      .update({
        username: formEntries.username,
        full_name: formEntries.full_name,
      })
      .eq("customer_id", user.id);

    if (error) {
      return NextResponse.json(
        {
          fail: true,
          message: error,
        },
        { status: 400 }
      );
    }
    const { error: ErrorAddress } = await supabase
      .from("address")
      .update({
        city: formEntries.city,
        country: formEntries.country,
        line1: formEntries.line1,
        line2: formEntries.line2,
        postal_code: formEntries.postal_code,
        state: formEntries.state,
      })
      .eq("customer_id", user.id);
    if (ErrorAddress) {
      return NextResponse.json(
        {
          fail: true,
          message: ErrorAddress,
        },
        { status: 400 }
      );
    }
  }

  return NextResponse.json(
    {
      success: true,
    },
    { status: 200 }
  );
}
