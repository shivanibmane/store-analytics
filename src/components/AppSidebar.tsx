import {Sidebar,SidebarContent,SidebarFooter,SidebarHeader,SidebarMenu,SidebarMenuButton,SidebarMenuItem,} from "@/components/ui/sidebar"
import { LuMapPinned, LuUsers } from "react-icons/lu"
import { IoAnalyticsOutline, IoCameraOutline } from "react-icons/io5"
import { FaRegChartBar } from "react-icons/fa"
import { FaChartLine } from "react-icons/fa6"
import { MdOutlinePhoneIphone } from "react-icons/md"

import facegenie_logo from "../assets/facegenie_logo.png"
import resoluteai_logo from "../assets/resoluteai_logo.webp"
import { Link } from "react-router-dom"

const sidebarMenu = [
  { id: 1, name: "City Map", icon: <LuMapPinned />, path: "/" },{ id: 2, name: "User Management", icon: <LuUsers />, path: "/user-management" },{ id: 3, name: "Entry/Exit Analytics", icon: <IoAnalyticsOutline />, path: "/entry-exit-analytics" },{ id: 4, name: "Intrusion Analysis", icon: <FaRegChartBar />, path: "/intrusion-analysis" },{ id: 5, name: "Unavailable Employee", icon: <FaChartLine />, path: "/unavailable-employee" },{ id: 6, name: "Mobile Usage", icon: <MdOutlinePhoneIphone />, path: "/mobile-usage" },{ id: 7, name: "Camera Management", icon: <IoCameraOutline />, path: "/camera-management" },
]

const AppSidebar = () => {
  return (
    <Sidebar className="border-r-4 border-[#F92609]">
      <SidebarHeader>
        <img src={facegenie_logo} alt="FaceGenie logo" />
      </SidebarHeader>

      <SidebarContent className="px-3 py-2">
        <SidebarMenu>
          {sidebarMenu.map((menu) => (
            <SidebarMenuItem key={menu.id}>
              <SidebarMenuButton asChild>
                <Link to={menu.path} className="cursor-pointer">
                  {menu.icon}
                  <span>{menu.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <img src={resoluteai_logo} alt="ResoluteAI logo" />
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
