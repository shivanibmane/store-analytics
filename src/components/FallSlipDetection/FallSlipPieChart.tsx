
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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import DoughnutChartSkeleton from "../ChartSkeletonLoaders/DountChartSekeletonLoader"

export function FallSlipPieChart({cameraWiseFall,isLoading}:any) {

  function generateRedShade(index:number,total:number){
    if(total===1)
    {
      return "#F92609";
    }
    const lightness=90-(index*(60/total));
    return `hsl(0,100%,${lightness}%)`
  }

  const totalCamera=cameraWiseFall?.length;

  const formattedData=cameraWiseFall?.map((item:any,index:any)=>({
    camera:item?.camera_name,
    count:item?.count,
    fill:generateRedShade(index,totalCamera)
  }));

  const chartConfig:ChartConfig=(formattedData || []).reduce((config:any,item:any)=>{
    if(item.camera) {
      config[item.camera]={
        label:item.camera_name,
        color:"#F92609",
      }
    }
    return config;
  },{} as ChartConfig);

  return (
    <Card className="w-full md:w-full h-[270px] p-2 border-[#F92609]">
      <CardHeader>
        <CardTitle className="text-center text-[#F92609] text-sm">
            Camerawise Fall/Slip Count
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        {isLoading ? 
            <DoughnutChartSkeleton/> :
        <ChartContainer
          config={chartConfig}
          className="w-full h-[200px]"
        >
          {formattedData?.length ? 
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie 
              data={formattedData} 
              dataKey="count" nameKey="camera" 
              outerRadius={100} 
            />
          </PieChart> : <div className="flex items-center justify-center">Data not found</div>
          }
        </ChartContainer>
        }
      </CardContent>
    </Card>
  )
}
