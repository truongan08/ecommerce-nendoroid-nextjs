import { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
interface RegisterProps {
  modalRegister: boolean;
  clickModalRegister: () => void;
  clickSwitchModal: (e: any) => void;
}

const Register: React.FC<RegisterProps> = ({
  modalRegister,
  clickModalRegister,
  clickSwitchModal,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = () => {
    console.log("dang dang nhap");
  };
  return (
    <div
      className={
        "min-h-screen bg-gray-100 flex flex-col justify-centerS py-12 sm:px-6 lg:px-8 fixed inset-0  bg-opacity-30 backdrop-blur-sm z-70" +
        (modalRegister ? "" : " hidden")
      }
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">
          Register
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-gray-700"
              >
                Fullname
              </label>
              <div className="mt-1">
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  autoComplete="firstname"
                  required
                  placeholder="Your name"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {/* {errors.firstname && touched.firstname && (
                <p className="text-red-500">{errors.firstname}</p>
              )} */}
              </div>
            </div>

            <div>
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
                  placeholder="my@gmail.com"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {/* {errors.email && touched.email && (
                <p className="text-red-500">{errors.email}</p>
              )} */}
              </div>
            </div>

            <div>
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

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  onClick={(e) => clickSwitchModal("login")}
                >
                  <b>You have account?</b>
                </a>
              </div>
            </div>

            <div className="z-10 py-6 w-full flex justify-center space-x-36">
              <Link
                href={"/"}
                type="submit"
                onClick={() => clickModalRegister()}
                className="py-2 px-7 border border-transparent text-sm font-medium rounded-md text-black bg-gray-200 hover:bg-gray-300 mr-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Close
              </Link>
              <button
                type="submit"
                disabled={false}
                className="py-2 px-7 border border-transparent text-sm font-medium rounded-md text-black bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
