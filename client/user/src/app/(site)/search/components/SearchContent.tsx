import NendoroidItem from "@/components/NendoroidItem";
import {
  getProductSearch,
  selectGetProductSearchError,
  selectGetProductSearchStatus,
  selectProductInState,
  useAppDispatch,
  useAppSelector,
} from "@/lib/redux";
import { CustomError, Product, ProductRequestStatus } from "@/types/user";
import { useEffect } from "react";
import Loading from "@/components/Loading/Loading";
import Image from "next/image";
interface SearchContentProps {
  keyword: string | null;
}

const SearchContent: React.FC<SearchContentProps> = ({ keyword }) => {
  const dispatch = useAppDispatch();

  const getProductSearchStatus: ProductRequestStatus = useAppSelector(
    selectGetProductSearchStatus
  );

  const getProductSearchError: CustomError | null = useAppSelector(
    selectGetProductSearchError
  );

  const nendoroids: Product[] | null = useAppSelector(selectProductInState);

  useEffect(() => {
    async function fetchData(keyword: any) {
      await dispatch(getProductSearch({ keyword }));
    }
    fetchData(keyword);
  }, [keyword, dispatch]);

  if (nendoroids?.length === 0) {
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
    <div className="flex w-full mt-10">
      <div>
        {getProductSearchStatus === ProductRequestStatus.LOADING ? (
          <div className="gap-4 mt-4">
            <Loading />
          </div>
        ) : (
          <div className="w-auto h-auto m-auto mr-2 p-0 max-md:p-6 mt-11 max-md:mt-16 text-center">
            <span className="text-5xl">
              Match with keyword &apos;{keyword}&apos;
            </span>
            <div>
              <NendoroidItem data={nendoroids} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchContent;
