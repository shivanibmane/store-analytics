import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { LuMapPinned } from "react-icons/lu";
import { IoAnalyticsOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { FaRegChartBar } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { IoCameraOutline } from "react-icons/io5";
import { RiBarChartFill } from "react-icons/ri";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { BsPieChart } from "react-icons/bs";
import facegenie_logo from "../assets/facegenie_logo.png"
import resoluteai_logo from "../assets/resoluteai_logo.webp"
import { Link } from "react-router-dom";

const sidebarMenu = [{ id: 1, name: "City Map", icon: <LuMapPinned />, path: "/" }, { id: 2, name: "User Management", icon: <LuUsers />, path: "/user-management", }, { id: 3, name: "Entry/Exit Analytics", icon: <IoAnalyticsOutline />, path: "/entry-exit-analytics" }, { id: 4, name: "Intrusion Analysis", icon: <FaRegChartBar />, path: "/intrusion-analysis" }, { id: 5, name: "Unavailable Employee", icon: < FaChartLine />, path: "/unavilable-employee" }, { id: 6, name: "Camera Management", icon: <IoCameraOutline />, path: "/camera-management" }, { id: 7, name: "Occupancy Monitoring", icon: <LuChartNoAxesCombined />, path: "/occupancy-monitoring" }, { id: 8, name: "Mobile Usage", icon: <RiBarChartFill />, path: "/mobile-usage" }, { id: 9, name: "Camera Tampering", icon: <BsPieChart />, path: "/camera-tampering" }];
const AppSidebar = () => {
  return (
    <Sidebar className="border-r-4 border-[#F92609]" >
      <SidebarHeader><img src={facegenie_logo} alt="logo" /></SidebarHeader>
      <SidebarContent className="px-3 py-2">
        <SidebarMenu>
          <SidebarMenuItem>{sidebarMenu.map((menu) => (
            <SidebarMenuButton key={menu.name} asChild>
              <Link to={menu.path} className="cursor-pointer" >
                {menu.icon}
                <span>{menu.name}</span>
              </Link>
            </SidebarMenuButton>
          ))}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter><img src={resoluteai_logo} alt="logo" /></SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
