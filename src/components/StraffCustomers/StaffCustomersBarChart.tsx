import { Bar, BarChart, CartesianGrid, Label, XAxis, YAxis } from "recharts"

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
import BarChartSkeletonLoader from "../ChartSkeletonLoaders/BarChartSkeletonLoader"

const chartConfig = {
  "customer_count": {
    label: "Customers",
    color: "#F92609",
  },
  "staff_count": {
    label: "Staff",
    color: "#FFD14F",
  },
} satisfies ChartConfig

const StaffCustomersBarChart = ({ cameraWiseStaffCustomer, isLoading }: any) => {

  return (
    <Card className="w-full p-2 border-[#F92609]">
      <CardHeader>
        <CardTitle className="text-center text-[#F92609]">Camerawise Staff & Customers</CardTitle>
      </CardHeader>
      <CardContent>{isLoading ? <BarChartSkeletonLoader /> : <ChartContainer config={chartConfig} className="h-[220px] w-full">
        {cameraWiseStaffCustomer?.length > 0 ? <BarChart accessibilityLayer data={cameraWiseStaffCustomer} width={400}
          height={200}
        >
          <CartesianGrid vertical={false} />
          <YAxis tickLine={false} axisLine={false} allowDecimals={false} >
            <Label
              value="Count"
              angle={-90}
              position="insideLeft"
              style={{ textAnchor: "middle", fontSize: 12 }}

            /></YAxis>
          <XAxis
            dataKey={"camera_name"}
            tickLine={false}
            axisLine={false}
            tickMargin={5}
          ><Label
              value="Camera Name"
              position="insideBottom"
              offset={-5}
              style={{ textAnchor: "middle", fontSize: 12, }}
            /></XAxis>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dashed" />}
          />
          <Bar dataKey="customer_count" fill="#F92609" radius={4} />
          <Bar dataKey="staff_count" fill="#FFD14F" radius={4} />
        </BarChart> : <div className="flex items-center justify-center h-full">
          <p className="text-lg">Data Not Found</p></div>}
      </ChartContainer>}
      </CardContent>
    </Card>
  )
}
export default StaffCustomersBarChart;