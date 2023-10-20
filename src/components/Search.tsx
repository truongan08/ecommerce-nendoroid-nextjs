"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDebounce } from "use-debounce";

const SearchBar = () => {
  const [searchText, handleSearch] = useState("");
  const router = useRouter();
  const [loop] = useDebounce(searchText, 500);
  useEffect(() => {
    if (!loop) {
      router.push("/");
    } else {
      router.push(`/search?keyword=${loop}`);
    }
  }, [router, loop]);
  return (
    <div className="">
      <div className="flex items-center bg-gray-100 rounded-full p-2 mt-2">
        <button>
          <BiSearch size={20} className="opacity-50" />
        </button>
        <input
          type="text"
          className="outline-none bg-transparent ml-2 caret-blue-500 placeholder:font-light placeholder:text-gray-600 text-[15px]"
          placeholder="Search"
          autoComplete="false"
          value={searchText}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <button
          className="text-blue-800 ml-8 max-md:hidden max-sm:hidden text-sm border-s-2 mr-4"
          onClick={() => router.push(`/search?keyword=${loop}`)}
        >
          <div className="ml-4">Search</div>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
