import { useEffect, useState } from "react"
import AnalysisHeading from "../Analysis/AnalysisHeading"
import StaffCustomersBarChart from "./StaffCustomersBarChart"
import StaffCustomersDountChart from "./StaffCustomersDountChart"
import StaffCustomersLineTrendChart from "./StaffCustomersLineTrendChart"
import { toast } from "sonner"

const StaffCustomers = () => {
  const [cameraWiseStaffCustomer, setCameraWiseStaffCustomer] = useState(null);
  const [totalStaffCustomers, setTotalStaffCustomers]: any = useState({});
  const [staffCustomersTrend, setStaffCustomersTrend] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchIntrusionData = async () => {
      try {
        const [cameraWiseRes, totalRes, trendRes] = await Promise.all([
          fetch("http://localhost:8000/CameraWisecustomerstaffRatio"),
          fetch("http://localhost:8000/TotalcustomerstaffRatio"),
          fetch("http://localhost:8000/CustomerStaffTrend"),
        ]);

        const cameraWiseData = await cameraWiseRes.json();
        const totalData = await totalRes.json();
        const trendData = await trendRes.json();

        setCameraWiseStaffCustomer(cameraWiseData);
        setTotalStaffCustomers(totalData);
        setStaffCustomersTrend(trendData);
        setIsLoading(false);

        const isCameraDataValid = Array.isArray(cameraWiseData) && cameraWiseData.length > 0;
        const isTotalDataValid = totalData && Object.keys(totalData).length > 0;
        const isTrendDataValid = Array.isArray(trendData) && trendData.length > 0;
        console.log(isCameraDataValid, isTotalDataValid, isTrendDataValid)

        if (isCameraDataValid && isTotalDataValid && isTrendDataValid) {
          toast.success("Data loaded successfully");
        } else {
          toast.warning("Data Not Found");
        }
      } catch (error) {
        toast.error("Failed to load data. Please check your server or network.");
        setIsLoading(false);
      }
    };
    fetchIntrusionData();
  }, []);
  return (
    <div className="w-full">
      <AnalysisHeading title={"Staff/Customers"} />
      <div className="flex flex-col gap-1">
        <div className="flex flex-col xl:flex-row gap-2">
          <StaffCustomersBarChart cameraWiseStaffCustomer={cameraWiseStaffCustomer} isLoading={isLoading} />
          <StaffCustomersDountChart totalStaffCustomers={totalStaffCustomers} isLoading={isLoading} />
        </div>
        <StaffCustomersLineTrendChart staffCustomersTrend={staffCustomersTrend} isLoading={isLoading} />
      </div>
    </div >
  )
}

export default StaffCustomers
