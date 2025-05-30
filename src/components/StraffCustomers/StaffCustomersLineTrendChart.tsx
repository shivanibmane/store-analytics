import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
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
  "staff_count": {
    label: "Staff",
    color: "#FFD14F ",
  },
  "customer_count": {
    label: "Customers",
    color: "#F92609",
  },
} satisfies ChartConfig;
const StaffCustomersLineTrendChart =
  ({ staffCustomersTrend, isLoading }: any) => {
    return (
      <Card className="flex flex-col h-[295px] w-full border-[#F92609] px-2">
        <CardTitle className="text-center text-[#F92609]  ">
          Staff & Customers Trend
        </CardTitle>
        <CardContent>
          {isLoading ? <LineChartSkeletonLoader /> : <ChartContainer config={chartConfig} className="h-[220px] w-full">
            {staffCustomersTrend?.length > 0 ? <LineChart data={staffCustomersTrend}>
              <CartesianGrid vertical={false} />
              <YAxis tickLine={false} allowDecimals={false} axisLine={false} tickMargin={4} label={{ value: "Count", angle: -90, position: "insideLeft", offset: 3 }}
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
                dataKey="staff_count"
                type="natural"
                stroke="#FFD14F"
                strokeWidth={2}
                dot={{ fill: "#FFD14F" }}
                activeDot={{ r: 5 }}
              />
              <Line
                dataKey="customer_count"
                type="natural"
                stroke="#F92609"
                strokeWidth={2}
                dot={{ fill: "#F92609" }}
                activeDot={{ r: 5 }}
              />
            </LineChart> : <div className="flex items-center justify-center h-full">
              <p className="text-lg">Data Not Found</p></div>}
          </ChartContainer>}
        </CardContent>
      </Card>
    )
  }
export default StaffCustomersLineTrendChart