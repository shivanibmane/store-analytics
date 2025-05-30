
"use client"

import { CartesianGrid, Label, Line, LineChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import LineChartSkeletonLoader from "../ChartSkeletonLoaders/LineChartSkeletonLoader"
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#F92609",
  },
} satisfies ChartConfig

export function BillingCounterTrendChart({billingTrend,isLoading}:any) {
  return (
    <Card className="flex flex-col w-full border-[#F92609]">
      <CardHeader>
        <CardTitle className="text-center text-[#F92609]">Hourly Billings Trend Chart</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? <LineChartSkeletonLoader/> :
          <ChartContainer config={chartConfig} className="h-[200px] w-full pr-4 overflow-visible">
            {Array.isArray(billingTrend) && billingTrend.length >0 ?
              <LineChart
                accessibilityLayer
                data={billingTrend}
                margin={{
                  top:10,
                  left: 12,
                  right: 40,
                  bottom:30
                }}
              >
                <CartesianGrid vertical={false} />
                <YAxis tickLine={false} axisLine={false} allowDecimals={false}>
                  <Label
                    value="Count"
                    angle={-90}
                    position="insideLeft"
                    style={{ textAnchor: "middle", fontSize: 12 }}
                  />
                </YAxis>
                <XAxis
                  dataKey={"time"}
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}>
                    <Label
                    value="Time"
                    position="insideBottom"
                    offset={-20}
                    style={{ textAnchor: "middle", fontSize: 12 }}
                  />
                  </XAxis>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Line
                    dataKey={"count"}
                    type="natural"
                    stroke="#F92609"
                    strokeWidth={2}
                    dot={{ fill: "#F92609" }}
                    activeDot={{ r: 5 }}
                  />
              </LineChart> : <div className="flex items-center justify-center h-full">
                <p className="text-sm">Data Not Found</p></div>}
          </ChartContainer>
        }
      </CardContent>
    </Card>
  )
}
