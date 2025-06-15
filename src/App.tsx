import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CityMap from "./components/Map/CityMap";
import UserManagement from "./components/UserManagement/UserManagement";
import { Toaster } from "sonner";
import Analysis from "./components/Analysis/Analysis";
// Analytics Components
import EntryExitAnalytics from "./components/EntryExitAnalytics/EntryExitAnalytics";
import UnavailableEmployee from "./components/UnavailableEmployee/UnavailableEmployee";
import IntrusionAnalysis from "./components/IntrusionAnalysis/IntrusionAnalysis";
import MobileUsage from "./components/MobileUsage/Mobile_usage";
import CameraManagement from "./components/CameraManagement/CameraManagement";
import OccupancyMonitoring from "./components/OccupancyMonitoring/OccupancyMonitoring";
import CameraTempering from "./components/CameraTempering/CameraTempering";
import BillingCounter from "./components/BillingCounter/BillingCounter";
import StaffCustomers from "./components/StraffCustomers/StaffCustomers";
import DwellCamera from "./components/DwellTime/DwellCamera";
import FallSlipDetection from "./components/FallSlipDetection/FallSlipDetection";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<CityMap />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="camera-management" element={<CameraManagement />} />
          {/* PageAnalysis acts as parent layout */}
          <Route path="analysis" element={<Analysis />}>
            <Route path="entry-exit-analytics" element={<EntryExitAnalytics />} />
            <Route path="unavailable-employee" element={<UnavailableEmployee />} />
            <Route path="intrusion-analysis" element={<IntrusionAnalysis />} />
            <Route path="occupancy-monitoring" element={<OccupancyMonitoring />} />
            <Route path="mobile-usage" element={<MobileUsage />} />
            <Route path="camera-tampering" element={<CameraTempering />} />
            <Route path="dwell-timing" element={<DwellCamera />} />
            <Route path="staff-customers" element={<StaffCustomers />} />
            <Route path="billing-counter" element={<BillingCounter />} />
            <Route path="fall-slip-detection" element={<FallSlipDetection />} />
          </Route>
        </Route>
      </Routes>

      <Toaster richColors position={"top-right"} />
    </>
  );
}

export default App;
