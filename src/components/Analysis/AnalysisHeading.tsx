// components/common/PageHeader.tsx
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const AnalysisHeading = ({ title }: { title: string }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-2">
      <button
        className="flex items-center pr-2 text-[#F92609] border-[1px] border-[#F92609] rounded-full font-extralight cursor-pointer hover:scale-105 duration-150"
        onClick={() => navigate("/analysis")}
      >
        <ChevronLeft className="w-5" />
        <span>Back</span>
      </button>
      <h1 className="text-md font-semibold">{title}</h1>
    </div>
  );
};

export default AnalysisHeading;
