import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import CityMap from "./components/Map/CityMap"
import UserManagement from "./components/UserManagement/UserManagement"
import EntryExitAnalytics from "./components/EntryExitAnalytics/EntryExitAnalytics"
import UnavailableEmployee from "./components/UnavailableEmployee/UnavailableEmployee"
import IntrusionAnalysis from "./components/IntrusionAnalysis/IntrusionAnalysis"
import Mobile_usage from "./components/Mobile usage/Mobile_usage"


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
          <Route path="/Mobile-usage" element={<Mobile_usage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
