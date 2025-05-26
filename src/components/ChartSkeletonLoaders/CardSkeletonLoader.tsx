import { Skeleton } from '../ui/skeleton'

const CardSkeletonLoader = ({ title }: any) => {
  return (
    <div className="w-full lg:w-[300px] border border-[#F92609] rounded-lg p-6 flex flex-col items-center justify-center min-h-0">
      <h3 className="text-lg font-semibold mb-2 text-[#F92609] text-center">
        {title}
      </h3>

      {/* Skeleton for camera_name */}
      <Skeleton className="h-4 w-2/3 mb-2 bg-[#FEE3DC]" />

      {/* Skeleton for count */}
      <Skeleton className="h-6 w-1/3 bg-[#FEE3DC]" />
    </div>
  )
}

export default CardSkeletonLoader
