import { Pie, PieChart } from "recharts"
import {
  Card,
  CardContent,

  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import DoughnutChartSkeleton from "../ChartSkeletonLoaders/DountChartSekeletonLoader"


const chartConfig = {
  status: {
    label: "Status",
  },
  "staff_count": {
    label: "Staff",
    color: "#FFD14F",
  },
  "customer_count": {
    label: "Customers",
    color: "#F92609",
  },
} satisfies ChartConfig

const StaffCustomersDountChart = ({ totalStaffCustomers, isLoading }: any) => {
  const chartData = [
    { status: "staff_count", value: totalStaffCustomers?.staff_count, fill: "#FFD14F" },
    { status: "customer_count", value: totalStaffCustomers?.customer_count, fill: "#F92609" },
  ];


  return (
    <Card className="xl:w-[500px] p-1 border-[#F92609]">
      <CardHeader className="items-center">
        <CardTitle className="text-[#F92609] text-center text-sm">Total Staff & Customers</CardTitle>
      </CardHeader>
      <CardContent className="">{isLoading ? <DoughnutChartSkeleton />
        : <ChartContainer
          config={chartConfig}
          className="w-[200px] h-[180px] overflow-hidden mx-auto"
        >
          {totalStaffCustomers?.staff_count > 0 || totalStaffCustomers.customer_count > 0 ? <PieChart width={200} height={180}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="status"
              innerRadius={40}
              outerRadius={70}
            />
            <ChartLegend
              content={<ChartLegendContent nameKey="status" className="text-sm" />}
            />
          </PieChart> : <div className="flex items-center justify-center h-full">
            <p className="text-lg">Data Not Found</p></div>}
        </ChartContainer>}
      </CardContent>
    </Card>
  )
}
export default StaffCustomersDountChart