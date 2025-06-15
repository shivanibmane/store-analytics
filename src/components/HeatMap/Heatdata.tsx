import { useEffect, useState } from 'react';
import HeatMapChart from './HeatMap';
import HeatCard from './HeatCard';
import { toast } from 'sonner';
import AnalysisHeading from '../Analysis/AnalysisHeading';
import HeatMapSkeleton from './Skeleton/HeatMapSkeleton';
import HeatCardSkeleton from './Skeleton/HeatCardSkeleton';
interface RawDataPoint {
  camera_name: string;
  customer_count: number;
}

const Heatdata = () => {
  const [heatMapData, setHeatMapData] = useState<RawDataPoint[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/camerawise_customer_count");
        if (!res.ok) throw new Error("Failed to fetch");
        const mapJson: RawDataPoint[] = await res.json();
        console.log("the heat map data", mapJson);
        setHeatMapData(mapJson);
        toast.success("Heatmap data loaded successfully");
      } catch (error) {
        console.error("Fetch error:", error);
        toast.error("Failed to load heatmap data");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div className="w-full">
      <AnalysisHeading title="CustomerStaff" />
      <div className="flex flex-col xl:flex-row gap-6 p-4 w-full">
        <div className="w-full xl:w-3/4">
          {isLoading ? <HeatMapSkeleton /> : <HeatMapChart data={heatMapData} isLoading={isLoading} />}
        </div>
        <div className="w-full xl:w-1/4 flex justify-center">
          {isLoading ? <HeatCardSkeleton /> : <HeatCard />}
        </div>
      </div>
    </div>
  );
};

export default Heatdata;
