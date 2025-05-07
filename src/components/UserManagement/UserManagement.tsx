import { ChevronRight, SearchIcon } from "lucide-react";
import Header from "../Header";
import { Input } from "../ui/input";
import { mockUsers } from "@/assets/mock-data/mockUsers";
import UsersTable from "./UsersTable";
import { useState } from "react";
import UsersListPagination from "./UsersListPagination";
import AddUserDialog from "./AddUserDialog";

const UserManagement: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(0);
  const filteredUsers = mockUsers.filter((users) =>
    users.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const PAGE_SIZE = 4
  const totalUsers = filteredUsers.length
  const noOfPages = Math.ceil(totalUsers / PAGE_SIZE)
  const start = currentPage * PAGE_SIZE
  const end = start + PAGE_SIZE

  return (

    <>
      <div className="w-full">
        <Header title="User Management" />
        <div className="px-4 py-2 ">
          <div className="flex gap-1 text-[#F92609] items-center text-sm">
            <p>Menu</p>
            <ChevronRight className="w-4" />
            <p>User Management</p>
          </div>
          <div className="flex justify-between items-center py-3">
            <div className="relative w-8/12 sm:w-96">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <AddUserDialog />
          </div>
        </div>
        <UsersTable filteredUsers={filteredUsers} start={start} end={end} />
        <UsersListPagination noOfPages={noOfPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div >
    </>
  );
};

export default UserManagement;
