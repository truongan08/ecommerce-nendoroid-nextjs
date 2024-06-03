import React from "react";
import { FaUser, FaJediOrder } from "react-icons/fa6";

interface CardStatsProps {
  statSubtitle: string;
  statTitle: string;
  statIconColor: string;
}

const CardStats: React.FC<CardStatsProps> = ({
  statSubtitle,
  statTitle,
  statIconColor,
}) => {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                {statSubtitle}
              </h5>
              <span className="font-semibold text-xl text-blueGray-700">
                {statTitle}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                  statIconColor
                }
              >
                {statSubtitle == "Users" ? (
                  <FaUser />
                ) : statSubtitle == "Orders" ? (
                  <FaJediOrder />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardStats;