import { Suspense } from "react";
import SearchContent from "./components/SearchContent";

const Search = ({}) => {
  // const nendoroids = await getSearch(String(keyword));
  // if (nendoroids.length === 0) {
  //   return (
  //     <div className="mt-12 text-neutral-400">Not found any product match</div>
  //   );
  // }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContent />
    </Suspense>

    // <div className="md:w-4/5 sm:w-2/3 lg:w-3/4 xl:w-4/5 mx-7 flex">
    //   <div>
    //     <span>Match with keyword</span>
    //     <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4 ">
    //       <NendoroidItem data={nendoroids} />
    //     </div>
    //   </div>
    // </div>
  );
};
export default Search;
