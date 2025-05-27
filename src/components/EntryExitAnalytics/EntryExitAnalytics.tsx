import { useEffect, useState } from "react";
import DatePicker from "./DatePicker";
import { Button } from "../ui/button";
import { BiMenuAltLeft } from "react-icons/bi";
import EntryExitTreandLineChart from "./EntryExitTreandLineChart";
import EntryExitDetailCard from "./EntryExitDetailCard";
import EntryExitDountChart from "./EntryExitDountChart";

const EntryExitAnalytics = () => {
  const [peakData, setPeakData]: any = useState(null);
  const [trendData, setTrendData]: any = useState([]);
  const [totalEntryExit, setTotalEntryExit]: any = useState(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [totalRes, trendRes, peakRes] = await Promise.all([
          fetch("http://127.0.0.1:8000/total_entry_exit"),
          fetch("http://127.0.0.1:8000/entry_exit_trend"),
          fetch("http://127.0.0.1:8000/peak_entry_exit"),
        ]);
        const totalData = await totalRes.json();
        const trend = await trendRes.json();
        const peak = await peakRes.json();
        setTotalEntryExit(totalData);
        setTrendData(trend);
        setPeakData(peak);
      } catch (err) {
        console.error("Failed to fetch:", err);
      }
    };
    fetchAllData();
  }, []);

  return (
    <div className="w-full">
      <div>
        <h1 className="text-1xl font-semibold text-center sm:text-start">Entry/Exit Analytics</h1>
        <div className="grid grid-cols-1 sm:flex  gap-3 items-center py-3">
          <DatePicker title="Start Date" />
          <DatePicker title="End Date" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:flex text-left gap-2">
          <Button variant="secondary"><BiMenuAltLeft />Queues Categorization</Button>
          <Button variant="secondary"><BiMenuAltLeft />Supplier</Button>
          <Button variant="secondary"><BiMenuAltLeft />Operator</Button>
          <Button variant="secondary"><BiMenuAltLeft />Turn Around Time</Button>
        </div>
        <div className="grid grid-cols-1  gap-3 items-center mt-4 mx-auto ">
          <div className="grid grid-col-1 sm:grid-cols-1 xl:grid-cols-2  gap-3 ">
            <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start lg:flex-row gap-3">
              <EntryExitDetailCard title="Peak Hours" value={peakData?.peak_hour} />
              <EntryExitDetailCard title="Peak Entry" value={peakData?.peak_entry} />
              <EntryExitDetailCard title="Peak Exit" value={peakData?.peak_exit} /></div>
            <EntryExitDountChart totalEntryExit={totalEntryExit} />
          </div>
          <EntryExitTreandLineChart trendData={trendData} />
        </div>
      </div>
    </div >
  );
};

export default EntryExitAnalytics;
