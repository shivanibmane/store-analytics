import { Bar, BarChart, XAxis, YAxis } from "recharts"
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
const chartData = [
  { date: "29/04/25", appointments: 70 },
  { date: "30/04/25", appointments: 60 },
  { date: "01/05/25", appointments: 50 },
  { date: "02/05/25", appointments: 40 },
  { date: "03/05/25", appointments: 30 },
  { date: "04/05/25", appointments: 20 },
  { date: "05/05/25", appointments: 10 },

]
const chartConfig = {
  desktop: {
    label: "Appointments",
    color: "#F92609",
  },
} satisfies ChartConfig
const MaxSupplierAppointmentDatesChart = () => {
  return (
    <Card className="flex flex-col  w-full max-w-full border-[#F92609] px-2">
      <CardHeader>
        <CardTitle className="text-center text-[#F92609]">Date when maximum appointments were taken by suppliers</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} >
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"

          >
            <XAxis type="number" dataKey="appointments" />
            <YAxis
              dataKey="date"
              type="category"
              tickLine={false}
              tickMargin={10}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="appointments" fill="#F92602" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <p className="text-center">No. of appointments per day</p>

    </Card>
  )
}

export default MaxSupplierAppointmentDatesChart
