import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PlusIcon } from "lucide-react"

const AddUserDialog = () => {
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button className="sm:flex  text-white rounded-md">
          <PlusIcon />
          <span>Add User</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right text-[#F92602] ">
              Name
            </Label>
            <Input id="name" className="col-span-3  " />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="designation" className="text-right text-[#F92602]">
              Designation
            </Label>
            {/* <Input id="designation" className="col-span-3" /> */}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right text-[#F92602]">
              Phone
            </Label>
            <Input id="phone" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4 ">
            <Label htmlFor="role" className="text-right text-[#F92602] ">
              Role
            </Label>
            <Input id="role" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Add</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export default AddUserDialog