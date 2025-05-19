import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

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

const chartConfig = {
  instrusion: {
    label: "Intrusions",
    color: "#F92609",
  },
} satisfies ChartConfig

const IntrusionAnalysisBarChart = ({ cameraWiseIntrusions }: any) => {
  return (
    <Card className="w-[400px] md:w-full h-[270px] p-2 border-[#F92609]">
      <CardHeader className="">
        <CardTitle className="text-center text-[#F92609] text-sm">Intrusion Analysis</CardTitle>
      </CardHeader>
      <CardContent className="p-2">
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <BarChart
            width={400}
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
export default IntrusionAnalysisBarChart