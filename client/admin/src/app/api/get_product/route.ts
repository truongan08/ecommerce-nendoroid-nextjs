import supabase from "@/utils/SupabaseAdmin";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  let page = await request.json();

  const limit = 3;
  const from = page.page ? page.page * limit : 0;
  const to = page.page ? from + limit : limit;

  const { data, count, error } = await supabase
    .from("product")
    .select("*", { count: "exact" })
    .range(from, to);

  return NextResponse.json(
    {
      tableName: "Product",
      data: data,
      count: count,
      error: error,
    },
    { status: 200 }
  );
}
