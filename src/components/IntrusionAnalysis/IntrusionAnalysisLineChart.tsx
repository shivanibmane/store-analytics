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
import LineChartSkeletonLoader from "../ChartSkeletonLoaders/LineChartSkeletonLoader";

const chartConfig = {
  intrusions: {
    label: "Intrusions",
    color: "#F92609",
  },
} satisfies ChartConfig;

const IntrusionAnalysisLineChart = ({ intrusionTrend, isLoading }: any) => {
  return (
    <Card className="flex flex-col w-full border-[#F92609]">
      <CardHeader>
        <CardTitle className="text-center text-[#F92609]">
          Intrusion Analysis Trend
        </CardTitle>
      </CardHeader>
      <CardContent>{isLoading ?
        <LineChartSkeletonLoader />
        :
        <ChartContainer config={chartConfig} className="h-[200px] w-full pr-4">
          {intrusionTrend?.length > 0 ? <LineChart data={intrusionTrend}>
            <CartesianGrid vertical={false} />
            <YAxis tickLine={false} axisLine={false} >
              <Label
                value="Count"
                angle={-90}
                position="insideLeft"
                style={{ textAnchor: "middle", fontSize: 12 }}
              /></YAxis>
            <XAxis
              dataKey={"time"}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            ><Label
                value="Time"
                position="insideBottom"
                offset={-4}
                style={{ textAnchor: "middle", fontSize: 12, }}
                className=""
              /></XAxis>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey={"count"}
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
    </Card >
  )
}
export default IntrusionAnalysisLineChart