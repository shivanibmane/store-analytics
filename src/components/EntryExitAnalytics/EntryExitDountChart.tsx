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
  entry: {
    label: "Entry",
    color: "#FFD14F",
  },
  exit: {
    label: "Exit",
    color: "#F92609",
  },
} satisfies ChartConfig

const EntryExitDountChart = ({ totalEntryExit, isLoading }: any) => {
  const chartData = [
    { status: "entry", value: totalEntryExit?.total_entry, fill: "#FFD14F" },
    { status: "exit", value: totalEntryExit?.total_exit, fill: "#F92609" },
  ];

  return (
    <Card className="w-full p-1 border-[#F92609]">
      <CardHeader className="items-center ">
        <CardTitle className="text-[#F92609] text-center text-sm">Total Entry & Exit</CardTitle>
      </CardHeader>
      <CardContent className="">
        {isLoading ? <DoughnutChartSkeleton /> :
          <ChartContainer
            config={chartConfig}
            className="w-[200px] h-[180px] overflow-hidden mx-auto"
          >{totalEntryExit?.total_entry > 0 || totalEntryExit?.total_exit > 0 ?
            <PieChart width={200} height={180}>
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
              <p className="text-sm">Data Not Found</p></div>}
          </ChartContainer>}
      </CardContent>
    </Card>
  )
}
export default EntryExitDountChart