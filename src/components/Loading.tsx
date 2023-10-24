import { RxDotFilled } from "react-icons/rx";

const Loading = () => {
  return (
    <>
      <svg className="h-5 w-5 animate-spin inline items-center">
        <RxDotFilled />
      </svg>
    </>
  );
};
export default Loading;
