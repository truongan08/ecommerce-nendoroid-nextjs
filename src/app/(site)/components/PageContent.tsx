"use client";
import { Product } from "../../../../types";
import NendoroidItem from "@/components/NendoroidItem";

interface PageContentProps {
  nendoroids: Product[];
}
const PageContent: React.FC<PageContentProps> = ({ nendoroids }) => {
  if (nendoroids.length === 0) {
    return <div className="mt-4 text-neutral-400">Chua co san pham nao</div>;
  }
  return (
    <div className="md:w-4/5 sm:w-2/3 lg:w-3/4 xl:w-4/5 mx-7 flex">
      <div>
        <span>Trending Nendoroid</span>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4 ">
          <NendoroidItem data={nendoroids} />
        </div>
      </div>

      <div className="md:w-1/5 sm:w-1/3 lg:w-1/4 xl:w-1/5 flex mx-7">
        check account
      </div>
    </div>
  );
};
export default PageContent;
