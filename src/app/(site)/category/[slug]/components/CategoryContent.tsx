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
    <div className="md:w-4/5 sm:w-2/3 lg:w-3/4 xl:w-4/5 mx-7 flex">
      <div>
        <span>Trending Nendoroid</span>
        {getProductByCategoryStatus === ProductRequestStatus.LOADING ? (
          <div className="gap-4 mt-4">
            <Loading />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4 ">
            <NendoroidItem data={nendoroids} />
          </div>
        )}
      </div>
    </div>
  );
};
export default CategoryContent;
