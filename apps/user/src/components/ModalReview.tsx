"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  selectIsLoggedInUser,
  selectLoggedInUser,
  useAppDispatch,
  useAppSelector,
} from "@/lib/redux";
import { useRouter } from "next/navigation";
import supabase from "@/utils/SupabaseUser";
import Loading from "./Loading/Loading";
import { User } from "@/types/user";
import { toast } from "react-toastify";

interface ReviewProps {
  modalReview: boolean;
  clickModalReview: () => void;
}

const Review: React.FC<ReviewProps> = ({ modalReview, clickModalReview }) => {
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const loggedInUser: User | null = useAppSelector(selectLoggedInUser);
  const isLoggedInUser: boolean = useAppSelector(selectIsLoggedInUser);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    const formEntries = Object.fromEntries(formData);
    const star = 4;
    const review: string = formEntries.review as string;

    const { error } = await supabase.from("review").insert({
      star,
      review,
      customer_id: loggedInUser?.id,
      product_id: 22,
      order_id: 13,
    });
    if (!error) {
      setLoading(false);
      event.target.reset();
      handleReset();
      toast.success("Review success!");
    }
  };

  const handleReset = () => {
    clickModalReview;
  };

  useEffect(() => {
    if (!isLoggedInUser) {
      router.push("/");
    }
  }, [isLoggedInUser, router]);

  return (
    <div
      className={`min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 fixed inset-0  bg-opacity-30 backdrop-blur-sm z-10 + ${
        modalReview ? "" : "hidden"
      }`}
    >
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md mb-28 bg-white py-1 px-4 shadow sm:rounded-lg sm:px-10 mb-26 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md ">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Review
          </h2>
        </div>
        <div>
          <form
            id="formSignin"
            className="space-y-6"
            onSubmit={handleSubmit}
            onReset={handleReset}
          >
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md">
              <div className="form-outline mb-4">
                <div className="block text-sm font-medium text-gray-700">
                  Star
                </div>
              </div>

              <div className="text-center">
                <span className="flex flex-row-reverse">
                  <svg
                    className="text-gray-600 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 "
                    width="23"
                    height="23"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    ></path>
                  </svg>

                  <svg
                    className="text-gray-600 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 "
                    width="23"
                    height="23"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    ></path>
                  </svg>

                  <svg
                    className="text-gray-600 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 "
                    width="23"
                    height="23"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    ></path>
                  </svg>

                  <svg
                    className="text-gray-600 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 "
                    width="23"
                    height="23"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    ></path>
                  </svg>

                  <svg
                    className="text-gray-600 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 "
                    width="23"
                    height="23"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    ></path>
                  </svg>
                </span>
              </div>

              <div className="form-outline mb-4 mt-6">
                <label
                  htmlFor="review"
                  className="block text-sm font-medium text-gray-700"
                >
                  Review
                </label>

                <div className="flex mt-1">
                  <input
                    name="review"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center space-x-40">
              <button
                type="reset"
                onClick={() => clickModalReview()}
                className="py-2 px-7 border border-transparent text-sm font-medium rounded-md text-black bg-gray-200 hover:bg-gray-300 mr-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Close
              </button>

              <button
                type="submit"
                disabled={loading}
                className={`py-2 px-7 border border-transparent text-sm font-medium rounded-md text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-gray-200 ${
                  loading ? "" : "hover:bg-gray-300"
                }`}
              >
                {loading ? <Loading /> : "Review"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Review;
