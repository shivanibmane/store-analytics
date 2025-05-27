import UnavailableEmployeeBar from "./UnavailableEmployeeBar";
import UnavailableEmployeeCard from "./UnavailableEmployeeCard";
import UnavailableEmployeeTrends from "./UnavailableEmployeetrends";

const UnavailableEmployee: React.FC = () => {
  return (
    <div className="w-full">
      <div >
        <h1 className="text-1xl font-semibold mb-1 text-center lg:text-start">Unavailable Employee</h1>
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