"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loading from "./Loading";
import {
  selectIsLoggedInUser,
  selectSignInError,
  selectSignInStatus,
  signIn,
  useAppDispatch,
  useAppSelector,
} from "@/lib/redux";
import { CustomError, RequestStatus } from "@/types/user";
import { useRouter } from "next/navigation";

interface SignInProps {
  modalLogin: boolean;
  clickModalLogin: () => void;
  clickSwitchModal: (e: any) => void;
}

const SignIn: React.FC<SignInProps> = ({
  modalLogin,
  clickModalLogin,
  clickSwitchModal,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const isLoggedInUser: boolean = useAppSelector(selectIsLoggedInUser);
  const signInStatus: RequestStatus = useAppSelector(selectSignInStatus);
  const signInError: CustomError | null = useAppSelector(selectSignInError);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formEntries = Object.fromEntries(formData);
    const email: string = formEntries.email as string;
    const password: string = formEntries.password as string;

    await dispatch(signIn({ email, password }));

    event.target.reset();

    if (signInStatus === RequestStatus.FAILED) {
      toast(signInError?.message);
    }
  };

  const handleReset = () => {
    clickModalLogin;
  };

  useEffect(() => {
    if (isLoggedInUser) {
      router.refresh();
      handleReset;
    }
  }, [isLoggedInUser, router, signInStatus]);

  return (
    <div
      className={`min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 fixed inset-0  bg-opacity-30 backdrop-blur-sm z-10 + ${
        modalLogin ? "" : "hidden"
      }`}
    >
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md mb-28 bg-white py-1 px-4 shadow sm:rounded-lg sm:px-10 mb-26 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md ">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login
          </h2>
        </div>
        <div className="">
          <form
            id="formSignin"
            className="space-y-6"
            onSubmit={handleSubmit}
            onReset={handleReset}
          >
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md py-6 shadow-sm -space-y-px-10">
              <div className="form-outline mb-4">
                <label
                  htmlFor="email-signin"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <div className="mt-1">
                  <input
                    id="email-signin"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Email"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="form-outline mb-4 mt-6">
                <label
                  htmlFor="password-signin"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <div className="flex mt-1">
                  <input
                    id="password-signin"
                    name="password"
                    type={showPassword ? "show-password" : "password"}
                    autoComplete="current-password"
                    required
                    placeholder="••••••••"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="flex justify-around items-center"
                  >
                    {showPassword ? (
                      <FaEye className="absolute mr-10" />
                    ) : (
                      <FaEyeSlash className="absolute mr-10" />
                    )}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between ">
              <div className="text-sm">
                <Link
                  href={"#"}
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  onClick={() => clickSwitchModal("register")}
                >
                  <b>Register</b>
                </Link>
              </div>

              {/* <div className="text-sm">
                <Link
                  href="/Forget"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  onClick={() => clickModalLogin()}
                >
                  <b>Forgot password?</b>
                </Link>
              </div> */}
            </div>

            <div className="py-6 w-full flex justify-center space-x-36">
              <button
                type="reset"
                onClick={() => clickModalLogin()}
                className="py-2 px-7 border border-transparent text-sm font-medium rounded-md text-black bg-gray-200 hover:bg-gray-300 mr-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Close
              </button>

              <button
                type="submit"
                disabled={signInStatus === RequestStatus.LOADING}
                className={`py-2 px-7 border border-transparent text-sm font-medium rounded-md text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-gray-200 ${
                  signInStatus === RequestStatus.LOADING
                    ? ""
                    : "hover:bg-gray-300"
                }`}
              >
                {signInStatus === RequestStatus.LOADING ? <Loading /> : "Login"}
              </button>
            </div>
          </form>
          <ToastContainer newestOnTop={true} />
        </div>
      </div>
    </div>
  );
};
export default SignIn;
