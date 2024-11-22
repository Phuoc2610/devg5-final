import React from "react";
import ReactApexChart from "react-apexcharts";

const WebsiteTrafficDashboard = () => {
  const chartOptions = {
    series: [52.8, 26.8, 20.4],
    colors: ["#1C64F2", "#16BDCA", "#9061F9"],
    chart: {
      height: 420,
      width: "100%",
      type: "pie",
    },
    stroke: {
      colors: ["white"],
    },
    plotOptions: {
      pie: {
        size: "100%",
        dataLabels: {
          offset: -25,
        },
      },
    },
    labels: ["Direct", "Organic search", "Referrals"],
    dataLabels: {
      enabled: true,
      style: {
        fontFamily: "Inter, sans-serif",
      },
    },
    legend: {
      position: "bottom",
      fontFamily: "Inter, sans-serif",
    },
  };

  return (
    <div className="min-[370px]:w-[350px] min-[420px]:w-[390px] md:w-[480px] lg:w-[360px]  bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between items-start w-full">
        <div className="flex-col items-center">
          <div className="flex items-center mb-1">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white me-1">
              Website traffic
            </h5>
          </div>
        </div>
        <button
          className="inline-flex items-center text-blue-700 dark:text-blue-600 font-medium hover:underline"
        >
          31 Nov - 31 Dev
        </button>
      </div>

      <div className="py-6">
        <ReactApexChart
          options={chartOptions}
          series={chartOptions.series}
          type="pie"
          height={300}
        />
      </div>

   
    </div>
  );
};

export default WebsiteTrafficDashboard;
