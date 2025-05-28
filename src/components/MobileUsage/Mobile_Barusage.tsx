import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";
import BarChartSkeletonLoader from "../ChartSkeletonLoaders/BarChartSkeletonLoader";

const chartConfig = {
  duration: {
    label: "Duration",
    color: "#F92609",
  },
} satisfies ChartConfig;

const Mobile_Barusage = ({ mobileUsageCameraData, isLoading }: any) => {
  return (
    <Card className="w-full md:w-full h-[310px] p-2 border-[#F92609]">
      <CardHeader>
        <CardTitle className="text-center text-[#F92609] text-sm">
          Mobile Usage Camera
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[230px] w-full">
          {!isLoading ? (
            <BarChart
              width={900}
              height={150}
              accessibilityLayer
              data={mobileUsageCameraData}
              margin={{ top: 10 }}
            >
              <YAxis
                dataKey={"duration"}
                tickLine={false}
                axisLine={false}
                label={{ value: "Duration", angle: -90, position: "insideLeft", offset: 4 }}
              />
              <XAxis
                dataKey={"camera_name"}
                tickLine={false}
                axisLine={false}
                tickMargin={2}
                label={{ value: "Camera Name", position: "insideBottom", offset: 0 }}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Bar dataKey="duration" fill="#F92609" radius={6} barSize={50}>
                <LabelList
                  position="top"
                  offset={2}
                  className="fill-foreground"
                  fontSize={10}
                />
              </Bar>
            </BarChart>
          ) : (
            <BarChartSkeletonLoader />
          )}
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default Mobile_Barusage;
