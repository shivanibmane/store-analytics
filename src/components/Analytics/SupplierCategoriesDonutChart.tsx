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
const chartData = [
  { appointments: "attended", attended: 275, fill: "#F92609" },
  { appointments: "not_attended", attended: 150, fill: "#FFD14F" },
]

const chartConfig = {
  appointments: {
    label: "Appointments",
  },
  attended: {
    label: "Attended Appointments",
    color: "#F92609",
  },
  not_attended: {
    label: "Not Attended Appointments",
    color: "#FFD14F",
  },

} satisfies ChartConfig

const SupplierCategoriesDonutChart = () => {


  return (
    <Card className="flex flex-col w-full max-w-[420px] sm:max-w-full  lg:h-[390px] lg:max-w-full border-[#F92609]">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-[#F92609] text-center">Supplier Categorization For The Week</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="attended"
              nameKey="appointments"
              innerRadius={50}
            />
            <ChartLegend
              content={<ChartLegendContent nameKey="appointments" />}
              className="grid grid-cols-2 "
            />
          </PieChart>
        </ChartContainer>
      </CardContent>

    </Card>
  )
}
export default SupplierCategoriesDonutChart