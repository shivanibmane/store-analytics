import { useEffect, useState } from "react";
import Header from "../Header";
import IntrusionAnalysisBarChart from "./IntrusionAnalysisBarChart";
import IntrusionAnalysisLineChart from "./IntrusionAnalysisLineChart";
import IntrusionMaxCameraCountCard from "./InstrsionMaxCameraCountCard";
import { toast } from "sonner";

const IntrusionAnalysis = () => {
  const [cameraWiseIntrusions, setCameraWiseIntrusions] = useState(null);
  const [intrusionTrend, setIntrusionTrend] = useState(null);
  const [maxIntrusionCamera, setMaxIntrusionCamera]: any = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchIntrusionData = async () => {
      try {
        const [cameraWiseRes, maxCameraRes, trendRes] = await Promise.all([
          fetch("http://localhost:8000/camerawise_intrusion"),
          fetch("http://localhost:8000/max_intrusion_camera"),
          fetch("http://localhost:8000/intrusion_trend"),
        ]);

        const cameraWiseData = await cameraWiseRes.json();
        const maxCameraData = await maxCameraRes.json();
        const trendData = await trendRes.json();

        setCameraWiseIntrusions(cameraWiseData);
        setMaxIntrusionCamera(maxCameraData);
        setIntrusionTrend(trendData);
        setIsLoading(false);

        const isCameraDataValid = Array.isArray(cameraWiseData) && cameraWiseData.length > 0;
        const isMaxCameraValid = maxCameraData && Object.keys(maxCameraData).length > 0;
        const isTrendDataValid = Array.isArray(trendData) && trendData.length > 0;

        if (isCameraDataValid && isMaxCameraValid && isTrendDataValid) {
          toast.success("Data loaded successfully");
        } else {
          toast.warning("Data Not Found");
        }
      } catch (error) {
        toast.error("Failed to load data. Please check your server or network.");
        setIsLoading(false);
      }
    };
    fetchIntrusionData();
  }, []);

  return (
    <div className="w-full">
      <Header title="Intrusion Analysis" />
      <div className="px-4 py-3">
        <div className="flex flex-col xl:flex-row mb-4 gap-3">
          <IntrusionAnalysisBarChart
            cameraWiseIntrusions={cameraWiseIntrusions}
            isLoading={isLoading}
          />
          <IntrusionMaxCameraCountCard maxIntrusionCamera={maxIntrusionCamera} isLoading={isLoading} />
        </div>
        <IntrusionAnalysisLineChart intrusionTrend={intrusionTrend} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default IntrusionAnalysis;
