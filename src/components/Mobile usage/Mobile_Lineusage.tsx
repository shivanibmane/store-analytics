import React from "react"
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis
} from "recharts"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart"

// Chart configuration
const chartConfig = {
  intrusions: {
    label: "Intrusions",
    color: "#F92609",
  },
} satisfies ChartConfig;

// Sample data with hours and time
const sampleIntrusionTrend = [
  { hour: "01:00", time: 5 },
  { hour: "02:00", time: 8 },
  { hour: "03:00", time: 6 },
  { hour: "04:00", time: 10 },
  { hour: "05:00", time: 7 },
  { hour: "06:00", time: 12 },
]

const Mobile_Lineusage = () => {
  return (
    <Card className="flex flex-col w-full border-[#F92609]">
      <CardHeader>
        <CardTitle className="text-center text-[#F92609]">
         Trend  Analysis 
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[200px] w-full pr-2">
          <LineChart data={sampleIntrusionTrend}>
            <CartesianGrid vertical={false} />
            <YAxis
              dataKey={"time"}
              tickLine={false}
              axisLine={false}
              label={{ value: "Time", angle: -90, position: "insideLeft", offset: 0 }}
            />
            <XAxis
              dataKey={"hour"}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              label={{ value: "Hours", position: "insideBottom", offset: -5 }}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey={"time"}
              type="natural"
              stroke="#F92609"
              strokeWidth={2}
              dot={{ fill: "#F92609" }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <p className="font-semibold">Total Trend Analysis</p>
      </CardFooter>
    </Card>
  )
}

export default Mobile_Lineusage
