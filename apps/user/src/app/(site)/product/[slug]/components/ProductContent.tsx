"use client";
import { Product } from "@/types/user";
import NendoroidItem from "@/components/NendoroidItem";
import Link from "next/link";
import Image from "next/image";
import { ProductListSkeleton } from "@/components/Skeleton/Skeleton";
import { Suspense } from "react";

interface ProductContentProps {
  nendoroids: Product[];
  page: number;
  count: number;
}

const ProductContent: React.FC<ProductContentProps> = ({
  nendoroids,
  page,
  count,
}) => {
  if (nendoroids.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <Image
            src="/images/PNF.png"
            alt="product-not-found"
            height={500}
            width={500}
            className="object-contain overflow-hidden"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="eager"
          />

          <div className="text-neutral-400 text-lg">No products</div>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={<ProductListSkeleton />}>
      <div className="flex">
        <div>
          <NendoroidItem data={nendoroids} />
        </div>
      </div>
      <nav aria-label="Page navigation">
        <ul className="flex z-0">
          <li>
            <Link
              className={
                " relative block rounded bg-transparent px-2 py-1.5 text-sm text-neutral-500 transition-all duration-300 hover:text-white hover:bg-neutral-700" +
                (page == 0 ? " pointer-events-none" : "")
              }
              href={"/product/" + [page - 1]}
            >
              Previous
            </Link>
          </li>
          <li>
            <Link
              className="relative block rounded bg-transparent px-2 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-700 hover:text-white"
              href={"/product/" + [page - 1]}
            >
              {page == 0 ? "" : Number(page - 1)}
            </Link>
          </li>
          <li aria-current="page">
            <Link
              className="relative block rounded bg-primary-100 px-2 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300 "
              href="#!"
            >
              {page}
              <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                (current)
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="relative block rounded bg-transparent px-2 py-1.5 text-sm text-neutral-600 transition-all duration-300   hover:bg-neutral-700 hover:text-white"
              href={"/product/" + [page * 1 + 1]}
            >
              {page == count / 8 ? "" : Number(page * 1 + 1)}
            </Link>
          </li>
          <li>
            <Link
              className="relative block rounded bg-transparent px-2 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-700 hover:text-white"
              href={"/product/" + (page * 1 + 1)}
            >
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </Suspense>
  );
};
export default ProductContent;
