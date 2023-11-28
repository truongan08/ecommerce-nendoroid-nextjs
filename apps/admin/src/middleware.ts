import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse, NextRequest } from "next/server";
import supabase from "./utils/SupabaseAdmin";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  supabase.auth.onAuthStateChange((event, session) => {
    if (event == "SIGNED_IN") {
      if (session) {
        if (session?.user.app_metadata.claims_admin == false) {
          supabase.auth.signOut();
          alert("not admin, pls login again");
        }
      }
    }
  });

  // if user is signed in and the current path is / redirect the user to /account
  if (
    user?.app_metadata.claims_admin === true &&
    req.nextUrl.pathname === "/"
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // if user is not signed in and the current path is not / redirect the user to /
  if (!user && req.nextUrl.pathname !== "/") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/", "/dashboard"],
};
