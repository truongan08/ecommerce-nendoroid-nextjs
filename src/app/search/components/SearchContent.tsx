"use client";

import { useSearchParams } from "next/navigation";

const SearchContent = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("keyword");
  return <div className="min-h-screen">{search}</div>;
};
export default SearchContent;
