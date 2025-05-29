
"use client"

import { Bar, BarChart, CartesianGrid, Label, XAxis,YAxis } from "recharts"

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
  { camera: "Camera A", count: 41 },
  { camera: "Camera B", count: 35 },
  { camera: "Camera C", count: 33 },
  { camera: "Camera D", count: 40 },
  { camera: "Camera E", count: 29 },
  { camera: "Camera F", count: 24 },
]

const chartConfig = {
  count: {
    label: "count",
    color: "#F92609",
  },
} satisfies ChartConfig

export function BillingCounterBarChart() {
  return (
    <Card className="w-full h-[270px] p-2 border-[#F92609]">
      <CardHeader>
        <CardTitle className="text-center text-sm text-[#F92609]">Camerawise Billings</CardTitle>
      </CardHeader>
      <CardContent className="p-2">
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <BarChart accessibilityLayer data={chartData} 
                margin={{
                    top:10,
                    bottom:20,
                    left:0,
                    right:0
                }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="camera"
              tickLine={false}
              tickMargin={4}
              axisLine={false}
              tick={{fontSize:12}}>
                <Label
                    value="Camera Name"
                    position="bottom"
                    style={{textAnchor:"middle", fontSize:12}}
                />
              </XAxis>
              <YAxis
                dataKey="count"
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              >
                    <Label
                    value="Count"
                    angle={-90}
                    position="insideLeft"
                    style={{ textAnchor: "middle", fontSize: 12 }}
                  />
                </YAxis>        
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="count" fill="#F92609" radius={6} barSize={80} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
