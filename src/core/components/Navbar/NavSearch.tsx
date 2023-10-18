import { debounce } from "@/core/lib/utils";
import { ChangeEventHandler, useEffect, useState } from "react";
import SearchService from "@/services/search.service";
import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/types/i-product";
import Spinner from "../Spinner";
import { useRouter } from "next/router";

const searchService = new SearchService();

// TODO: fetch categories from BE
const NavSearch = () => {
  const router = useRouter();

  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<IProduct[]>([]);
  const [showMenu, setShowMenu] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCategoryChange: ChangeEventHandler<HTMLSelectElement> = e => {
    setCategory(e.target.value);
  };

  const handleBlur = async () => {
    setShowMenu(false);
    setResults([]);
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      setShowMenu(true);

      const res = await searchService.searchProduct(searchTerm, category);

      if (res.success) {
        setResults(res.data);
      }

      setLoading(false);
    } catch (error: any) {
      // console.log("🚀 ~ handleSearch ~ error:", error);
      setLoading(false);
      setShowMenu(false);
      setResults([]);

      // if (error.message.includes("Not authorized")) {
      //   router.push("/login");
      // }
    }
  };

  const debouncedSearch = debounce(handleSearch, 350);

  useEffect(() => {
    if (searchTerm.length) debouncedSearch();
    else {
      setResults([]);
      setShowMenu(false);
    }
  }, [searchTerm]);

  return (
    <div className="relative w-full max-w-md xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden md:flex items-center h-12">
      <select
        value={category}
        onChange={handleCategoryChange}
        className="form-select bg-transparent focus:outline-none focus:ring-0 uppercase font-bold text-sm border-0"
      >
        <option value="">All Categories</option>
        <option value="fragrances">Fragrances</option>
        <option value="smartphones">Smartphones</option>
        <option value="laptops">Laptops</option>
      </select>

      <input
        type="text"
        className="form-input focus:outline-none focus:ring-0 bg-transparent font-semibold text-sm border-0"
        placeholder="I'm searching for ..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        onBlur={handleBlur}
      />

      <div className="w-8 text-gray-500">
        <Image src="/icons/magnifier.svg" width={20} height={20} alt="search" />
      </div>

      {/* {Boolean(results.length) && ( */}
      {showMenu && (
        <ul className="absolute z-50 top-12 bg-white border border-gray-100 w-full rounded-bl rounded-br">
          {loading && (
            <li className="flex justify-center py-2 h-40">
              <Spinner color="#000" fontSize={30} height={30} />
            </li>
          )}

          {!loading && results.length === 0 && (
            <li className="flex justify-center py-2 h-40 items-center">
              No results found
            </li>
          )}

          {!loading &&
            results.length > 0 &&
            results.map(item => (
              <li
                key={item._id}
                className="border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900"
              >
                <Link
                  href={`/products/${item.slug}`}
                  className="w-full block px-2 py-1"
                >
                  {item.name} - {item.brand}
                </Link>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default NavSearch;
