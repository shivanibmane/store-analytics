import { ChevronRight } from "lucide-react"
import Header from "../Header"
import DatePicker from "./DatePicker"
import { Button } from "../ui/button"
import { BiMenuAltLeft } from "react-icons/bi";
import AppointmentsTrendLineChart from "./AppointmentsTreandLineChart";
import SupplierCategoriesDonutChart from "./SupplierCategoriesDonutChart";
import QueuesCategoriesPieChart from "./QueuesCategoriesPieChart";
import VehicleTrendBarChart from "./VehicleTrendBarChart";
import MaxSupplierAppointmentDatesChart from "./MaxSupplierAppointmentDatesChart";


const Analytics = () => {
  return (
    <div className="w-full">
      <Header title="Analytics" />
      <div className="px-4 py-2 ">
        <div className="flex gap-1 text-[#F92609] items-center text-sm ">
          <p>Menu</p>
          <ChevronRight className="w-4" />
          <p>Analytics</p>
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
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:flex  xl:flex-row  gap-3 items-center mt-4 mx-auto ">
            <AppointmentsTrendLineChart />
            <SupplierCategoriesDonutChart />
            <div className="col-span-full w-full"><QueuesCategoriesPieChart /></div>
          </div>
          <div className="mt-6 flex flex-col xl:flex-row  gap-3" >
            <VehicleTrendBarChart />
            <MaxSupplierAppointmentDatesChart />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Analytics
