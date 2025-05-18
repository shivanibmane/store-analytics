import Header from "../Header"
import IntrusionAnalysisBarChart from "./IntrusionAnalysisBarChart"
import IntrusionAnalysisLineChart from "./IntrusionAnalysisLineChart"

const IntrusionAnalysis = () => {
  return (
    <div className="w-full">
      <Header title="Intrusion Analysis" />
      <div className="px-4 py-3 ">
        <div className="flex flex-col xl:flex-row mb-4 gap-3">
          <IntrusionAnalysisBarChart />
          <div className="w-full lg:w-[300px] border border-[#F92609] rounded-lg p-6 flex flex-col items-center justify-center min-h-0">
            <h3 className="text-lg font-semibold mb-2 text-[#F92609] text-center">Max Camera Intrusion Count</h3>
            <p className="text-2xl font-bold ">100</p>
          </div>
        </div>
        <IntrusionAnalysisLineChart />
      </div>
    </div>
  )
}

export default IntrusionAnalysis
