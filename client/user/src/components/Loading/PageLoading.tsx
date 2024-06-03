import { BiLoader } from "react-icons/bi";

const PageLoading = () => {
  return (
    <div
      id="loading-screen"
      className=" w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50"
    >
      <span className="text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0">
        <BiLoader size={60} className="w-12 h-12 animate-spin" />
      </span>
    </div>
  );
};
export default PageLoading;
