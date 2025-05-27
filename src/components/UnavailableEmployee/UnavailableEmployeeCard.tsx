import React, { useEffect, useState } from "react";
interface MostRes {
  name: string;
  count: number;
}

const UnavailableEmployeeCard: React.FC = () => {
  const [topCam, setTopCam]: any = useState<MostRes | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/MostEmp_unavailability");
        if (!res.ok) throw new Error("network");
        const json = await res.json();
        console.log("cam", json);
        if (json.camera_name && typeof json.duration === "number") {
          setTopCam({ name: json.camera_name, count: json.duration });
        }
      } catch (e) {
        console.error("Fetch top-cam failed:", e);
      }
    })();
  }, []);

  return (
    <div className="w-full xl:w-[300px] border border-[#F92609] rounded-lg p-6 flex flex-col items-center justify-center min-h-0">
      <h3 className="text-lg font-semibold mb-2 text-[#F92609] text-center">Camera With Most Unavailable Employees</h3>
      <p className="">{topCam?.name}</p>
      <p className="text-2xl font-bold">{topCam?.count}</p>
    </div>
  );
};

export default UnavailableEmployeeCard;
