import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis
} from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";

import LineChartSkeletonLoader from "../ChartSkeletonLoaders/LineChartSkeletonLoader";

const chartConfig = {
  duration: {
    label: "Duration",
    color: "#F92609",
  },
} satisfies ChartConfig;

const Mobile_Lineusage = ({ mobileUasgeTrendData, isLoading }: any) => {
  return (
    <Card className="w-full flex flex-col border-[#F92609]">
      <CardHeader>
        <CardTitle className="text-center text-[#F92609]">
          Mobile Usage Trend
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[200px] w-full p-2">
          {!isLoading ? (
            <LineChart data={mobileUasgeTrendData}>
              <CartesianGrid vertical={false} />
              <YAxis
                dataKey={"duration"}
                tickLine={false}
                axisLine={false}
                label={{ value: "Duration", angle: -90, position: "insideLeft", offset: 0 }}
              />
              <XAxis
                dataKey={"time"}
                tickLine={false}
                axisLine={false}
                tickMargin={2}
                label={{ value: "Hours", position: "insideBottom", offset: -5 }}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line
                dataKey={"duration"}
                type="natural"
                stroke="#F92609"
                strokeWidth={2}
                dot={{ fill: "#F92609" }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          ) : (
            <LineChartSkeletonLoader />
          )}
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default Mobile_Lineusage;