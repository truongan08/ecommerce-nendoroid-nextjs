"use client";
import { useEffect } from "react";
import ProductContent from "./components/ProductContent";
import NotFound from "@/components/404";
import {
  selectCountInState,
  selectProductInState,
  useAppDispatch,
  useAppSelector,
  getProductPagination,
} from "@/lib/redux";
import { Product } from "@/types/user";

const Product = ({ params }: { params: { slug: number } }) => {
  const dispatch = useAppDispatch();
  const nendoroid: Product[] | null = useAppSelector(selectProductInState);
  const count: number | null = useAppSelector(selectCountInState);

  useEffect(() => {
    async function fetchData(page: any) {
      await dispatch(getProductPagination(page));
    }
    fetchData(params.slug);
  }, []);

  if (count === null) {
    return <NotFound />;
  }

  if (
    isNaN(Number(params.slug)) ||
    params.slug > count / 8 ||
    nendoroid === null
  ) {
    return <NotFound />;
  }

  return (
    <div className="w-full mx-auto p-6 mt-12 max-md:mt-16">
      <ProductContent nendoroids={nendoroid} page={params.slug} count={count} />
    </div>
  );
};

export default Product;
