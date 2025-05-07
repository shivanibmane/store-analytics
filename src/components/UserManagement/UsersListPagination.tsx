import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"


const UsersListPagination = ({ setCurrentPage, currentPage, noOfPages }: any) => {
  const handlePageChange = (n: number) => {
    setCurrentPage(n)
  }

  const getNextPage = () => {
    setCurrentPage((pre: number) => pre + 1)
  }
  const getPreviousPage = () => {
    setCurrentPage((pre: number) => pre - 1)
  }
  return (

    <Pagination className="py-4">
      <PaginationContent className="cursor-pointer">
        <PaginationItem >
          <PaginationPrevious aria-disabled={currentPage <= 1}
            className={
              currentPage <= 0 ? "pointer-events-none opacity-50" : "text-[#F92609]"
            } onClick={() => getPreviousPage()}><FaAngleLeft />
          </PaginationPrevious>
        </PaginationItem>
        {[...Array(noOfPages).keys()].map((n) =>
          <PaginationItem key={n} className={currentPage === n ? "border border-gray-400 rounded-md bg-[#F92609] text-accent" : ""}>
            <PaginationLink onClick={() => handlePageChange(n)}>{n + 1}</PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext aria-disabled={currentPage === noOfPages - 1}
            className={
              currentPage === noOfPages - 1 ? "pointer-events-none opacity-50" : "text-[#F92609]"
            } onClick={() => getNextPage()}><FaAngleRight />
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>



  )
}

export default UsersListPagination
