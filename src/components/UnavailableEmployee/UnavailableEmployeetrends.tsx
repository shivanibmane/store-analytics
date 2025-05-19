import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

interface LinePoint {
  time: string;
  duration: number;
}

const UnavailableEmployeeTrends: React.FC = () => {
  const [lineData, setLineData] = useState<LinePoint[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/Emp_unavailabilityTrend"
        );
        const data = await response.json();
        setLineData(data);
      } catch (err) {
        console.error("Failed to fetch employee unavailability trend", err);
      }
    })();
  }, []);

  /** shrink long X-axis labels on very narrow screens (≤ 375 px) */
  const shortenTick = (value: string) =>
    window.innerWidth < 376 ? value.slice(0, 5) : value;

  return (
    <Card className="w-full flex-1 border border-red-500 bg-white/90 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* height: 56 vw on phones, 280 px on md+, with generous padding above sm */}
      <CardContent className="p-2 sm:p-3 md:p-4 h-[56vw] sm:h-[48vw] md:h-[280px] flex flex-col">
        <div className="flex justify-between items-center mb-1 sm:mb-2">
          <h3 className="flex-1 text-center text-[#F92609] text-sm sm:text-base font-semibold">
            Unavailable Employees – Daily Trend
          </h3>

          {lineData.length > 0 && (
            <span className="hidden xs:inline-block text-[10px] sm:text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full shrink-0">
              {lineData.length} pts
            </span>
          )}
        </div>

        {lineData.length ? (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={lineData}
              margin={{ top: 6, right: 8, left: 0, bottom: 6 }}
            >
              <defs>
                <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

              <XAxis
                dataKey="time"
                tick={{ fontSize: 9 }}
                axisLine={{ stroke: "#9ca3af" }}
                tickFormatter={shortenTick}
                minTickGap={10}
              />
              <YAxis
                tick={{ fontSize: 9 }}
                axisLine={{ stroke: "#9ca3af" }}
                allowDecimals={false}
                width={28}
              />

              <Area
                type="monotone"
                dataKey="duration"
                stroke="#ef4444"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#areaFill)"
              />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-xs sm:text-sm text-gray-500">No data available</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default UnavailableEmployeeTrends;
