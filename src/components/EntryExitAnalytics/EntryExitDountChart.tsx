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

const EntryExitDountChart = ({ totalEntryExit }: any) => {
  const chartData = [
    { status: "entry", value: totalEntryExit?.total_entry, fill: "#FFD14F" },
    { status: "exit", value: totalEntryExit?.total_exit, fill: "#F92609" },
  ];

  return (
    <Card className="w-full max-w-full p-2 border-[#F92609]">
      <CardHeader className="items-center ">
        <CardTitle className="text-[#F92609] text-center text-sm">Total Entry & Exit</CardTitle>
      </CardHeader>
      <CardContent className="pb-1">
        <ChartContainer
          config={chartConfig}
          className="w-[200px] h-[180px] overflow-hidden mx-auto"
        >
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
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
export default EntryExitDountChart