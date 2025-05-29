import AnalysisHeading from "../Analysis/AnalysisHeading";
import { BillingCounterBarChart } from "./BillingCounterBarChart";
import TotalBilling from "./TotalBilling";

function BillingCounter(){
    return(
        <div className="w-full">
            <AnalysisHeading title="Billing Counter"/>
            <div className="flex flex-col xl:flex-row mb-4 gap-3">
                <BillingCounterBarChart/>
                <TotalBilling/>
            </div>
        </div>
            
        
    )
}

export default BillingCounter;