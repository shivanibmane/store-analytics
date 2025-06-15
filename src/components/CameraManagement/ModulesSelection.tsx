import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { RxCross2 } from "react-icons/rx";


const modulesList = [
  "Intrusion",
  "Entry Exit",
  "Employee Unavailability",
  "Occupancy Monitoring",
  "Mobile Usage",
  "Camera Tempering",
  "Customer Staff Ratio",
  "Billing Counter",
  "Dwell Time",
  "Billing Staff Absence",
  "Fall/Slip"

];
const ModulesSelection = ({ formData, setFormData }: any) => {

  const handleModuleChange = (module: string) => {
    setFormData((prev: any) => {
      const alreadySelected = prev.modules.includes(module);
      const updatedModules = alreadySelected
        ? prev.modules.filter((m: any) => m !== module)
        : [...prev.modules, module];

      return { ...prev, modules: updatedModules };
    });
  };

  return (
    <div>
      <Label htmlFor="modules" style={{ color: '#F92609' }} className="mb-2">Modules</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full border justify-start text-left overflow-x-auto flex gap-2 min-h-[40px] font-normal no-scrollbar items-center border-gray-200"
          >
            {formData.modules.length > 0 ? (
              formData.modules.map((module: any) => (
                <span
                  key={module}
                  className="flex items-center border border-[#F92609]  px-2 py-1 rounded-full text-sm"
                >
                  {module}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleModuleChange(module);
                    }}
                    className="ml-2"
                  >
                    <RxCross2 />
                  </button>
                </span>
              ))
            ) : (
              <span className="text-gray-500 ">None</span>
            )}
          </Button>

        </PopoverTrigger>
        <PopoverContent className="w-[300px] sm:w-[400px] lg:w-[450px] h-[150px] px-4 overflow-y-scroll no-scrollbar" side="bottom"
        >
          {modulesList.map((module) => (
            <div key={module} className="flex items-center space-x-2 py-1">
              <Checkbox
                id={module}
                checked={formData.modules.includes(module)}
                onCheckedChange={() => handleModuleChange(module)}
                className="data-[state=checked]:bg-[#F92609] data-[state=checked]:border-[#F92609]"
              />
              <label htmlFor={module} className="text-sm cursor-pointer">
                {module}
              </label>
            </div>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default ModulesSelection
