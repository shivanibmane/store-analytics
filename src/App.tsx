import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import CityMap from "./components/Map/CityMap"
import UserManagement from "./components/UserManagement/UserManagement"

import EntryExitAnalytics from "./components/EntryExitAnalytics/EntryExitAnalytics"
import UnavailableEmployee from "./components/UnavailableEmployee/UnavailableEmployee"
import IntrusionAnalysis from "./components/IntrusionAnalysis/IntrusionAnalysis"
import MobileUsage from "./components/Mobile usage/Mobile_usage"  // fixed import path
import CameraManagement from "./components/CameraManagement/CameraManagement"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<CityMap />} />
          <Route path="entry-exit-analytics" element={<EntryExitAnalytics />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="unavailable-employee" element={<UnavailableEmployee />} />
          <Route path="intrusion-analysis" element={<IntrusionAnalysis />} />
          <Route path="mobile-usage" element={<MobileUsage />} />         
          <Route path="camera-management" element={<CameraManagement />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
