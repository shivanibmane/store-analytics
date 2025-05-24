
"use client"

//import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

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
const chartData = [
  { camera: "Camera A", occupancy: 41 },
  { camera: "Camera B", occupancy: 30 },
  { camera: "Camera C", occupancy: 23 },
  { camera: "Camera D", occupancy: 37 },
  { camera: "Camera E", occupancy: 49 },
  { camera: "Camera F", occupancy: 40 },
]

const chartConfig = {
  occupancy: {
    label: "occupancy",
    color: "#F92609",
  },
} satisfies ChartConfig

export function OccupancyMonitoringBarChart() {
  return (
    <Card className="w-full  h-[300px] p-2 border-[#F92609]">
      <CardHeader>
        <CardTitle className="text-center text-[#F92609] text-sm">Occupancy</CardTitle>
      </CardHeader>
      <CardContent className="p-2">
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="camera"
              tickLine={false}
              tickMargin={4}
              axisLine={false}
              tick={{ fontSize: 12 }}
            />

            <YAxis
              domain={[0, 50]}
              ticks={[0, 10, 20, 30, 40, 50]}
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="occupancy" fill="#F92609" radius={6} barSize={80} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
