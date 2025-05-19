import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface MostRes {
  name: string;
  count: number;
}

const UnavailableMostEmp_Cam: React.FC = () => {
  const [topCam, setTopCam] = useState<MostRes | null>(null);
  const [status, setStatus] = useState<"loading" | "error" | "done">("loading");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/MostEmp_unavailability");
        if (!res.ok) throw new Error("network");
        const json = await res.json();
        if (json.camera_name && typeof json.duration === "number") {
          setTopCam({ name: json.camera_name, count: json.duration });
        }
        setStatus("done");
      } catch (e) {
        console.error("Fetch top-cam failed:", e);
        setStatus("error");
      }
    })();
  }, []);

  return (
    <Card
      /* flex-1 lets the parent grid decide width; max-w stops it from stretching too wide on xl */
      className="flex-1 max-w-full sm:max-w-xs border border-red-500 bg-white/90 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      {/* narrower padding and smaller fonts on phones; scales up on sm+ */}
      <CardContent className="w-full p-3 sm:p-4 flex flex-col items-center text-center">
        <p className="text-sm sm:text-base font-semibold text-[#F92609] mb-2">
          Camera with most unavailable employees
        </p>

        {status === "loading" ? (
          <div className="w-6 h-6 border-2 border-red-600 border-t-transparent rounded-full animate-spin mt-2" />
        ) : status === "error" ? (
          <p className="text-[11px] sm:text-xs text-red-500 mt-2">
            Failed to load data
          </p>
        ) : topCam ? (
          <div className="mt-2 break-words">
            <p className="text-lg sm:text-xl font-bold text-red-600">
              {topCam.name}
            </p>
            <div className="inline-block bg-red-50 rounded-full px-2 sm:px-3 py-0.5 sm:py-1 mt-1">
              <span className="text-xs sm:text-sm font-medium text-red-700">
                {topCam.count}
              </span>
            </div>
          </div>
        ) : (
          <p className="text-[11px] sm:text-xs text-gray-500">No data available</p>
        )}
      </CardContent>
    </Card>
  );
};

export default UnavailableMostEmp_Cam;
