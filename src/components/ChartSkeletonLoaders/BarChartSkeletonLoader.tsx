import { Skeleton } from "../ui/skeleton"

const BarChartSkeletonLoader = () => {
  return (
    <div className="h-[200px] w-full relative">
      {/* Y-Axis labels */}
      <div className="absolute left-0 top-6 h-[150px] flex flex-col justify-between pl-2">
        {[...Array(4)].map((_, idx) => (
          <Skeleton key={idx} className="h-3 w-6 rounded bg-[#FEE3DC]" />
        ))}
      </div>

      {/* X-Axis Line */}
      <div className="absolute bottom-[40px] left-[40px] right-4 h-[1px] bg-[#FEE3DC]" />

      {/* Y-Axis Line */}
      <div className="absolute left-[40px] bottom-[40px] h-[150px] w-[1px] bg-[#FEE3DC]" />

      {/* Bar and Label Container */}
      <div className="flex h-full items-end pl-10 pr-4 pb-[50px]">
        <div className="flex items-end justify-around w-full h-[150px]">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {/* Bar */}
              <Skeleton
                className={`w-10 sm:w-15 md:20 xl:30 rounded bg-[#FEE3DC] `}
                style={{ height: `${80 + (idx % 3) * 15}px` }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* X-Axis Labels outside the axis */}
      <div className="absolute bottom-2 left-[40px] right-4 flex justify-around">
        {[...Array(4)].map((_, idx) => (
          <Skeleton key={idx} className="h-3 w-10 rounded bg-[#FEE3DC]" />
        ))}
      </div>
    </div>
  )
}

export default BarChartSkeletonLoader
