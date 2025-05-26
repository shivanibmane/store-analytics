import Mobile_Barusage from './Mobile_Barusage'
import Mobile_Lineusage from './Mobile_Lineusage'
import Header from '../Header'
import { toast } from 'sonner';
import { useEffect, useState } from 'react';

const Mobile_usage = () => {
  const [mobileUsageCameraData, setMobileUsageCameraData] = useState(null);
  const [mobileUasgeTrendData, setMobileUasgeTrendData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDataForMobile = async () => {
      try {
        const [mobileUsageCameraRes, mobileUsageCameratrendRes] = await Promise.all([
          fetch("http://localhost:8000/CamerawiseMobileUsage"),
          fetch("http://localhost:8000/MobileUsageTrend"),
        ]);

        const cameraData = await mobileUsageCameraRes.json();
        const trendData = await mobileUsageCameratrendRes.json();

        setMobileUsageCameraData(cameraData);
        setMobileUasgeTrendData(trendData);
        setIsLoading(false);

        const isCameraValid = Array.isArray(cameraData) && cameraData.length > 0;
        const isTrendValid = Array.isArray(trendData) && trendData.length > 0;

        if (isCameraValid && isTrendValid) {
          toast.success("Data loaded successfully");
        } else {
          toast.warning("Data not found");
        }
      } catch (error) {
        toast.error("Failed to load data. Please check your server or network.");
        setIsLoading(false);
      }
    };
    fetchDataForMobile();
  }, []);

  return (
    <div className="w-full">
      <Header title="Mobile usage" />
      <div className="flex flex-col justify-center items-center gap-6 w-full px-4 mt-6">
        <Mobile_Barusage mobileUsageCameraData={mobileUsageCameraData} isLoading={isLoading} />
        <Mobile_Lineusage mobileUasgeTrendData={mobileUasgeTrendData} isLoading={isLoading} />
      </div>
    </div>
  )
}

export default Mobile_usage
