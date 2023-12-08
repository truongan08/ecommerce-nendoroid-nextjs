import PriceTag from "@/components/PriceTag";
import {
  selectIsLoggedInSession,
  selectLoggedInSession,
  useAppSelector,
} from "@/lib/redux";
import { order } from "@/types/user";
import { Session } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";

interface OrderContentProps {
  order: order[];
  session: Session;
}

const OrderContent: React.FC<OrderContentProps> = ({ order, session }) => {
  const formatDate = (date: any) => {
    const dateNew = new Date(date);
    return `${dateNew.getDate()}/${
      dateNew.getMonth() + 1
    }/${dateNew.getFullYear()} ${dateNew.getHours()}:${dateNew.getMinutes()}`;
  };
  return (
    <div className="bg-white rounded-lg p-4 shadow-2xl border-2 mt-24 max-sm:mt-36">
      <div className="text-lg font-bold mt-1 lg:ml-2">
        <h2>Your Order</h2>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="border-b ">
            <th className="lg:table-cell px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Order ID
            </th>
            <th className="lg:table-cell px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Create Date
            </th>
            <th className="lg:table-cell px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Full name
            </th>
            <th className="lg:table-cell px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Total
            </th>
            <th className="lg:table-cell px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Method
            </th>
            <th className="lg:table-cell px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        {!session ? (
          <tbody>
            <tr>
              <td colSpan={4} className="px-4 py-2">
                <div className="flex justify-center items-center">
                  You must log in before using this feature
                </div>
              </td>
            </tr>
          </tbody>
        ) : order?.length <= 0 ? (
          <tbody>
            <tr>
              <td colSpan={4} className="px-4 py-2">
                <div className="flex justify-center items-center">No order</div>
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {order?.map((item, index) => {
              return (
                <tr key={index}>
                  <Link href={`/orderDetail/${item?.order_id}`}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center">
                        <span className="font-bold">{item?.order_id}</span>
                      </div>
                    </td>
                  </Link>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <span className="font-bold">
                      {formatDate(item?.created_at)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <span className="font-bold">
                      {item?.profile[0].address?.full_name}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-md font-medium">
                    <PriceTag
                      price={item?.total_amount}
                      className="font-bold"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-md font-medium">
                    <span className="font-bold">{item?.method}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-md font-medium">
                    <span className="font-bold">{item?.status}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
    </div>
  );
};
export default OrderContent;
