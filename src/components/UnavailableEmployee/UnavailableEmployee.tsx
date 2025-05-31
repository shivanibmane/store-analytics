import { useEffect, useState } from "react";
import AnalyticsHeading from "../Analysis/AnalysisHeading";
import UnavailableEmployeeBar from "./UnavailableEmployeeBar";
import UnavailableEmployeeCard from "./UnavailableEmployeeCard";
import UnavailableEmployeeTrends from "./UnavailableEmployeetrends";
import { toast } from 'sonner';

const UnavailableEmployee: React.FC = () => {
  const [barData, setBarData] = useState([]);
  const [cardData, setCardData]: any = useState(null);
  const [trendData, setTrendData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const [barRes, cardRes, trendRes] = await Promise.all([
          fetch("http://127.0.0.1:8000/camerawiseEmp_unavailability"),
          fetch("http://127.0.0.1:8000/MostEmp_unavailability"),
          fetch("http://127.0.0.1:8000/Emp_unavailabilityTrend"),
        ]);

        if (!barRes.ok || !cardRes.ok || !trendRes.ok) {
          throw new Error("One or more requests failed");
        }
        const [barJson, cardJson, trendJson] = await Promise.all([
          barRes.json(),
          cardRes.json(),
          trendRes.json(),
        ]);

        setBarData(barJson);
        setCardData({
          name: cardJson?.camera_name,
          count: cardJson?.duration,
        });
        setTrendData(trendJson);
        console.log()

        const isValidBarData = Array.isArray(barJson) && barJson.length > 0
        const isValidCardrData = cardJson && Object.keys(cardJson).length > 0
        const isValidTrendData = Array.isArray(trendJson) && trendJson.length > 0
        console.log(isValidBarData, isValidCardrData, isValidTrendData)

        if (isValidBarData && isValidCardrData && isValidTrendData) {
          toast.success("Data loaded successfully");
        }
        else {
          toast.warning("Data Not Found");
        }
      } catch (e) {
        toast.error("Failed to load data. Please check you server or network");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div className="w-full">
      <AnalyticsHeading title="Unavailable Employee Analysis" />
      <div className="flex flex-col xl:flex-row mb-4 gap-3">
        <UnavailableEmployeeBar data={barData} isLoading={isLoading} />
        <UnavailableEmployeeCard data={cardData} isLoading={isLoading} />
      </div>
      <UnavailableEmployeeTrends data={trendData} isLoading={isLoading} />
    </div>
  );
};

export default UnavailableEmployee;
