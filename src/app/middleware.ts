import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({req, res});
  
  await supabase.auth.getSession();
  // if (req.nextUrl.pathname.startsWith("/product")) {
  //   return NextResponse.rewrite(new URL("/product/0", req.url));
  // }
  // if (req.nextUrl.pathname.startsWith("/dashboard")) {
  //   return NextResponse.rewrite(new URL("/dashboard/user", req.url));
  // }
  if (req.nextUrl.pathname.startsWith("/search")) {
    return NextResponse.rewrite(new URL("/", req.url));
  }

  await supabase.auth.getSession()
  
  return res;
}
