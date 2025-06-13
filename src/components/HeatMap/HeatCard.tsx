import React from "react";
import { useHoverContext } from '../../hooks/HoverContext';
const HeatCard: React.FC<{}> = () => {
  const { hoveredData } = useHoverContext();
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:w-[300px] border border-[#F92609] rounded-2xl p-6 flex flex-col items-center justify-center bg-white shadow-md">
      <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-[#F92609] text-center break-words">
        {hoveredData.camera_name}
      </h3>
      <p className="text-sm sm:text-base text-gray-600">Max Count</p>
      <p className="text-2xl sm:text-3xl font-bold text-black">{hoveredData.customer_count}</p>
    </div>
  );
};
export default HeatCard;
