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
  { time: "09:00 AM", entry: 5, exit: 2 },
  { time: "10:00 AM", entry: 8, exit: 4 },
  { time: "11:00 AM", entry: 12, exit: 6 },
  { time: "12:00 PM", entry: 10, exit: 5 },
  { time: "01:00 PM", entry: 15, exit: 8 },
  { time: "02:00 PM", entry: 9, exit: 4 },
];
const chartConfig = {
  entry: {
    label: "Entry",
    color: "#F92609",
  },
  exit: {
    label: "Exit",
    color: "#FFD14F",
  },
} satisfies ChartConfig;
const EntryExitTreandLineChart =
  () => {
    return (
      <Card className="flex flex-col w-full border-[#F92609]">
        <CardHeader>
          <CardTitle className="text-center text-[#F92609]">
            Entry & Exit Trend
          </CardTitle>
        </CardHeader>

        <CardContent>
          <ChartContainer config={chartConfig} className="h-[200px] w-full">
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
                dataKey="entry"
                type="natural"
                stroke="#F92609"
                strokeWidth={2}
                dot={{ fill: "#F92609" }}
                activeDot={{ r: 5 }}
              />
              <Line
                dataKey="exit"
                type="natural"
                stroke="#FFD14F"
                strokeWidth={2}
                dot={{ fill: "#FFD14F" }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>

        <CardFooter className="flex-col gap-2 text-sm">
          <p className="font-semibold">Total Entry & Exit</p>
        </CardFooter>
      </Card>

    )
  }
export default EntryExitTreandLineChart