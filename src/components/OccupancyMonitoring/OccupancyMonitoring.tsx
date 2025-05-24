import Header from "../Header";
import OccupancyMaxCount from "./OccupancyMaxCount";
import { OccupancyMonitoringBarChart } from "./OccupancyMonitoringBarChart";
import { OccupancyMonitoringTrendChart } from "./OccupancyMonitoringTrendChart";


function OccupancyMonitoring(){

    return(
        <div className="w-full">
            <Header title="Occupancy Monitoring"/>
            <div className="px-4 py-3">
                <div className="flex flex-col xl:flex-row mb-4 gap-3">
                    <OccupancyMonitoringBarChart/>
                    <OccupancyMaxCount/>
                </div>
                <OccupancyMonitoringTrendChart/>
            </div>
        </div>
    )

}

export default OccupancyMonitoring;