import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
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
import LineChartSkeletonLoader from "../ChartSkeletonLoaders/LineChartSkeletonLoader";

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
  ({ trendData, isLoading }: any) => {
    return (
      <Card className="flex flex-col h-[330px] w-full border-[#F92609] px-2">
        <CardHeader>
          <CardTitle className="text-center text-[#F92609] ">
            Entry & Exit Trend
          </CardTitle>
        </CardHeader>
        <CardContent>{isLoading ? <LineChartSkeletonLoader /> :
          <ChartContainer config={chartConfig} className="h-[240px] w-full">
            {trendData?.length > 0 ? <LineChart data={trendData}>
              <CartesianGrid vertical={false} />
              <YAxis tickLine={false} axisLine={false} tickMargin={4} label={{ value: "Entry/Exit Count", angle: -90, position: "insideLeft", offset: 3 }}
              />
              <XAxis
                dataKey="time"
                tickLine={false}
                axisLine={false}
                tickMargin={3}
                label={{ value: "Hours", position: "insideBottom", offset: -5, }}

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
            </LineChart> : <div className="flex items-center justify-center h-full">
              <p className="text-sm">Data Not Found</p></div>}
          </ChartContainer>}
        </CardContent>
      </Card>
    )
  }
export default EntryExitTreandLineChart