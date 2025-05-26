import { useEffect, useState } from "react";
import Header from "../Header"
import IntrusionAnalysisBarChart from "./IntrusionAnalysisBarChart"
import IntrusionAnalysisLineChart from "./IntrusionAnalysisLineChart"

const IntrusionAnalysis = () => {
  const [cameraWiseIntrusions, setCameraWiseIntrusions] = useState([]);
  const [intrusionTrend, setIntrusionTrend] = useState([]);
  const [maxIntrusionCamera, setMaxIntrusionCamera]: any = useState(null);

  useEffect(() => {
    const fetchIntrusionData = async () => {
      try {
        const [cameraWiseRes, maxCameraRes, trendRes] = await Promise.all([
          fetch("http://localhost:8000/camerawise_intrusion"),
          fetch("http://localhost:8000/max_intrusion_camera"),
          fetch("http://localhost:8000/intrusion_trend"),
        ])
        const cameraWiseData = await cameraWiseRes.json();
        const maxCameraData = await maxCameraRes.json();
        const trendData = await trendRes.json();
        setCameraWiseIntrusions(cameraWiseData);
        setMaxIntrusionCamera(maxCameraData);
        setIntrusionTrend(trendData);
      } catch (error) {
        console.error("Error fetching intrusion data:", error);
      }
    };
    fetchIntrusionData();
  }, []);

  return (
    <div className="w-full">
      <Header title="Intrusion Analysis" />
      <div className="px-4 py-3 ">
        <div className="flex flex-col xl:flex-row mb-4 gap-3">
          <IntrusionAnalysisBarChart cameraWiseIntrusions={cameraWiseIntrusions} />
          <div className="w-full lg:w-[300px] border border-[#F92609] rounded-lg p-6 flex flex-col items-center justify-center min-h-0">
            <h3 className="text-lg font-semibold mb-2 text-[#F92609] text-center">Max Camera Intrusion Count</h3>
            <p>{maxIntrusionCamera?.camera_name}</p>
            <p className="text-2xl font-bold ">{maxIntrusionCamera?.count}</p>
          </div>
        </div>
        <IntrusionAnalysisLineChart intrusionTrend={intrusionTrend} />
      </div>
    </div>
  )
}

export default IntrusionAnalysis
