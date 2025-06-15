import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import Header from "../Header";

const analyticsPages = [
  { name: "Entry/Exit Analytics", path: "entry-exit-analytics" },
  { name: "Unavailable Employee", path: "unavailable-employee" },
  { name: "Intrusion Analysis", path: "intrusion-analysis" },
  { name: "Occupancy Monitoring", path: "occupancy-monitoring" },
  { name: "Mobile Usage", path: "mobile-usage" },
  { name: "Camera Tampering", path: "camera-tampering" },
  { name: "Billing Counter", path: "billing-counter" },
  { name: "Staff/Customers", path: "staff-customers" },
  { name: "Dwell Timing", path: "dwell-timing" },
  { name: "Fall/Slip Detection", path: "fall-slip-detection" },
  { name: "Billing Staff Absence", path: "BillingStaffAbsence" },
  { name: "HeatMap", path: "HeatMap" },
];

const Analysis = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Show cards only if the current path is exactly /page-analysis
  const isAtRootPage = location.pathname === "/analysis";

  return (
    <div className="w-full">
      <Header title="Analysis" />
      {isAtRootPage && (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {analyticsPages.map((page) => (
            <Card
              key={page.path}
              onClick={() => navigate(page.path)}
              className="cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02] border-[#F92609] "
            >
              <CardContent className="p-4 text-center font-medium text-lg text-[#F92609]">
                {page.name}
              </CardContent>
            </Card>
          ))
          }
        </div >
      )}

      {/* Render the selected chart component below */}
      <div className="p-6">
        <Outlet />
      </div>
    </div >
  );
};

export default Analysis;
