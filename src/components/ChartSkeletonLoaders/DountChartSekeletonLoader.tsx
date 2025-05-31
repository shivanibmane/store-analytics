import { Skeleton } from "@/components/ui/skeleton"

const DoughnutChartSkeleton = () => {
  return (
    <div className="w-[200px] h-[180px] flex flex-col items-center justify-center mx-auto">
      {/* Donut shape */}
      <div className="relative w-[140px] h-[140px]">
        {/* Outer ring */}
        <Skeleton className="w-full h-full rounded-full bg-[#FEE3DC]" />

        {/* Inner cutout to mimic donut hole */}
        <div className="absolute top-1/2 left-1/2 w-[80px] h-[80px] rounded-full bg-white transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Legend skeleton bars */}
      <div className="mt-4 space-y-2 text-center">
        <Skeleton className="h-4 w-28 rounded bg-[#FEE3DC]" />
      </div>
    </div>
  )
}

export default DoughnutChartSkeleton
