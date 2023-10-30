"use client";

import { useEffect } from "react";
import {
  selectGetProductByStatusError,
  selectGetProductByStatusStatus,
  useAppSelector,
  getProductByStatus,
  useAppDispatch,
  selectProductInState,
} from "@/lib/redux";
import { CustomError, Product, ProductRequestStatus } from "@/types/user";

import Loading from "@/components/Loading";
import NendoroidItem from "@/components/NendoroidItem";

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

  if (nendoroids?.length === 0) {
    return <div className="mt-4 text-neutral-400">No products found</div>;
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
        <div className="text-xl">Trending Nendoroid</div>
        {getProductByStatusStatus === ProductRequestStatus.LOADING ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4 ">
            <NendoroidItem data={nendoroids} />
          </div>
        )}
      </div>

      <div className="md:w-1/5 sm:w-1/3 lg:w-1/4 xl:w-1/5 flex mx-7">
        isLoggedIn
      </div>
    </div>
  );
};
export default PageContent;
