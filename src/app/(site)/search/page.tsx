"use client";
import { Keyword } from "@/types/user";
import SearchContent from "./components/SearchContent";
import { useSearchParams } from "next/navigation";

const Search = ({}) => {
  const searchParams = useSearchParams();
  const textSearch = searchParams.get("keyword");

  return (
    <div className="w-full mx-auto p-6">
      <SearchContent keyword={textSearch} />
    </div>
  );
};
export default Search;
