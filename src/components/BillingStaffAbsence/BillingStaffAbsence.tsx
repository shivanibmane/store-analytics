import  { useEffect, useState } from "react";
import BillingLine from "./BillingLine";
import AnalysisHeading from "../Analysis/AnalysisHeading";
import BillingStaffBar from "./BillingStaffBar";
import { toast } from 'sonner';
// Define the shape of your data
interface TrendPoints {
  time: string;
  duration: number;
}

interface BarDataPoint {
  staff: string;
  absentDays: number;
}

const BillingStaffAbsence = () => {
  
  const [barData, setBarData] = useState<BarDataPoint[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [TrendData,setTrendData]=useState<TrendPoints[]>([]);

useEffect(() => {
    (async () => {
      try {
        const [barRes,  trendRes] = await Promise.all([
          fetch("http://127.0.0.1:8000/CameraWiseBilling"),
          fetch("http://127.0.0.1:8000/BillingTrend"),
        ]);

        if (!barRes.ok || !trendRes.ok) {
          throw new Error("One or more requests failed");
        }

        if(barRes  && trendRes){
          toast.success("Data loaded successfully");
        }
        else{
             toast.warning("Data Not Found");
        }

        const [barJson,  trendJson] = await Promise.all([
          barRes.json(),
          trendRes.json(),
        ]);
       
        setBarData(barJson);
        setTrendData(trendJson);

        console.log("the trend data",TrendData);
        console.log("the bar data:",barData);
      } catch (e) {
        toast.error("Failed to fetch Unavailable Employee data.");
        console.error("Fetch error:", e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div className="w-full">
      <AnalysisHeading title="Billing Staff Absence" />
      <div className="flex flex-col mb-4 gap-3">
        <BillingStaffBar data={barData} isLoading={isLoading} />
        <BillingLine data={TrendData} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default BillingStaffAbsence;
