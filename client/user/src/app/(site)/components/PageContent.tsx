"use client";

import { Suspense, useEffect } from "react";
import {
  selectGetProductByStatusError,
  selectGetProductByStatusStatus,
  useAppSelector,
  getProductByStatus,
  useAppDispatch,
  selectProductInState,
} from "@/lib/redux";
import { CustomError, Product, ProductRequestStatus } from "@/types/user";

import NendoroidItem from "@/components/NendoroidItem";
import { BiLoader } from "react-icons/bi";

const PageContent = () => {
  const dispatch = useAppDispatch();

  const getProductByStatusStatus: ProductRequestStatus = useAppSelector(
    selectGetProductByStatusStatus
  );

  const getProductByStatusError: CustomError | null = useAppSelector(
    selectGetProductByStatusError
  );

  const nendoroids: Product[] | null = useAppSelector(selectProductInState);

  useEffect(() => {
    async function fetchData(status: any) {
      await dispatch(getProductByStatus({ status }));
    }
    fetchData("trending");
  }, []);

  if (
    nendoroids?.length === 0 &&
    getProductByStatusStatus === ProductRequestStatus.IDLE
  ) {
    return <div className="mx-4 mt-4 text-neutral-400">No products found</div>;
  }

  if (getProductByStatusStatus === ProductRequestStatus.FAILED) {
    return (
      <div className="mt-4 text-neutral-400">
        {getProductByStatusError?.message}
      </div>
    );
  }

  return (
    <div className="flex">
      <div>
        <div className="text-xl font-bold mx-6 antialiased">
          Trending Nendoroid
        </div>
        {getProductByStatusStatus === ProductRequestStatus.LOADING ? (
          <div className="flex items-center justify-center">
            <div className="max-w-md mx-auto text-center">
              <BiLoader size={40} className="text-blue-400 animate-spin" />
            </div>
          </div>
        ) : (
          <div>
            <NendoroidItem data={nendoroids} />
          </div>
        )}
      </div>
    </div>
  );
};
export default PageContent;
