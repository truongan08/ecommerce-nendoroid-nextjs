"use client";

import { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
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
  const handleSubmit = () => {
    console.log("dang dang nhap");
  };

  return (
    <div
      className={
        "min-h-screen bg-gray-100 flex flex-col justify-centerS py-12 sm:px-6 lg:px-8 fixed inset-0  bg-opacity-30 backdrop-blur-sm z-100" +
        (modalLogin ? "" : " hidden")
      }
    >
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md mb-28 bg-white py-1 px-4 shadow sm:rounded-lg sm:px-10 mb-26 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md ">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login
          </h2>
        </div>
        <div className="">
          <form className=" space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md py-6 shadow-sm -space-y-px-10">
              <div className="form-outline mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    // onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="my@gmail.com"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {/* {errors.email && touched.email && (
                    <p className="text-red-500">{errors.email}</p>
                  )} */}
                </div>
              </div>

              <div className="form-outline mb-4 mt-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <div className="flex mt-1">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "show-password" : "password"}
                    autoComplete="current-password"
                    // onChange={(e) => setPassword(e.target.value)}
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
                  {/* {errors.password && touched.password && (
                    <p className="text-red-500">{errors.password}</p>
                  )} */}
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between ">
              <div className="text-sm">
                <Link
                  href={"/"}
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  onClick={(e) => clickSwitchModal("register")}
                >
                  <b>Register</b>
                </Link>
              </div>

              <div className="text-sm">
                <Link
                  href="/Forget"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  onClick={() => clickModalLogin()}
                >
                  <b>Forgot password?</b>
                </Link>
              </div>
            </div>

            <div className="py-6 w-full flex justify-center space-x-36">
              <Link
                href={"/"}
                type="submit"
                onClick={() => clickModalLogin()}
                className="py-2 px-7 border border-transparent text-sm font-medium rounded-md text-black bg-gray-200 hover:bg-gray-300 mr-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Close
              </Link>
              <button
                type="submit"
                disabled={false}
                className="py-2 px-7 border border-transparent text-sm font-medium rounded-md text-black bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
