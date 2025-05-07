import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardFooter,
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
  { date: "29/04/25", appointments: 18 },
  { date: "30/04/25", appointments: 30 },
  { date: "01/05/25", appointments: 20 },
  { date: "02/05/25", appointments: 50 },
  { date: "03/05/25", appointments: 40 },

]

const chartConfig = {
  appointments: {
    label: "Appointments",
  },

} satisfies ChartConfig

const AppointmentsTrendLineChart =
  () => {
    return (
      <Card className="flex flex-col w-full  max-w-[420px] lg:h-[390px] xl:h-[390px] sm:max-w-full  lg:max-w-full border-[#F92609] pr-4 ">
        <CardHeader>
          <CardTitle className="text-center text-[#F92609]">Trend Chart Of Appointments Applied</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} >
            <LineChart
              accessibilityLayer
              data={chartData}
            >
              <CartesianGrid vertical={false} />

              <YAxis
                dataKey="appointments"
                tickLine={false}
                axisLine={false}
              />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Line
                dataKey="appointments"
                type="natural"
                stroke="#F92609"
                strokeWidth={2}
                dot={{
                  fill: "#F92609",
                }}
                activeDot={{
                  r: 6,
                }}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm" >
          <p className="font-semibold">Total Appointments Applied</p>
        </CardFooter>
      </Card>
    )
  }
export default AppointmentsTrendLineChart