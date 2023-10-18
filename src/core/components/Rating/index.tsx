import clsx from "clsx";
import { TRatingRange } from "../types";
import Star from "./Star";

const Rating = ({
  rating,
  canBeUpdated = false,
}: {
  // rating: TRatingRange;
  rating: number;
  canBeUpdated?: boolean;
}) => {
  // const Rating = ({
  //   imgSrc,
  //   price,
  //   review,
  //   title,
  //   totalReviews,
  //   oldPrice,
  // }: IRating) => {
  const dummyArr = [5, 4, 3, 2, 1];

  return (
    <div className={clsx("flex")}>
      {dummyArr.map(num => (
        <Star
          key={num}
          value={num}
          active={rating >= num}
          canRate={canBeUpdated}
        />
      ))}

      {/* <Star value={1} active={false} />
      <Star value={2} active={false} />
      <Star value={3} active={false} />
      <Star value={4} active={false} />
      <Star value={5} active={false} /> */}

      {/* <svg
        className="order-5 text-gray-600 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100"
        width="23"
        height="23"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={() => console.log("5")}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        ></path>
      </svg>

      <svg
        className="order-4 text-gray-600 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100"
        width="23"
        height="23"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={() => console.log("4")}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        ></path>
      </svg>

      <svg
        className="order-3 text-gray-600 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100"
        width="23"
        height="23"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={() => console.log("3")}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        ></path>
      </svg>

      <svg
        className="order-2 text-gray-600 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100"
        width="23"
        height="23"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={() => console.log("2")}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        ></path>
      </svg>

      <svg
        className="order-1 text-gray-600 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100"
        width="23"
        height="23"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={() => console.log("1")}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        ></path>
      </svg> */}
    </div>
  );
};

export default Rating;
