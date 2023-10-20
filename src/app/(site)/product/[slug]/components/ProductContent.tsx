"use client";
import { Product } from "../../../../../../types";
import NendoroidItem from "@/components/NendoroidItem";
import Link from "next/link";

interface PageContentProps {
  nendoroids: Product[];
  page: number;
}

const ProductContent: React.FC<PageContentProps> = ({ nendoroids, page }) => {
  if (nendoroids.length === 0) {
    return <div className="mt-4 text-neutral-400">Sold out nendoroid</div>;
  }

  return (
    <div className="md:w-4/5 sm:w-full lg:w-3/4 xl:w-2/3 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8 ">
        <NendoroidItem data={nendoroids} />
      </div>
      <nav aria-label="Page navigation">
        <ul className="flex">
          <li>
            <Link
              className={
                " relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 hover:text-white hover:bg-neutral-700" +
                (page == 0 ? " pointer-events-none" : "")
              }
              href={"/product/" + [page - 1]}
            >
              Previous
            </Link>
          </li>
          <li>
            <Link
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-700 hover:text-white hover:"
              href={"/product/" + [page - 1]}
            >
              {page == 0 ? "" : Number(page - 1)}
            </Link>
          </li>
          <li aria-current="page">
            <a
              className="relative block rounded bg-primary-100 px-3 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300 "
              href="#!"
            >
              {page}
              <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                (current)
              </span>
            </a>
          </li>
          <li>
            <a
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300   hover:bg-neutral-700 hover:text-white"
              href={"/product/" + [page + 1]}
            >
              {page == 5 ? "" : Number(page + 1)}
            </a>
          </li>
          <li>
            <Link
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-700 hover:text-white"
              href={"/product/" + (page + 1)}
            >
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default ProductContent;
