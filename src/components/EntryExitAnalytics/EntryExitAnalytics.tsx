import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import Header from "../Header";
import DatePicker from "./DatePicker";
import { Button } from "../ui/button";
import { BiMenuAltLeft } from "react-icons/bi";
import EntryExitTreandLineChart from "./EntryExitTreandLineChart";
import EntryExitDetailCard from "./EntryExitDetailCard";
import EntryExitDountChart from "./EntryExitDountChart";

const EntryExitAnalytics = () => {
  const [peakData, setPeakData] = useState({
    peak_hour: "",
    peak_entry: 0,
    peak_exit: 0
  });

  useEffect(() => {
    fetch("http://127.0.0.1:8000/peak_entry_exit")
      .then((res) => res.json())
      .then((data) => {
        console.log("Peak Data:", data);
        setPeakData(data);
      })
      .catch((err) => console.error("Failed to fetch peak entry/exit data:", err));
  }, []);

  return (
    <div className="w-full">
      <Header title="Entry & Exit Analytics" />
      <div className="px-4 py-2">
        <div className="flex gap-1 text-[#F92609] items-center text-sm">
          <p>Menu</p>
          <ChevronRight className="w-4" />
          <p>Entry/Exit Analytics</p>
        </div>

        <div className="grid grid-cols-1 sm:flex gap-3 items-center py-3">
          <DatePicker title="Start Date" />
          <DatePicker title="End Date" />
        </div>

        <div className="grid grid-cols-2 sm:flex text-left gap-2">
          <Button variant="secondary"><BiMenuAltLeft />Queues Categorization</Button>
          <Button variant="secondary"><BiMenuAltLeft />Supplier</Button>
          <Button variant="secondary"><BiMenuAltLeft />Operator</Button>
          <Button variant="secondary"><BiMenuAltLeft />Turn Around Time</Button>
        </div>

        <div className="grid grid-cols-1 gap-3 items-center mt-4 mx-auto">
          <div className="grid grid-col-1 sm:grid-col-1 xl:grid-cols-2 gap-3">
            <div className="flex flex-col sm:flex-row justify-center lg:flex-row gap-3">
              <EntryExitDetailCard title="Peak Hours" value={peakData.peak_hour || "N/A"} />
              <EntryExitDetailCard title="Peak Entry" value={peakData.peak_entry} />
              <EntryExitDetailCard title="Peak Exit" value={peakData.peak_exit} />
            </div>

            <EntryExitDountChart
            />
          </div>

          <EntryExitTreandLineChart />
        </div>
      </div>
    </div>
  );
};

export default EntryExitAnalytics;
