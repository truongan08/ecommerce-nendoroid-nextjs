import NendoroidItem from "@/components/NendoroidItem";
import { Product } from "../../../../../types";
interface SearchContentProps {
  nendoroids: Product[];
}

const SearchContent: React.FC<SearchContentProps> = ({ nendoroids }) => {
  if (nendoroids.length === 0) {
    return (
      <div className="mt-12 text-neutral-400">Not found any product match</div>
    );
  }
  return (
    <div className="md:w-4/5 sm:w-2/3 lg:w-3/4 xl:w-4/5 flex mt-12 mx-auto">
      <div>
        <span>Match with keyword</span>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8 ">
          <NendoroidItem data={nendoroids} />
        </div>
      </div>
    </div>
  );
};

export default SearchContent;
