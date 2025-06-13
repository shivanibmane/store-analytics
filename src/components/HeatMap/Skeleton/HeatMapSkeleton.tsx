import React from 'react';

const HeatMapSkeleton = () => {
  const rows = 2;
  const cols = 3;

  return (
    <div className="w-full h-auto p-4  bg-red-50 rounded-xl animate-pulse">
      <div className="grid grid-rows-2 grid-cols-3 gap-4">
        {Array.from({ length: rows * cols }).map((_, idx) => (
          <div
            key={idx}
            className="h-24 w-full bg-red-500 rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default HeatMapSkeleton;
