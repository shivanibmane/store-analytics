import React from "react";
import CardSkeletonLoader from "../ChartSkeletonLoaders/CardSkeletonLoader";

interface MostRes {
  name: string;
  count: number;
}

const Dwell_Card: React.FC<{
  data: MostRes | null;
  isLoading: boolean;
}> = ({ data, isLoading }) => {
  return isLoading ? (
    <CardSkeletonLoader />
  ) : (
    <div className="w-full xl:w-[300px] border border-[#F92609] rounded-lg p-6 flex flex-col items-center justify-center min-h-0">
      <h3 className="text-lg font-semibold mb-2 text-[#F92609] text-center">
        Camera With Max Dwell Timing
      </h3>
      <p className="">{data?.name ? data.name : <span className="text-sm">Data Not Found</span>}</p>
      <p className="text-2xl font-bold">{data?.count ? data.count : ""}</p>
    </div>
  );
};

export default Dwell_Card;
