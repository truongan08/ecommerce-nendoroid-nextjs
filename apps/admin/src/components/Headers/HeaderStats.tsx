import React from "react";

// components

import CardStats from "@/components/Cards/CardStats";
interface HeaderStatsProps {
  countUser: number;
  countOrder: number;
}
const HeaderStats: React.FC<HeaderStatsProps> = ({ countUser, countOrder }) => {
  return (
    <>
      {/* Header */}
      <div className="relative bg-blueGray-800 md:pt-12 pb-12 pt-2">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Users"
                  statTitle={`${countUser}`}
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Orders"
                  statTitle={`${countOrder}`}
                  statIconColor="bg-orange-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeaderStats;
