import { Outlet } from "react-router-dom"
import AppSidebar from "./AppSidebar"
import { SidebarProvider } from "./ui/sidebar"

const Home = () => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <Outlet />
      </SidebarProvider>
    </>
  )
}

export default Home
