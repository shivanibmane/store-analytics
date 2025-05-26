import CardSkeletonLoader from "../ChartSkeletonLoaders/CardSkeletonLoader"

const InstrsionMaxCameraCountCard = ({ maxIntrusionCamera, isLoading }: any) => {
  if (isLoading) {
    return <CardSkeletonLoader title={"Max Camera Intrusion Count"} />
  }
  console.log(maxIntrusionCamera)
  return (
    <div className="w-full xl:w-[300px] border border-[#F92609] rounded-lg p-6 flex flex-col items-center justify-center min-h-0">
      <h3 className="text-lg font-semibold mb-2 text-[#F92609] text-center">
        Max Camera Intrusion Count
      </h3>
      <p>{maxIntrusionCamera?.camera_name ? maxIntrusionCamera?.camera_name : <span className="text-sm ">Data Not Found</span>}</p>
      <p className="text-2xl font-bold">{maxIntrusionCamera?.count ? maxIntrusionCamera?.count : ""}</p>
    </div>
  )
}

export default InstrsionMaxCameraCountCard
