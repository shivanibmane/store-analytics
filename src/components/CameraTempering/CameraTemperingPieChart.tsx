import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";



const CameraTemperingPieChart = ({ cameraWiseTepmering, isLoading }: any) => {
  function generateRedShade(index: number, total: number) {
    if (total === 1) {
      return "#F92609";
    }
    const lightness = 90 - (index * (60 / total));
    return `hsl(0, 100%, ${lightness}%)`;
  }

  const totalItems = cameraWiseTepmering?.length;

  const formattedData = cameraWiseTepmering?.map((item: any, index: any) => ({
    camera: item?.camera_name,
    total: item?.total,
    fill: generateRedShade(index, totalItems),
  }));

  const chartConfig: ChartConfig = (formattedData || []).reduce((config: any, item: any) => {
    if (item.camera) {
      config[item.camera] = {
        label: item.camera,
        color: "#F92609", // You can make this dynamic if needed
      };
    }
    return config;
  }, {} as ChartConfig);

  return (
    <Card className="w-full h-[310px] p-2 border-[#F92609]">
      <CardHeader>
        <CardTitle className="text-center text-[#F92609]">
          Camerawise Total Tampering
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="w-full h-[200px] pr-4"
        >
          {!isLoading ? <PieChart >
            <ChartTooltip
              content={<ChartTooltipContent nameKey="camera" />}
            />
            <Pie data={formattedData} dataKey="total" outerRadius={100}  >
            </Pie>
          </PieChart> : <div className=" text-lg flex items-center justify-center"><p>Loading...</p></div>}
        </ChartContainer>
      </CardContent>
    </Card >
  );
};

export default CameraTemperingPieChart;
