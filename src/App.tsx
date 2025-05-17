import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import CityMap from "./components/Map/CityMap"
import UserManagement from "./components/UserManagement/UserManagement"
import EntryExitAnalytics from "./components/EntryExitAnalytics/EntryExitAnalytics"
import UnavailableEmp_cam from "./components/EmployeCameras/UnavailableEmp_cam"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<CityMap />} />
          <Route path="/entry-exit-analytics" element={<EntryExitAnalytics />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/un-employee_cam" element={<UnavailableEmp_cam/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
