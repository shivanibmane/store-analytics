import { Button } from "./ui/button"
import { SidebarTrigger } from "./ui/sidebar"
import avatar_img from "../assets/profile-pic.jpg"

const Header = ({ title }: any) => {
  return (
    <div className="border-b-2 border-[#F92609] pb-2" >
      <SidebarTrigger className="text-[#F92609]" />
      <div className="flex flex-col-reverse gap-1 sm:flex sm:flex-row  justify-between items-center px-2 sm:px-4 w-full ">
        <h1 className="sm:block sm:text-1xl xl:text-2xl font-semibold">{title}</h1>
        <p className="text-2xl sm:text-2xl xl:text-4xl font-semibold text-[#F92609] mx-auto">Store Analytics Monitoring</p>
        <div className="hidden sm:flex items-center gap-2">
          <img src={avatar_img} className="w-12 h-12 rounded-full bg-red-400" alt="Profile" />
          <div className=" space-y-1 ">
            <p className="sm:text-sm font-semibold">SHIVA KUMAR</p>
            <Button className=" text-white">Manager</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
