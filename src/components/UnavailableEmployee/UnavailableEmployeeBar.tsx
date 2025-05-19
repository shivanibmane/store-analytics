import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface BarPoint {
  camera_name: string;
  duration: number;
}

const chartConfig: ChartConfig = {
  desktop: {
    label: "Unavailability (min)",
    color: "#F92609",
  },
};

const UnavailableEmployeeBar: React.FC = () => {
  const [barData, setBarData] = useState<BarPoint[]>([]);
  const [status, setStatus] = useState<"loading" | "error" | "done">("loading");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          "http://127.0.0.1:8000/camerawiseEmp_unavailability"
        );
        if (!res.ok) throw new Error("network");
        const json: BarPoint[] = await res.json();
        setBarData(json);
        setStatus("done");
      } catch (e) {
        console.error("Bar-chart fetch failed:", e);
        setStatus("error");
      }
    })();
  }, []);

  return (
    <Card className="w-[400px] md:w-full h-[270px] p-2 border-[#F92609]">
      <CardHeader>
        <CardTitle className="text-center text-[#F92609] text-sm">
          Camera-wise Employee Unavailability
        </CardTitle>
      </CardHeader>
      <CardContent className="p-2">
        {status === "loading" && (
          <div className="w-6 h-6 border-2 border-red-600 border-t-transparent rounded-full animate-spin mx-auto" />
        )}
        {status === "error" && (
          <p className="text-center text-xs text-red-500">Failed to load data</p>
        )}
        {status === "done" && barData.length > 0 && (
          <ChartContainer config={chartConfig} className="h-[200px] w-full">
            <BarChart
              width={400}
              height={150}
              data={barData}
              margin={{ top: 10 }}
              accessibilityLayer
            >
              <YAxis
                dataKey="duration"
                tickLine={false}
                tickMargin={4}
                axisLine={false}
                tick={{ fontSize: 10 }}
              />
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="camera_name"
                tickLine={false}
                tickMargin={4}
                axisLine={false}
                tick={{ fontSize: 10 }}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="duration" fill="#F92609" radius={6}>
                <LabelList
                  position="top"
                  offset={4}
                  className="fill-foreground"
                  fontSize={10}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        )}
        {status === "done" && barData.length === 0 && (
          <p className="text-center text-xs text-gray-500">No data available</p>
        )}
      </CardContent>
    </Card>
  );
};

export default UnavailableEmployeeBar;
