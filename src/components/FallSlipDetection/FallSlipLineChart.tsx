
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

export const description = "A line chart"

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#F92609",
  },
} satisfies ChartConfig

export function FallSlipLineChart() {
  return (
    <Card className="flex flex-col w-full border-[#F92609]">
      <CardHeader>
        <CardTitle className="text-center text-[#F92609]">Hourly Fall/Slip Alert</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[200px] w-full pr-4 overflow-visible">
          <LineChart
            accessibilityLayer
            data={chartData}
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
              dataKey="month"
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
                dataKey="desktop"
                type="natural"
                stroke="#F92609"
                strokeWidth={2}
                dot={{ fill: "#F92609" }}
                activeDot={{ r: 5 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
