import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
  Legend,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import Header from "../Header";


interface MostRes {
  name: string;
  count: number;
}

interface BarPoint {
  camera_name: string;
  duration: number;
}
interface LinePoint {
  time: string;
  duration: number;
}

const UnavailableEmployee: React.FC = () => {
  const [barData, setBarData] = useState<BarPoint[]>([]);
  const [lineData, setLineData] = useState<LinePoint[]>([]);
  const [topCam, setTopCam] = useState<MostRes | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const [bar, trend, mostemployee] = await Promise.all([
          fetch("http://127.0.0.1:8000/camerawiseEmp_unavailability"),
          fetch("http://127.0.0.1:8000/Emp_unavailabilityTrend"),
          fetch("http://127.0.0.1:8000/MostEmp_unavailability"),
        ]);

       
        const bardata = await bar.json();
        setBarData(Array.isArray(bardata) ? bardata : []);

     
        const trenddata = trend.ok ? await trend.json() : [];
        setLineData(Array.isArray(trenddata) ? trenddata : []);

        if (mostemployee.ok) {
          const most = await mostemployee.json();
          if (most.camera_name && typeof most.duration === "number") {
            setTopCam({ name: most.camera_name, count: most.duration });
          }
        }
        setError(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setBarData([]);
        setLineData([]);
        setTopCam(null);
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/90 backdrop-blur-sm p-2 rounded shadow border border-red-200 text-xs">
          <p className="font-semibold text-gray-800">{label}</p>
          <p className="text-red-600 font-medium">
            {payload[0].name}: {payload[0].value}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col gap-2 pb-6 overflow-auto">
      <Header title="Unavailable‑Employee" />

      <div className="flex flex-col gap-4 px-3 pb-3">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
          <Card className="col-span-1 md:col-span-3 rounded-lg border border-red-500 bg-white/90 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-2 sm:p-3 h-64 flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold mb-2 text-[#F92609] text-center">
                  Unavailable Employees by Camera
                </h3>
                {!loading && barData.length > 0 && (
                  <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
                    {barData.length} cameras
                  </span>
                )}
              </div>
              
              {loading ? (
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : error ? (
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-sm text-red-500">Failed to load data</p>
                </div>
              ) : barData.length ? (
                <ResponsiveContainer width="100%" height="90%">
                  <BarChart data={barData} margin={{ top: 5, right: 10, left: 0, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis 
                      dataKey="camera_name" 
                      tick={{ fontSize: 10, fill: "#F92609" }}
                      axisLine={{ stroke: "#F92609" }}
                     
                      interval="preserveStartEnd"
                      tickFormatter={(value) => value.length > 6 ? `${value.substring(0, 6)}...` : value}
                    />
                    <YAxis 
                      tick={{ fontSize: 10, fill: "#F92609" }} 
                      allowDecimals={false}
                      axisLine={{ stroke: "#F92609" }}
                
                      width={30}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar 
                      dataKey="duration" 
                      fill="#F92609" 
                      radius={[4, 4, 0, 0]}
                      animationDuration={1500}
                    />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-sm text-gray-500">No data available</p>
                </div>
              )}
            </CardContent>
          </Card>

          
          <Card className="col-span-1 rounded-lg border border-red-500 bg-white/90 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
            <CardContent className="p-3 text-center w-full">
              <p className="text-lg font-semibold mb-2 text-[#F92609] text-center ">
                Camera with most unavailable employees
              </p>
              {loading ? (
                <div className="w-6 h-6 border-2 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mt-2"></div>
              ) : error ? (
                <p className="text-xs text-red-500 mt-2">Failed to load data</p>
              ) : topCam ? (
                <div className="mt-2">
                  <p className="text-xl font-bold text-red-600 break-words">
                    {topCam.name}
                  </p>
                  <div className="bg-red-50 rounded-full px-3 py-1 mt-1 inline-block">
                    <span className="text-sm font-medium text-red-700">{topCam.count}</span>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-gray-500">No data available</p>
              )}
            </CardContent>
          </Card>
        </div>

       
        <Card className="w-full rounded-lg border border-red-500 bg-white/90 shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-2 sm:p-3 h-56 sm:h-64 flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold mb-2 text-[#F92609] text-center">
                Unavailable Employees – Daily Trend
              </h3>
              {!loading && lineData.length > 0 && (
                <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
                  {lineData.length} time periods
                </span>
              )}
            </div>
            
            {loading ? (
              <div className="flex-1 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : error ? (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-sm text-red-500">Failed to load data</p>
              </div>
            ) : lineData.length ? (
              <ResponsiveContainer width="100%" height="90%">
                <AreaChart data={lineData} margin={{ top: 5, right: 10, left: 0, bottom: 10 }}>
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis 
                    dataKey="time" 
                    tick={{ fontSize: 10, fill: "#374151" }}
                    axisLine={{ stroke: "#9ca3af" }}
                   
                    interval="preserveStartEnd"
                    tickFormatter={(value) => {
                     
                      if (window.innerWidth < 640) {
                        return value.length > 5 ? value.substring(0, 5) : value;
                      }
                      return value;
                    }}
                  />
                  <YAxis 
                    tick={{ fontSize: 10, fill: "#374151" }} 
                    allowDecimals={false}
                    axisLine={{ stroke: "#9ca3af" }}
                    width={30}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="duration"
                    stroke="#ef4444"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorUv)"
                    animationDuration={1500}
                  />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-sm text-gray-500">No data available</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UnavailableEmployee;