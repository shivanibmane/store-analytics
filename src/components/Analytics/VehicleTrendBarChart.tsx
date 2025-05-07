import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
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
  { date: "29/04/25", truck: 70, trailer: 25, tempo: 35, van: 10 },
  { date: "30/04/25", truck: 60, trailer: 50, tempo: 64, van: 20 },
  { date: "01/05/25", truck: 50, trailer: 70, tempo: 53, van: 30 },
  { date: "02/05/25", truck: 40, trailer: 65, tempo: 26, van: 40 },
  { date: "03/05/25", truck: 30, trailer: 15, tempo: 65, van: 50 },
  { date: "04/05/25", truck: 20, trailer: 40, tempo: 55, van: 60 },
  { date: "05/05/25", truck: 10, trailer: 48, tempo: 35, van: 70 },

]
const chartConfig = {
  truck: {
    label: "Truck",
    color: "#055C9D",
  },
  trailer: {
    label: "Trailer",
    color: "#FFD14F",
  },
  tempo: {
    label: "Tempo",
    color: "#F92609",
  },
  van: {
    label: "Van",
    color: "#76B947",
  }
} satisfies ChartConfig

const VehicleTrendBarChart = () => {
  return (
    <Card className="flex flex-col w-full max-w-full  border-[#F92609]">
      <CardHeader>
        <CardTitle className="text-center text-[#F92609]">Last 7 Days Normal Tread Of Each Vehicle</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} >
          <BarChart accessibilityLayer data={chartData} className="max-h-[300px]">
            <CartesianGrid vertical={false} />
            <YAxis tickMargin={20} />
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}

            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="truck" fill="#055C9D" radius={4} />
            <Bar dataKey="trailer" fill="#FFD14F" radius={4} />
            <Bar dataKey="tempo" fill="#F92609" radius={4} />
            <Bar dataKey="van" fill="#76B947" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default VehicleTrendBarChart
