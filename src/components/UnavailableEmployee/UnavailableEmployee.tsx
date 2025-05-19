import Header from "../Header";
import UnavailableEmployeeBar from "./UnavailableEmployeeBar";
import UnavailableMostEmp_Cam from "./UnavailableMostEmp_Cam";
import UnavailableEmployeeTrends from "./UnavailableEmployeetrends";

const UnavailableEmployee: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col gap-4 pb-6 overflow-auto">
      <Header title="Unavailable-Employee" />

      <div className="px-4 py-3">
        {/* Using flex-col on small screens, row on xl like your IntrusionAnalysis */}
        <div className="flex flex-col xl:flex-row mb-4 gap-6">
          {/* Bar chart takes full width on small, grows on xl */}
          <div className="flex-1">
            <UnavailableEmployeeBar />
          </div>

          {/* Camera card with fixed width like IntrusionAnalysis's 300px on lg and above */}
          <div className="w-full lg:w-[300px] rounded-lg p-6 flex flex-col items-center justify-center min-h-0">
            <UnavailableMostEmp_Cam />
          </div>
        </div>

        {/* Trends chart full width below */}
        <div>
          <UnavailableEmployeeTrends />
        </div>
      </div>
    </div>
  );
};

export default UnavailableEmployee;
