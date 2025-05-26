import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

// Sample intrusion data
const cameraWiseIntrusions = [
  { camera_name: "Gate A", count: 12 },
  { camera_name: "Lobby", count: 8 },
  { camera_name: "Parking Lot", count: 15 },
  { camera_name: "Server Room", count: 5 },
  { camera_name: "Back Entrance", count: 10 }
]

const chartConfig = {
  instrusion: {
    label: "Intrusions",
    color: "#F92609",
  },
} satisfies ChartConfig

const Mobile_Barusage = () => {
  return (
    <Card className="w-full max-w-[1000px] md:w-full h-[270px] p-2 border-[#F92609]">
      <CardHeader>
        <CardTitle className="text-center text-[#F92609] text-sm">
            BarChart Analysis
        </CardTitle>
      </CardHeader>
      <CardContent className="p-2">
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <BarChart
            width={900}
            height={150}
            accessibilityLayer
            data={cameraWiseIntrusions}
            margin={{ top: 10 }}
          >
            <YAxis
              dataKey={"count"}
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
            <Bar dataKey="count" fill="#F92609" radius={6}>
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
  )
}

export default Mobile_Barusage
