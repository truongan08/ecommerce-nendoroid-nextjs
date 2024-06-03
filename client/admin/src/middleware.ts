import { NextResponse, NextRequest } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    if (!user.app_metadata.claims_admin) {
      await supabase.auth.signOut();
    }
  }

  if (req.nextUrl.pathname.startsWith("/products")) {
    return NextResponse.rewrite(new URL("/products/0", req.url));
  }

  if (
    user?.app_metadata.claims_admin === true &&
    req.nextUrl.pathname === "/"
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/", "/dashboard"],
};
