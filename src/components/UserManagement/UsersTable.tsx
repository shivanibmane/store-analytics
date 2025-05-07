import { Edit, Eye } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { FiUser } from "react-icons/fi";
import { BsBriefcase } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";

const UsersTable = ({ filteredUsers, start, end }: any) => {

  return (
    <>
      <Table className="">
        <TableHeader>
          <TableRow >
            <TableHead className="text-[#F92609]"> <div className="flex gap-1 items-center"><FiUser /><span>Name</span></div></TableHead>
            <TableHead className="text-[#F92609]"> <div className="flex gap-1 items-center"><BsBriefcase /><span>Designation</span></div></TableHead>
            <TableHead className="text-[#F92609]"> <div className="flex gap-1 items-center"><FiPhone /><span>Phone</span></div></TableHead>
            <TableHead className="text-[#F92609] hidden lg:table-cell"> <div className="flex gap-1 items-center"><FiUsers /><span>Roles</span></div></TableHead>
            <TableHead className="text-[#F92609]   hidden lg:table-cell"> <div className="flex gap-1 items-center"><span>Created At</span></div></TableHead>
            <TableHead className="text-[#F92609]  hidden lg:table-cell"> <div className="flex gap-1 items-center"><span>Actions</span></div></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.slice(start, end).map((user: any) => (
            <TableRow key={user.id} className="cursor-pointer">
              <TableCell >{user.name}</TableCell>
              <TableCell >{user.designation}</TableCell>
              <TableCell>{user.phoneNumber}</TableCell>
              <TableCell className="hidden lg:table-cell">{user.role}</TableCell>
              <TableCell className=" hidden lg:table-cell " >{user.createdAt}</TableCell>
              <TableCell className=" hidden lg:table-cell  text-[#F92609]" ><div className="flex gap-2"><Edit /><Eye /></div></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </>
  )
}

export default UsersTable
