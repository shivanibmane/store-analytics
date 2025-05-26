import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

const chartConfig = {
  duration: {
    label: "Duration",
    color: "#F92609",
  },
} satisfies ChartConfig

const Mobile_Barusage = ({ mobileUsageCameraData, isLoading }: any) => {
  return (
    <Card className="w-full md:w-full h-[280px] p-2 border-[#F92609]">
      <CardHeader>
        <CardTitle className="text-center text-[#F92609] text-sm">
          Mobile Usage Camera
        </CardTitle>
      </CardHeader>
      <CardContent className="p-2">
        <ChartContainer config={chartConfig} className="h-[200px] w-full">{!isLoading ?
          <BarChart
            width={900}
            height={150}
            accessibilityLayer
            data={mobileUsageCameraData}
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
            <Bar dataKey="duration" fill="#F92609" radius={6}>
              <LabelList
                position="top"
                offset={4}
                className="fill-foreground"
                fontSize={10}
              />
            </Bar>
          </BarChart> : <div className="flex text-lg items-center justify-center h-full"><p>Loading...</p></div>}
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default Mobile_Barusage
