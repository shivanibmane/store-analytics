"use client"

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
} from "@/components/ui/chart"
const chartData = [
  { appointments: "no_appointments", queue: 275, fill: "#055C9D" },
  { appointments: "mistmatch_appointments", queue: 200, fill: "#FFD14F" },
  { appointments: "scrum_queue", queue: 187, fill: "#F92609" },
  { appointments: "whey_queue", queue: 173, fill: "#76B947" },

]

const chartConfig = {
  queue: {
    label: "queue",
  },
  no_appointments: {
    label: "No Appointments Queues",
    color: "#055C9D",
  },
  mistmatch_appointments: {
    label: "Appointment Mistmatch Queues",
    color: "#FFD14F",
  },
  scrum_queue: {
    label: "Scrum Check Queues",
    color: "#F92609",
  },
  whey_queue: {
    label: "Whey Check Queues",
    color: "#76B947",
  },

} satisfies ChartConfig

const QueuesCategoriesPieChart = () => {
  return (
    <Card className=" flex flex-col w-full max-w-[420px] xl:h-[390px] lg:max-w-full border-[#F92609]">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-center text-[#F92609]">Week's Appointments Categorized In Queues </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <Pie data={chartData} dataKey="queue" />
            <ChartLegend
              content={<ChartLegendContent nameKey="appointments" />}
              className="grid grid-cols-2"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
export default QueuesCategoriesPieChart