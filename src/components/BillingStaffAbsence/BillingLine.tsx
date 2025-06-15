import React from "react";
import {
  CartesianGrid,
  Label,
  Line,
  LineChart,
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
import LineChartSkeletonLoader from "../ChartSkeletonLoaders/LineChartSkeletonLoader";

interface TrendPoints {
  time: string;
  duration: number;
}

interface BillingLineProps {
  data: TrendPoints[];
  isLoading: boolean;
}

const chartConfig: ChartConfig = {
  duration: {
    label: "Duration",
    color: "#F92609",
  },
};

const BillingLine: React.FC<BillingLineProps> = ({ data, isLoading }) => {
  const roundedData = data.map((item) => ({
    ...item,
    duration: Math.round(item.duration),
  }));

  return (
    <Card className="flex flex-col w-full border-[#F92609]">
      <CardHeader>
        <CardTitle className="text-center text-[#F92609]">
          Billing Staff Absence Trend
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[200px] w-full pr-4">
          {isLoading ? (
            <LineChartSkeletonLoader />
          ) : (
            <LineChart
              data={roundedData}
              margin={{ top: 20, right: 20, bottom: 5, left: 0 }}
              width={500}
              height={200}
            >
              <CartesianGrid vertical={false} />
              <YAxis
                tickLine={false}
                axisLine={false}
                domain={['auto', 'dataMax + 1']}
                tickFormatter={(value) =>
                  Number.isInteger(value) ? value : ""
                }
              >
                <Label
                  value="Count"
                  angle={-90}
                  position="insideLeft"
                  style={{ textAnchor: "middle", fontSize: 12 }}
                />
              </YAxis>
              <XAxis
                dataKey="time"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              >
                <Label
                  value="Time"
                  position="insideBottom"
                  offset={-4}
                  style={{ textAnchor: "middle", fontSize: 12 }}
                />
              </XAxis>
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line
                dataKey="duration"
                type="monotone"
                stroke="#F92609"
                strokeWidth={2}
                dot={{ fill: "#F92609" }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          )}
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default BillingLine;
