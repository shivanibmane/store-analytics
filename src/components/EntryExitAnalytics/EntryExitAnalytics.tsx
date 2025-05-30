import { useEffect, useState } from "react";
import DatePicker from "./DatePicker";
import { Button } from "../ui/button";
import { BiMenuAltLeft } from "react-icons/bi";
import EntryExitTreandLineChart from "./EntryExitTreandLineChart";
import EntryExitDetailCard from "./EntryExitDetailCard";
import EntryExitDountChart from "./EntryExitDountChart";
import AnalyticsHeading from "../Analysis/AnalysisHeading";
import { toast } from "sonner";
const EntryExitAnalytics = () => {
  const [peakData, setPeakData]: any = useState(null);
  const [trendData, setTrendData]: any = useState([]);
  const [totalEntryExit, setTotalEntryExit]: any = useState(null);
  const [isLoading, setIsLoading] = useState(true)

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
        console.log(totalData, trend, peak)

        setTotalEntryExit(totalData);
        setTrendData(trend);
        setPeakData(peak);
        setIsLoading(false)

        const isTotalDataValid = totalData && Object.keys(totalData).length > 0;
        const isTredsDataValid = Array.isArray(trend) && trend.length > 0;
        const isPeakDataValid = peak && Object.keys(peak).length > 0;
        console.log(isTotalDataValid, isTredsDataValid, isPeakDataValid)

        if (isTotalDataValid && isTredsDataValid && isPeakDataValid) {
          toast.success("Data loaded successfully");
        }
        else {
          toast.warning("Data Not Found");
        }

      } catch (err) {
        toast.error("Failed to load data. Please check your server or network")
        setIsLoading(false)
      }
    };
    fetchAllData();
  }, []);

  return (
    <div className="w-full">
      <AnalyticsHeading title={"Entry Exit Analytics"} />
      <div>
        <div className="flex flex-col xl:flex-row gap-2">
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-1 sm:flex gap-3 items-center py-1">
              <DatePicker title="Start Date" />
              <DatePicker title="End Date" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:flex text-left gap-2">
              <Button variant="secondary"><BiMenuAltLeft />Queues Categorization</Button>
              <Button variant="secondary"><BiMenuAltLeft />Supplier</Button>
              <Button variant="secondary"><BiMenuAltLeft />Operator</Button>
              <Button variant="secondary"><BiMenuAltLeft />Turn Around Time</Button>
            </div>
            {/* <div className="grid grid-col-1 sm:grid-cols-1 xl:grid-cols-2  gap-3"> */}
            <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start lg:flex-row gap-3">
              <EntryExitDetailCard title="Peak Hours" value={peakData?.peak_hour} isLoading={isLoading} />
              <EntryExitDetailCard title="Peak Entry" value={peakData?.peak_entry} isLoading={isLoading} />
              <EntryExitDetailCard title="Peak Exit" value={peakData?.peak_exit} isLoading={isLoading} /></div>
            {/* </div> */}
          </div>
          <EntryExitDountChart totalEntryExit={totalEntryExit} isLoading={isLoading} />
        </div>
        <div className="grid grid-cols-1  gap-3 items-center mt-2 mx-auto ">

          <EntryExitTreandLineChart trendData={trendData} isLoading={isLoading} />
        </div>
      </div>
    </div >
  );
};

export default EntryExitAnalytics;
