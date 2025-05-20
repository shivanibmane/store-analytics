import { CartesianGrid, Label, Line, LineChart, XAxis, YAxis } from "recharts"
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
import { useEffect, useState } from "react"

const chartConfig = {
  duration: {
    label: "Duration",
    color: "#F92609",
  },
} satisfies ChartConfig;

interface TrendPoints {
  name: string,
  count: number
}
const UnavailableEmployeetrends = () => {
  const [trends, setTrends] = useState<TrendPoints[]>();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/Emp_unavailabilityTrend");
        if (!res.ok) throw new Error("network");
        const jsondata = await res.json();
        setTrends(jsondata);
      } catch (e) {
        console.error("Fetch top-cam failed:", e);
      }
    })();
  }, []);
  return (
    <Card className="flex flex-col w-full border-[#F92609]">
      <CardHeader>
        <CardTitle className="text-center text-[#F92609]">
          Unavailable Employee Trend
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[200px] w-full pr-4">
          <LineChart data={trends}>
            <CartesianGrid vertical={false} />
            <YAxis tickLine={false} axisLine={false} >
              <Label
                value="Count"
                angle={-90}
                position="insideLeft"
                style={{ textAnchor: "middle", fontSize: 12 }}
              /></YAxis>
            <XAxis
              dataKey={"time"}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            ><Label
                value="Time"
                position="insideBottom"
                offset={-4}
                style={{ textAnchor: "middle", fontSize: 12 }}
              /></XAxis>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey={"duration"}
              type="natural"
              stroke="#F92609"
              strokeWidth={2}
              dot={{ fill: "#F92609" }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
export default UnavailableEmployeetrends