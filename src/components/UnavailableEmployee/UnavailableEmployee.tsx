import Header from "../Header";
import UnavailableEmployeeBar from "./UnavailableEmployeeBar";
import UnavailableEmployeeCard from "./UnavailableEmployeeCard";
import UnavailableEmployeeTrends from "./UnavailableEmployeetrends";

const UnavailableEmployee: React.FC = () => {
  return (
    <div className="w-full">
      <Header title="Unavailable Employee" />
      <div className="px-4 py-3 ">
        <div className="flex flex-col xl:flex-row mb-4 gap-3">
          <UnavailableEmployeeBar />
          <UnavailableEmployeeCard />
        </div>
        <UnavailableEmployeeTrends />
      </div>
    </div>
  );
};

export default UnavailableEmployee;