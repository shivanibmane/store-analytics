import { Skeleton } from "../ui/skeleton"

const LineChartSkeletonLoader = () => {
  return (
    <div className="h-[200px] w-full pr-4 flex flex-col justify-between relative">
      {/* Y-axis labels */}
      <div className="absolute left-0 top-6 h-[150px] flex flex-col justify-between pl-2">
        {[...Array(3)].map((_, idx) => (
          <Skeleton key={idx} className="h-3 w-6 rounded bg-[#FEE3DC]" />
        ))}
      </div>

      {/* X-axis line */}
      <div className="absolute bottom-[40px] left-[40px] right-4 h-[1px] bg-[#FEE3DC]" />

      {/* Y-axis line */}
      <div className="absolute left-[40px] bottom-[40px] h-[150px] w-[1px] bg-[#FEE3DC]" />

      {/* X-axis ticks */}
      <div className="absolute w-full left-[40px] right-4 bottom-0 flex justify-between mt-2">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-4 w-8 bg-[#FEE3DC] rounded" />
        ))}
      </div>

      {/* Curved line chart with dots */}
      <svg
        className="absolute left-[40px] bottom-[40px] right-4"
        height="200"
        viewBox="0 0 300 150"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 120 C 50 90, 100 140, 150 70 S 250 40, 300 90"
          fill="none"
          stroke="#FEE3DC"
          strokeWidth="2"
          strokeDashoffset="4"
        />
        {/* Dots on the line */}
        {[
          { x: 0, y: 120 },
          { x: 50, y: 90 },
          { x: 100, y: 140 },
          { x: 150, y: 70 },
          { x: 200, y: 60 },
          { x: 250, y: 40 },
        ].map((point, idx) => (
          <circle
            key={idx}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="#FEE3DC"
            opacity="0.9"
          />
        ))}
      </svg>
    </div>
  )
}

export default LineChartSkeletonLoader
