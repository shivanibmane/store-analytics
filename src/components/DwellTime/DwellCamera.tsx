import { useEffect, useState } from "react";
import AnalyticsHeading from "../Analysis/AnalysisHeading";

import { toast } from 'sonner';
import Dwell_bar from "./Dwell_bar";
import Dwell_Card from "./Dwell_Card";
import Dwell_line from "./Dwell_line";

const DwellCamera: React.FC = () => {
  const [barData, setBarData] = useState([]);
  const [cardData, setCardData] = useState(null);
  const [trendData, setTrendData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const [barRes, cardRes, trendRes] = await Promise.all([
          fetch("http://127.0.0.1:8000/CameraWisedwelltime"),
          fetch("http://127.0.0.1:8000/MaxDwellTime"),
          fetch("http://127.0.0.1:8000/DwellTimeTrend"),
        ]);

        if (!barRes.ok || !cardRes.ok || !trendRes.ok) {
          throw new Error("One or more requests failed");
        }

        if (barRes && cardRes && trendRes) {
          toast.success("Data loaded successfully");
        }
        else {
          toast.warning("Data Not Found");
        }

        const [barJson, cardJson, trendJson] = await Promise.all([
          barRes.json(),
          cardRes.json(),
          trendRes.json(),
        ]);

        setBarData(barJson);
        setCardData({
          name: cardJson.camera_name,
          count: cardJson.duration,
        });
        setTrendData(trendJson);
      } catch (e) {
        toast.error("Failed to load the data. Please check your server or network.");
        console.error("Fetch error:", e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div className="w-full">
      <AnalyticsHeading title="Dwell Timing" />
      <div className="flex flex-col xl:flex-row mb-4 gap-3">
        <Dwell_bar data={barData} isLoading={isLoading} />
        <Dwell_Card data={cardData} isLoading={isLoading} />
      </div>
      <Dwell_line data={trendData} isLoading={isLoading} />
    </div>
  );
};

export default DwellCamera;
