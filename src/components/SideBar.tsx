import {
  selectLoggedInUser,
  signOut,
  useAppDispatch,
  useAppSelector,
} from "@/lib/redux";
import { User } from "@/types/user";
import Link from "next/link";
import Image from "next/image";
import {
  AiOutlineClose,
  AiOutlineShoppingCart,
  AiOutlineSetting,
  AiOutlineLogout,
  AiOutlineProfile,
  AiOutlineShopping,
} from "react-icons/ai";

interface SideBarProps {
  openSidebar: boolean;
  onCLickOpenSidebar: () => void;
}
const SideBar: React.FC<SideBarProps> = ({
  openSidebar,
  onCLickOpenSidebar,
}) => {
  const dispatch = useAppDispatch();
  const loggedInUser: User | null = useAppSelector(selectLoggedInUser);

  const SignOut = async () => {
    onCLickOpenSidebar();
    await dispatch(signOut());
  };

  return (
    <div
      className={`min-h-screen bg-gray-100 flex flex-col justify-centerS py-12 sm:px-6 lg:px-8 fixed inset-0  bg-opacity-30 backdrop-blur-sm z-10 ${
        openSidebar ? "" : "hidden"
      }`}
    >
      <div className="fixed flex flex-col top-0 right-0 w-64 bg-white h-full border-r">
        <div className="flex items-center justify-start h-14 border-b">
          <Image
            src="/images/avatar.png"
            width={40}
            height={40}
            alt="avatar"
            className="flex rounded-full ml-2"
          />
          <div className="fixed text-sm ml-14">{loggedInUser?.email}</div>
          <div
            className="fixed right-0 mr-4"
            onClick={() => onCLickOpenSidebar()}
          >
            <AiOutlineClose />
          </div>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">
                  Menu
                </div>
              </div>
            </li>

            <li>
              <Link
                href="#profile"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <AiOutlineProfile />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Profile
                </span>
              </Link>
            </li>

            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">
                  Order
                </div>
              </div>
            </li>
            <li>
              <Link
                href="#cart"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <AiOutlineShoppingCart />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Cart
                </span>
                <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">
                  15
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#orders"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <AiOutlineShopping />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Orders
                </span>
              </Link>
            </li>

            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">
                  Settings
                </div>
              </div>
            </li>

            <li>
              <Link
                href="/"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <AiOutlineSetting />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Settings
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                onClick={() => SignOut()}
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <AiOutlineLogout />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Logout
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
