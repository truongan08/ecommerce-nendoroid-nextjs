"use client";
import SearchContent from "./components/SearchContent";
import { useSearchParams } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import getSearch from "@/lib/redux/action/getSearch";

const Search = ({}) => {
  // const searchParams = useSearchParams();
  // const textSearch = searchParams.get("keyword");
  // const supabase = createServerComponentClient({
  //   cookies: cookies,
  // });
  //  const data = await getSearch("Kuwagata");
  // const handleSignout = async () => {
  //   const { error } = await supabase.auth.signOut();
  //   if (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <>
      {/* <SearchContent nendoroids={data} /> */}
      {/* <button onClick={() => handleSignout()}>sign out</button> */}
    </>

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
