import AnalyticsHeading from "../Analysis/AnalysisHeading";
import UnavailableEmployeeBar from "./UnavailableEmployeeBar";
import UnavailableEmployeeCard from "./UnavailableEmployeeCard";
import UnavailableEmployeeTrends from "./UnavailableEmployeetrends";

const UnavailableEmployee: React.FC = () => {
  return (
    <div className="w-full">
      <div >
        <AnalyticsHeading title={"Unavailable Employee Analysis"} />
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