import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardFooter,
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
  intrusions: {
    label: "Intrusions",
    color: "#F92609",
  },
} satisfies ChartConfig;

const IntrusionAnalysisLineChart = ({ intrusionTrend }: any) => {
  return (
    <Card className="flex flex-col w-full border-[#F92609]">
      <CardHeader>
        <CardTitle className="text-center text-[#F92609]">
          Intrusion Analysis Trend
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[200px] w-full pr-4">
          <LineChart data={intrusionTrend}>
            <CartesianGrid vertical={false} />
            <YAxis tickLine={false} axisLine={false} />
            <XAxis
              dataKey={"time"}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey={"count"}
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
        <p className="font-semibold">Total Instrusion Analysis</p>
      </CardFooter>
    </Card>
  )
}
export default IntrusionAnalysisLineChart