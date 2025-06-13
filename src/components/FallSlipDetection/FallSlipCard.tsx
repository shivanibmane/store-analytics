import CardSkeletonLoader from "../ChartSkeletonLoaders/CardSkeletonLoader";

function FallSlipCard({maxFall,isLoading}:any){
    if(isLoading){
        return <CardSkeletonLoader title={"Camera with Max Fall"} />
    }
    return(
        <div className="w-full xl:w-[300px] border border-[#F92609] rounded-lg p-6 flex flex-col items-center justify-center min-h-0">
            <h3 className="text-lg font-semibold mb-2 text-[#F92609] text-center">
                Camera with Maximum Alerts
            </h3>
            <p>{maxFall?.camera_name ? maxFall?.camera_name : <span className="text-sm">Data not found</span>}</p>
            <p className="text-xl font-bold">{maxFall?.count ? maxFall?.count :""}</p>
        </div>
    )
}

export default FallSlipCard;