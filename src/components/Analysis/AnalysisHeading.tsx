// components/common/PageHeader.tsx
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const AnalysisHeading = ({ title }: { title: string }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-2">
      <button
        className="flex items-center gap-1 text-[#F92609] hover:underline border-[1px] border-[#F92609] rounded-full font-extralight cursor-pointer "
        onClick={() => navigate("/analysis")}
      >
        <IoArrowBack />
      </button>
      <h1 className="text-md font-semibold">{title}</h1>
    </div>
  );
};

export default AnalysisHeading;
