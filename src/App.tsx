import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import CityMap from "./components/Map/CityMap"
import UserManagement from "./components/UserManagement/UserManagement"
import EntryExitAnalytics from "./components/EntryExitAnalytics/EntryExitAnalytics"
import UnavailableEmployee from "./components/UnavailableEmployee/UnavailableEmployee"
import IntrusionAnalysis from "./components/IntrusionAnalysis/IntrusionAnalysis"
import CameraManagement from "./components/CameraManagement/CameraManagement"
import { Toaster } from "sonner"
import OccupancyMonitoring from "./components/OccupancyMonitoring/OccupancyMonitoring"
import CameraTempering from "./components/CameraTempering/CameraTempering"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<CityMap />} />
          <Route path="/entry-exit-analytics" element={<EntryExitAnalytics />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/unavilable-employee" element={<UnavailableEmployee />} />
          <Route path="/intrusion-analysis" element={<IntrusionAnalysis />} />
          <Route path="/camera-management" element={<CameraManagement />} />
          <Route path="/occupancy-monitoring" element={<OccupancyMonitoring/>}/>
          <Route path="/mobile-usage" element={<div>Mobile Usage</div>} />
          <Route path="/camera-tampering" element={<CameraTempering />} />
        </Route>
      </Routes>
      <Toaster richColors position={"top-right"} />
    </>
  )
}

export default App
