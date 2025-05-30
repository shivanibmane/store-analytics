import { useEffect, useState } from "react";
import AnalysisHeading from "../Analysis/AnalysisHeading";
import { BillingCounterBarChart } from "./BillingCounterBarChart";
import TotalBilling from "./TotalBilling";
import { toast } from "sonner";
import { BillingCounterTrendChart } from "./BillingCounterTrendChart";

function BillingCounter() {

    const [camerawiseBilling, setCameraWiseBilling] = useState(null);
    const [totalBillingCount, setTotalBillingCount] = useState(null);
    const [billingCounterTrend, setBillingCounterTrend] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchBillingData = async () => {
            try {
                const [cameraWiseBillingRes, totalBillingRes, trendRes] = await Promise.all([
                    fetch(`http://localhost:8000/CameraWisebilling`),
                    fetch(`http://localhost:8000/Totalbillingcount`),
                    fetch(`http://localhost:8000/BillingCounterTrend`)
                ])

                const cameraWiseBillingData = await cameraWiseBillingRes.json();
                const totalBillingData = await totalBillingRes.json();
                const billingTrendData = await trendRes.json();

                setCameraWiseBilling(cameraWiseBillingData);
                setTotalBillingCount(totalBillingData);
                setBillingCounterTrend(billingTrendData);

                const isCameraWiseDataValid = Array.isArray(cameraWiseBillingData) && cameraWiseBillingData.length > 0;
                const isTotalBillingValid = totalBillingData && Object.keys(totalBillingData).length > 0;
                const isTrendDataValid = Array.isArray(billingTrendData) && billingTrendData.length > 0;

                if (isCameraWiseDataValid && isTotalBillingValid && isTrendDataValid) {
                    toast.success("Data loaded successfully");
                }
                else {
                    toast.warning("Data not Found");
                }
            }
            catch (error) {
                toast.error("Failed to load data. Please check your server or network.")
            }
            finally {
                setIsLoading(false);
            }
        }
        fetchBillingData();
    }, [])

    return (
        <div className="w-full">
            <AnalysisHeading title="Billing Counter" />
            <div className="flex flex-col xl:flex-row mb-4 gap-3">
                <BillingCounterBarChart
                    cameraWiseBilling={camerawiseBilling}
                    isLoading={isLoading} />
                <TotalBilling
                    totalBillingCount={totalBillingCount}
                    isLoading={isLoading} />
            </div>
            <BillingCounterTrendChart billingTrend={billingCounterTrend} isLoading={isLoading} />
        </div>
    )
}

export default BillingCounter;