import React from "react";

const HeatCardSkeleton: React.FC = () => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:w-[300px] border border-[#F92609] rounded-2xl p-6 flex flex-col items-center justify-center bg-white shadow-md animate-pulse">
      <div className="w-3/4 h-6 bg-red-500 rounded mb-4"></div>
      <div className="w-1/3 h-4 bg-red-500 rounded mb-2"></div>
      <div className="w-1/2 h-10 bg-red-500 rounded"></div>
    </div>
  );
};

export default HeatCardSkeleton;
