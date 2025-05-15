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
  entry: {
    label: "Entry",
    color: "#FFD14F ",
  },
  exit: {
    label: "Exit",
    color: "#F92609",
  },
} satisfies ChartConfig;
const EntryExitTreandLineChart =
  ({ trendData }: any) => {
    return (
      <Card className="flex flex-col w-full border-[#F92609]">
        <CardHeader>
          <CardTitle className="text-center text-[#F92609]">
            Entry & Exit Trend
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[200px] w-full">
            <LineChart data={trendData}>
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
                stroke="#FFD14F"
                strokeWidth={2}
                dot={{ fill: "#FFD14F" }}
                activeDot={{ r: 5 }}
              />
              <Line
                dataKey="exit"
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
          <p className="font-semibold">Total Entry & Exit</p>
        </CardFooter>
      </Card>
    )
  }
export default EntryExitTreandLineChart