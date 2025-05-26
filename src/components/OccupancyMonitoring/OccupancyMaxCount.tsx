import CardSkeletonLoader from "../ChartSkeletonLoaders/CardSkeletonLoader";

const OccupancyMaxCount=({maxOccupancy,isLoading}:any)=>{
    if (isLoading) {
        return <CardSkeletonLoader title={"Max Camera Intrusion Count"} />
    }
    return(
        <div className="w-full xl:w-[300px] border border-[#F92609] rounded-lg p-6 flex flex-col items-center justify-center min-h-0">
            <h3 className="text-lg font-semibold mb-2 text-[#F92609] text-center">
                Maximum Occupancy Count
            </h3>
            <p>{maxOccupancy?.camera_name ? maxOccupancy?.camera_name : <span className="text-sm ">Data Not Found</span>}</p> 
            <p className="text-xl font-bold">{maxOccupancy?.max_count ? maxOccupancy?.max_count : ""}</p>       
    </div>
    )

}
export default OccupancyMaxCount;