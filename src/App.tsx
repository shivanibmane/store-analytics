import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CityMap from "./components/Map/CityMap";
import UserManagement from "./components/UserManagement/UserManagement";
import Analysis from "./components/Analysis/Analysis";
import EntryExitAnalytics from "./components/EntryExitAnalytics/EntryExitAnalytics";
import UnavailableEmployee from "./components/UnavailableEmployee/UnavailableEmployee";
import IntrusionAnalysis from "./components/IntrusionAnalysis/IntrusionAnalysis";
import MobileUsage from "./components/MobileUsage/Mobile_usage";
import CameraManagement from "./components/CameraManagement/CameraManagement";
import DwellCamera from "./components/DwellTime/DwellCamera";
import { Toaster } from "sonner";
import OccupancyMaxCount from "./components/OccupancyMonitoring/OccupancyMaxCount";
import OccupancyMonitoring from "./components/OccupancyMonitoring/OccupancyMonitoring";
import CameraTempering from "./components/CameraTempering/CameraTempering";
import BillingStaffAbsence from "./components/BillingStaffAbsence/BillingStaffAbsence"
import Heatdata from "./components/HeatMap/Heatdata";
import { HoverProvider } from "./hooks/HoverContext";
function App() {
  return (
    <>
     <Toaster position="top-right" richColors />
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<CityMap />} />
        <Route path="user-management" element={<UserManagement />} />
        <Route path="camera-management" element={<CameraManagement />} />
        <Route path="analysis" element={<Analysis />}>
          <Route path="entry-exit-analytics" element={<EntryExitAnalytics />} />
          <Route path="unavailable-employee" element={<UnavailableEmployee />} />
          <Route path="intrusion-analysis" element={<IntrusionAnalysis />} />
          <Route path="mobile-usage" element={<MobileUsage />} />
          <Route path="Dwell-timing" element={<DwellCamera />} />
          <Route path="occupancy-monitoring" element={<OccupancyMonitoring/>}/>
          <Route path="camera-tampering" element={<CameraTempering/>}/>
          <Route path="BillingStaffAbsence" element={<BillingStaffAbsence/>}/>
          <Route path="HeatMap" element={<Heatdata/>}/>
        </Route>
      </Route>
    </Routes>
    </>
  );
}

export default App;
