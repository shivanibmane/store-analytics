import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { LuMapPinned } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { FaRegChartBar } from "react-icons/fa";
import { IoCameraOutline } from "react-icons/io5";

import facegenie_logo from "../assets/facegenie_logo.png";
import resoluteai_logo from "../assets/resoluteai_logo.webp";

import { Link, useLocation } from "react-router-dom";

const sidebarMenu = [
  { id: 1, name: "City Map", icon: <LuMapPinned />, path: "/" },
  { id: 2, name: "User Management", icon: <LuUsers />, path: "/user-management" },
  { id: 3, name: "Analysis", icon: <FaRegChartBar />, path: "/analysis" },
  { id: 4, name: "Camera Management", icon: <IoCameraOutline />, path: "/camera-management" },
];

const AppSidebar = () => {
  const location = useLocation();

  return (
    <Sidebar className="border-r-4 border-[#F92609]">
      <SidebarHeader>
        <img src={facegenie_logo} alt="FaceGenie logo" />
      </SidebarHeader>

      <SidebarContent className="px-3 py-2">
        <SidebarMenu>
          {sidebarMenu.map((menu) => {
            // Use startsWith to match nested paths like /analysis/details
            const isActive =
              menu.path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(menu.path);

            return (
              <SidebarMenuItem key={menu.id}>
                <SidebarMenuButton asChild>
                  <Link
                    to={menu.path}
                    className={`cursor-pointer flex items-center gap-2 px-2 py-1 rounded-md transition-all duration-200 ${isActive ? "text-[#F92609] font-semibold bg-red-100" : "text-gray-700"
                      }`}
                  >
                    {menu.icon}
                    <span>{menu.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <img src={resoluteai_logo} alt="ResoluteAI logo" />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
