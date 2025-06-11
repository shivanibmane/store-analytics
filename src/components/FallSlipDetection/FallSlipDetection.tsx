import { useEffect, useState } from "react";
import AnalysisHeading from "../Analysis/AnalysisHeading";
import { FallSlipPieChart } from "./FallSlipPieChart";
import FallSlipCard from "./FallSlipCard";
import { FallSlipLineChart } from "./FallSlipLineChart";

function FallSlipDetection(){

    const [isLoading,setIsLoading]=useState(true);

    useEffect(()=>{
        setIsLoading(false);
    },[])

    return(
        <div className="w-full">
            <AnalysisHeading title="Fall/Slip Detection" />
            <div className="flex flex-col xl:flex-row mb-4 gap-3">
                <FallSlipPieChart isLoading={isLoading} />
                <FallSlipCard />
            </div>
            <FallSlipLineChart/>
        </div>
    )
}

export default FallSlipDetection;