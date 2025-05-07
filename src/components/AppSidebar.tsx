import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { LuMapPinned } from "react-icons/lu";
import { IoAnalyticsOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import facegenie_logo from "../assets/facegenie_logo.png"
import resoluteai_logo from "../assets/resoluteai_logo.webp"
import { Link } from "react-router-dom";

const sidebarMenu = [{ id: 1, name: "City Map", icon: <LuMapPinned />, path: "/" }, { id: 2, name: "Analytics", icon: <IoAnalyticsOutline />, path: "/analytics" }, { id: 3, name: "User Management", icon: <LuUsers />, path: "/user-management" }]


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
