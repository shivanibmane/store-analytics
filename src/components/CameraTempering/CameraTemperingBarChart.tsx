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

const transformChartData = (data: any[]) => {
  const grouped: { [key: string]: any } = {};

  data.forEach(({ camera_name, reason, count }) => {
    if (!grouped[camera_name]) {
      grouped[camera_name] = { camera_name };
    }

    if (reason === "camera movement") {
      grouped[camera_name]["camera_movement"] = count;
    } else if (reason === "occlusion") {
      grouped[camera_name]["occlusion"] = count;
    }
  });

  return Object.values(grouped);
};
const chartConfig = {
  "camera_movement": {
    label: "Camera Movement",
    color: "#F92609",
  },
  occlusion: {
    label: "Occlusion",
    color: "#FFD14F",
  },
} satisfies ChartConfig



const CameraTemperingBarChart = ({ cameraTemperingTrend, isLoading }: any) => {
  const transformedData = transformChartData(cameraTemperingTrend || []);

  return (
    <Card className="w-full h-[300px] p-2 border-[#F92609]">
      <CardHeader>
        <CardTitle className="text-center text-[#F92609]">Tempering Type Camerawise</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[230px] w-full">
          {!isLoading ? <BarChart accessibilityLayer data={transformedData} width={400}
            height={200}
          >
            <CartesianGrid vertical={false} />
            <YAxis tickLine={false} axisLine={false} >
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
              tickMargin={8}
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
            <Bar dataKey="camera_movement" fill="#F92609" radius={4} barSize={50} />
            <Bar dataKey="occlusion" fill="#FFD14F" radius={4} barSize={50} />
          </BarChart> : <div className="text-lg flex items-center justify-center"><p>Loading..</p></div>}

        </ChartContainer>
      </CardContent>
    </Card>
  )
}
export default CameraTemperingBarChart;