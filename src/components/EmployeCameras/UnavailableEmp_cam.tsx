import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { Card, CardContent } from "@/components/ui/card";
import Header from "../Header";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const UnavailableEmp_cam: React.FC = () => {

  const barData = {
    labels: ["1 PM", "2 PM", "3 PM"],
    datasets: [
      {
        label: "Unavailable Employees",
        data: [50, 20, 0],
        backgroundColor: "rgba(239, 68, 68, 0.7)", 
      },
    ],
  };


  const lineData = {
    labels: ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM"],
    datasets: [
      {
        label: "Unavailable Employees Trend",
        data: [10, 15, 25, 40, 50, 20, 0],
        borderColor: "rgba(239, 68, 68, 0.8)",
        backgroundColor: "rgba(239, 68, 68, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };


  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: "#1f2937" },
      },
      x: { ticks: { color: "#1f2937" } },
    },
    plugins: { legend: { display: false } },
  };


  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: "#1f2937" },
      },
      x: { ticks: { color: "#1f2937" } },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="w-full h-screen bg-gray-50 flex flex-col gap-4 overflow-auto">
      <Header title="Unavailable-Employee" />
     
     
      <div className="flex flex-col gap-4 h-full px-4">
        
        <div className="flex flex-wrap gap-4 h-1/2">
         
          <Card className="w-3/4 rounded-xl border border-red-600 bg-white shadow-md">
            <CardContent className="p-2 h-full">
              <h3 className="text-lg font-medium text-gray-700 mb-1">Unavailable Employees by Hour</h3>
              <div className="h-5/6">
                <Bar data={barData} options={barOptions} />
              </div>
            </CardContent>
          </Card>
         
    
          <Card className="w-56 rounded-xl border border-red-600 bg-white shadow-md flex items-center">
            <CardContent className="p-3 text-center">
              <p className="text-xs font-medium text-gray-700 mb-1">
                Camera with most unavailable employees
              </p>
              <p className="text-xl font-bold text-red-600">Cam-05 (50)</p>
            </CardContent>
          </Card>
        </div>
       
       
        <Card className="w-11/12 mx-auto h-1/3 rounded-xl border border-red-600 bg-white shadow-md">
          <CardContent className="p-2 h-full">
            <h3 className="text-lg font-medium text-gray-700 mb-1">Unavailable Employees - Daily Trend</h3>
            <div className="h-5/6">
              <Line data={lineData} options={lineOptions} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UnavailableEmp_cam;