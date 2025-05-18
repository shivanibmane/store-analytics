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

const chartData = [
  { time: "9AM", intrusions: 2 },
  { time: "10AM", intrusions: 5 },
  { time: "11AM", intrusions: 3 },
  { time: "12PM", intrusions: 7 },
  { time: "1PM", intrusions: 6 },
  { time: "2PM", intrusions: 4 },
  { time: "3PM", intrusions: 8 },
  { time: "4PM", intrusions: 5 },
  { time: "5PM", intrusions: 9 }
]
const chartConfig = {
  exit: {
    label: "Exit",
    color: "#F92609",
  },
} satisfies ChartConfig;

const IntrusionAnalysisLineChart = () => {
  return (
    <Card className="flex flex-col w-full border-[#F92609]">
      <CardHeader>
        <CardTitle className="text-center text-[#F92609]">
          Intrusion Analysis Trend
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[200px] w-full pr-4">
          <LineChart data={chartData}>
            <CartesianGrid vertical={false} />
            <YAxis tickLine={false} axisLine={false} />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="intrusions"
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