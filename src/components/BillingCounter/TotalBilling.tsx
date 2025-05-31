import CardSkeletonLoader from "../ChartSkeletonLoaders/CardSkeletonLoader";

const TotalBilling = ({ totalBillingCount, isLoading }: any) => {
    console.log(totalBillingCount);
    if (isLoading) {
        return <CardSkeletonLoader title={"Total Billing Count"} />
    }

    return (
        <div className="w-full xl:w-[300px] border border-[#F92609] rounded-lg p-6 flex flex-col items-center justify-center min-h-0">
            <h3 className="text-lg font-semibold mb-2 text-[#F92609]">
                Total Billing Count
            </h3>
            <p className="text-xl font-bold text-black">{totalBillingCount?.count ? totalBillingCount?.count : <span className="text-sm font-normal">Data Not Found</span>}</p>
        </div>
    )
}

export default TotalBilling;
