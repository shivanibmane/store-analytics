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


  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          "http://127.0.0.1:8000/camerawiseEmp_unavailability"
        );
        if (!res.ok) throw new Error("network");
        const json: BarPoint[] = await res.json();
        console.log(json);
        setBarData(json);
     
      } catch (e) {
        console.error("Bar-chart fetch failed:", e);
      }
    })();
  }, []);

  return (
      <Card className="w-[400px] md:w-full h-[270px] p-2 border-[#F92609]">
          <CardHeader className="">
            <CardTitle className="text-center text-[#F92609] text-sm">Unavailable Employees </CardTitle>
          </CardHeader>
          <CardContent className="p-2">
            <ChartContainer config={chartConfig} className="h-[200px] w-full">
              <BarChart
                width={400}
                height={150}
                accessibilityLayer
                data={barData}
                margin={{ top: 10 }}
              >
                <YAxis
                  dataKey={"duration"}
                  tickLine={false}
                  tickMargin={4}
                  axisLine={false}
                  tick={{ fontSize: 10 }}
                />
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey={"camera_name"}
                  tickLine={false}
                  tickMargin={4}
                  axisLine={false}
                  tick={{ fontSize: 10 }}
                />
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
            </ChartContainer>
          </CardContent>
        </Card>
  );
};

export default UnavailableEmployeeBar;
