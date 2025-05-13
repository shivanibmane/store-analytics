import { ChevronRight } from "lucide-react"
import Header from "../Header"
import DatePicker from "./DatePicker"
import { Button } from "../ui/button"
import { BiMenuAltLeft } from "react-icons/bi";
import EntryExitTreandLineChart from "./EntryExitTreandLineChart";
import EntryExitDetailCard from "./EntryExitDetailCard";
import EntryExitDountChart from "./EntryExitDountChart";


const EntryExitAnalytics = () => {
  return (
    <div className="w-full">
      <Header title="Entry & Exit EntryExitAnalytics" />
      <div className="px-4 py-2 ">
        <div className="flex gap-1 text-[#F92609] items-center text-sm ">
          <p>Menu</p>
          <ChevronRight className="w-4" />
          <p>EntryExitAnalytics</p>
        </div>
        <div className="grid grid-cols-1 sm:flex gap-3 items-center py-3">
          <DatePicker title="Start Date" />
          <DatePicker title="End Date" />
        </div>
        <div className="grid grid-cols-2 sm:flex sm:flew-row text-left  gap-2">
          <Button variant="secondary" ><BiMenuAltLeft />Queues Categorization</Button>
          <Button variant="secondary" > <BiMenuAltLeft />Supplier</Button>
          <Button variant="secondary" ><BiMenuAltLeft />Operator</Button>
          <Button variant="secondary" ><BiMenuAltLeft />Turn Around Time</Button>
        </div>

        <div className="grid grid-cols-1  gap-3 items-center mt-4 mx-auto ">
          <div className="grid grid-col-1 sm:grid-col-1 xl:grid-cols-2  gap-3 ">
            <div className="flex flex-col sm:flex-row justify-center lg:flex-row gap-3">
              <EntryExitDetailCard title="Peak Hours" value={"11pm & 12pm"} />
              <EntryExitDetailCard title="Peak Entry" value={18} />
              <EntryExitDetailCard title="Peak Exit" value={5} /></div>
            <EntryExitDountChart />
          </div>
          <EntryExitTreandLineChart />
        </div>
      </div>

    </div>
  )
}

export default EntryExitAnalytics
