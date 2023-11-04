"use client";

import { useEffect } from "react";
import {
  useAppSelector,
  useAppDispatch,
  selectProductInState,
  selectGetProductByCategoryStatus,
  selectGetProductByCategoryError,
  getProductByCategory,
} from "@/lib/redux";
import { CustomError, Product, ProductRequestStatus } from "@/types/user";

import Loading from "@/components/Loading";
import NendoroidItem from "@/components/NendoroidItem";

interface CategoryContentProps {
  type: string;
}
const CategoryContent: React.FC<CategoryContentProps> = ({ type }) => {
  const dispatch = useAppDispatch();

  const getProductByCategoryStatus: ProductRequestStatus = useAppSelector(
    selectGetProductByCategoryStatus
  );

  const getProductByCategoryError: CustomError | null = useAppSelector(
    selectGetProductByCategoryError
  );

  const nendoroids: Product[] | null = useAppSelector(selectProductInState);

  useEffect(() => {
    async function fetchData(type: any) {
      await dispatch(getProductByCategory({ type }));
    }
    fetchData(type);
  }, []);

  if (nendoroids?.length === 0) {
    return <div className="mt-4 text-neutral-400">No products found</div>;
  }

  if (getProductByCategoryStatus === ProductRequestStatus.FAILED) {
    return (
      <div className="mt-4 text-neutral-400">
        {getProductByCategoryError?.message}
      </div>
    );
  }

  return (
    <div className=" flex w-full">
      <div>
        <span>Trending Nendoroid</span>
        {getProductByCategoryStatus === ProductRequestStatus.LOADING ? (
          <div className="gap-4 mt-4">
            <Loading />
          </div>
        ) : (
          <div className="w-auto h-auto m-auto mr-2 p-0 max-md:p-6 mt-11 max-md:mt-16 text-center">
            <span className="text-5xl">{type}</span>
            <div className="">
              <NendoroidItem data={nendoroids} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default CategoryContent;
