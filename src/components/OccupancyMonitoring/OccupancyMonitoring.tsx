import { useEffect, useState } from "react";
import OccupancyMaxCount from "./OccupancyMaxCount";
import { OccupancyMonitoringBarChart } from "./OccupancyMonitoringBarChart";
import { OccupancyMonitoringTrendChart } from "./OccupancyMonitoringTrendChart";
import { toast } from "sonner";
import AnalysisHeading from "../Analysis/AnalysisHeading";


function OccupancyMonitoring() {

    const [camerawiseOccupancy, setCamerawiseOccupancy] = useState(null);
    const [maxOccupancy, setMaxOccupancy] = useState(null);
    const [occupancyTrend, setOccupancyTrend]: any = useState(null);
    const [isLoading, setIsLoading] = useState(true); //for loaders

    useEffect(() => {
        const fetchOccupancyData = async () => {
            try {
                const [camerawiseoccupancyres, maxres, trendres] = await Promise.all([
                    fetch(`http://localhost:8000/CamerawiseOccupancy`),
                    fetch(`http://localhost:8000/Maxoccupancy`),
                    fetch(`http://localhost:8000/OccupancyTrend`)
                ])

                const camerawiseOccupancyData = await camerawiseoccupancyres.json();
                const maxOccupancyData = await maxres.json();
                const trendOccupancyData = await trendres.json();

                setCamerawiseOccupancy(camerawiseOccupancyData);
                setMaxOccupancy(maxOccupancyData);
                setOccupancyTrend(trendOccupancyData);

                const isCameraOccupancyValid = Array.isArray(camerawiseOccupancyData) && camerawiseOccupancyData.length > 0;
                const isMaxOccupancyValid = maxOccupancyData && Object.keys(maxOccupancyData).length > 0;
                const isTrendOccupancyValid = Array.isArray(trendOccupancyData) && trendOccupancyData.length > 0;

                if (isCameraOccupancyValid && isMaxOccupancyValid && isTrendOccupancyValid) {
                    toast.success("Data loaded successfully");
                } else {
                    toast.warning("Data Not Found");
                }
            }
            catch (error) {
                toast.error("Failed to load data. Please check your server or network.");
            }
            finally {
                setIsLoading(false);
            }
        }
        fetchOccupancyData();
    }, [])

    return (
        <div className="w-full">
            <AnalysisHeading title="Occupancy Monitoring" />
            <div className="flex flex-col xl:flex-row mb-4 gap-3">
                <OccupancyMonitoringBarChart
                    cameraOccupancy={camerawiseOccupancy}
                    isLoading={isLoading}
                />
                <OccupancyMaxCount maxOccupancy={maxOccupancy} isLoading={isLoading} />
            </div>
            <OccupancyMonitoringTrendChart occupancyTrend={occupancyTrend} isLoading={isLoading} />
        </div>
    )

}

export default OccupancyMonitoring;