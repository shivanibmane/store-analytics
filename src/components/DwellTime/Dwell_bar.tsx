import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";
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
import BarChartSkeletonLoader from "../ChartSkeletonLoaders/BarChartSkeletonLoader";

interface BarPoint {
  camera_name: string;
  duration: number;
}

const chartConfig: ChartConfig = {
  duration: {
    label: "Duration",
    color: "#F92609",
  },
};

const Dwell_bar: React.FC<{
  data: BarPoint[];
  isLoading: boolean;
}> = ({ data, isLoading }) => {
  console.log(data)
  return (
    <Card className="w-full md:w-full h-[280px] p-2 border-[#F92609]">
      <CardHeader>
        <CardTitle className="text-center text-[#F92609] text-sm">
          Dwell Timing
        </CardTitle>
      </CardHeader>
      <CardContent className="px-2">
        {isLoading ? (
          <BarChartSkeletonLoader />
        ) :
          <ChartContainer config={chartConfig} className="h-[200px] w-full">
            {data?.length > 0 ? <BarChart width={400} height={150} data={data} margin={{ top: 10, bottom: 30 }}>
              <YAxis
                dataKey={"duration"}
                tick={{ fontSize: 10 }}

                allowDecimals={false}
              >
                <Label
                  value="Duration"
                  angle={-90}
                  position="insideLeft"
                  style={{ textAnchor: "middle", fontSize: 12 }}
                />
              </YAxis>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey={"camera_name"}
                tickLine={false}
                tickMargin={4}
                axisLine={false}
                tick={{ fontSize: 10 }}
              >
                <Label
                  value="Camera"
                  position="insideBottom"
                  offset={-5}
                  style={{ textAnchor: "middle", fontSize: 12 }}
                />
              </XAxis>
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Bar dataKey={"duration"} fill="#F92609" radius={6}>
                <LabelList
                  position="top"
                  offset={4}
                  className="fill-foreground"
                  fontSize={10}
                />
              </Bar>
            </BarChart>
              : <div className="flex items-center justify-center h-full">
                <p className="text-sm">Data Not Found</p></div>}
          </ChartContainer>}
      </CardContent>
    </Card>
  );
};

export default Dwell_bar;
