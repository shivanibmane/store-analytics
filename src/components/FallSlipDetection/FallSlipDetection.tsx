import { useEffect, useState } from "react";
import AnalysisHeading from "../Analysis/AnalysisHeading";
import { FallSlipPieChart } from "./FallSlipPieChart";
import FallSlipCard from "./FallSlipCard";
import { FallSlipLineChart } from "./FallSlipLineChart";
import { toast } from "sonner";

function FallSlipDetection() {

    const [cameraWiseFall, setCameraWiseFall] = useState(null);
    const [maxFallCamera, setMaxFallCamera] = useState(null);
    const [fallTrend, setFallTrend] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [cameraWiseFallRes, maxFallRes, fallTrendRes] = await Promise.all([
                    fetch(`http://127.0.0.1:8000/camerawise_fall`),
                    fetch(`http://127.0.0.1:8000/max_fall_camera`),
                    fetch(`http://127.0.0.1:8000/fall_trend`)
                ])

                const cameraWiseFallData = await cameraWiseFallRes.json();
                const maxFallData = await maxFallRes.json();
                const fallTrendData = await fallTrendRes.json();

                setCameraWiseFall(cameraWiseFallData);
                setMaxFallCamera(maxFallData);
                setFallTrend(fallTrendData);

                const isCameraWiseFallDataValid = Array.isArray(cameraWiseFallData) && cameraWiseFallData.length > 0;
                const isMaxFallDataValid = maxFallData && Object.keys(maxFallData).length > 0;
                const isFallTrendValid = Array.isArray(fallTrendData) && fallTrendData.length > 0;

                if (isCameraWiseFallDataValid && isMaxFallDataValid && isFallTrendValid) {
                    toast.success("Data loaded Sucessfully");
                }
                else {
                    toast.warning("Data not found");
                }
            }
            catch (error) {
                toast.error("Failed to load data. Please check your server or network");
            }
            finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [])

    return (
        <div className="w-full">
            <AnalysisHeading title="Fall/Slip Detection" />
            <div className="flex flex-col xl:flex-row mb-4 mt-1 gap-3">
                <FallSlipPieChart cameraWiseFall={cameraWiseFall} isLoading={isLoading} />
                <FallSlipCard maxFall={maxFallCamera} isLoading={isLoading} />
            </div>
            <FallSlipLineChart fallTrend={fallTrend} isLoading={isLoading} />
        </div>
    )
}

export default FallSlipDetection;