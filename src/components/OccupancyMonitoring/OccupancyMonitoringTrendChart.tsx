
"use client"

//import { TrendingUp } from "lucide-react"
import { CartesianGrid, Label, Line, LineChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  //CardDescription,
  //CardFooter,
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
// const chartData = [
//   { hour: "10AM", average_occupancy: 186 },
//   { hour: "11AM", average_occupancy: 305 },
//   { hour: "12PM", average_occupancy: 237 },
//   { hour: "1PM", average_occupancy: 73 },
//   { hour: "2PM", average_occupancy: 209 },
//   { hour: "3PM", average_occupancy: 214 },
// ]

const chartConfig = {
  average_occupancy: {
    label: "average_occupancy",
    color: "#F92609",
  },
} satisfies ChartConfig

export function OccupancyMonitoringTrendChart({occupancyTrend,isLoading}:any) {
  return (
    <Card className="flex flex-col w-full border-[#F92609]">
      <CardHeader>
        <CardTitle className="text-center text-[#F92609]">Occupancy Monitoring Trend</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? <LineChartSkeletonLoader/> :
        <ChartContainer config={chartConfig} className="h-[200px] w-full pr-4">
          {Array.isArray(occupancyTrend) && occupancyTrend.length>0 ? 
          <LineChart
            accessibilityLayer
            data={occupancyTrend}
            margin={{
              left: 12,
              right: 12,
              bottom:30
            }}
          >
            <CartesianGrid vertical={false} />
            <YAxis tickLine={false} axisLine={false}>
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
          </LineChart>: <div className="flex items-center justify-center h-full">
            <p className="text-sm">Data Not Found</p></div>}
        </ChartContainer>}
      </CardContent>
    </Card>
  )
}
