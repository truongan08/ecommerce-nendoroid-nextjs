import { useState, useEffect } from "react";
import Link from "next/link";
import {
  selectIsLoggedInUser,
  selectSignUpError,
  selectSignUpStatus,
  signUp,
  useAppDispatch,
  useAppSelector,
} from "@/lib/redux";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { CustomError, RequestStatus } from "@/types/user";
import { useRouter } from "next/navigation";
import Loading from "./Loading";
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
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const isLoggedInUser: boolean = useAppSelector(selectIsLoggedInUser);
  const signUpStatus: RequestStatus = useAppSelector(selectSignUpStatus);
  const signUpError: CustomError | null = useAppSelector(selectSignUpError);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formEntries = Object.fromEntries(formData);
    const email: string = formEntries.email as string;
    const password: string = formEntries.password as string;

    await dispatch(signUp({ email, password }));
  };

  useEffect(() => {
    if (isLoggedInUser) {
      router.refresh();
      if (signUpStatus === RequestStatus.COMPLETED) {
        clickModalRegister();
      }
    }
  }, [isLoggedInUser, router, signUpStatus]);

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
                  id="fullname"
                  name="fullname"
                  type="text"
                  autoComplete="fullname"
                  required
                  placeholder="Your name"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
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
                href={"#"}
                type="submit"
                onClick={() => clickModalRegister()}
                className="py-2 px-7 border border-transparent text-sm font-medium rounded-md text-black bg-gray-200 hover:bg-gray-300 mr-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Close
              </Link>
              <button
                type="submit"
                disabled={signUpStatus === RequestStatus.LOADING}
                className={`py-2 px-7 border border-transparent text-sm font-medium rounded-md text-black bg-gray-200focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-gray-200 ${
                  signUpStatus === RequestStatus.LOADING
                    ? ""
                    : "hover:bg-gray-300"
                }`}
              >
                {signUpStatus === RequestStatus.LOADING ? (
                  <Loading />
                ) : (
                  "Register"
                )}
              </button>
            </div>
          </form>
          {signUpStatus === RequestStatus.FAILED && (
            <div className="mb-3 p-2 text-center bg-red-100 text-red-600 rounded">
              {signUpError?.message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Register;
