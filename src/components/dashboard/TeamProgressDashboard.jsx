import React from "react";
import ReactApexChart from "react-apexcharts";

const TeamProgressDashboard = () => {
  const chartOptions = {
    series: [90, 85, 70],
    colors: ["#1C64F2", "#16BDCA", "#FDBA8C"],
    chart: {
      height: 380,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        track: {
          background: "#E5E7EB",
        },
        hollow: {
          margin: 0,
          size: "32%",
        },
        dataLabels: {
          show: false,
        },
      },
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -23,
        bottom: -20,
      },
    },
    labels: ["Done", "In progress", "To do"],
    legend: {
      show: true,
      position: "bottom",
      fontFamily: "Inter, sans-serif",
    },
    tooltip: {
      enabled: true,
    },
  };

  return (
    <div className="max-w-sm w-full  rounded-lg shadow bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between mb-3">
        <div className="flex items-center">
          <div className="flex justify-center items-center">
            <h5 className="text-xl font-bold leading-none text-white pe-1">
              Your team's progress
            </h5>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 p-3 rounded-lg">
        <div className="grid grid-cols-3 gap-3 mb-2">
          <dl className="bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
            <dt className="w-8 h-8 rounded-full bg-gray-500 text-orange-300 text-sm font-medium flex items-center justify-center mb-1">
              12
            </dt>
            <dd className="text-orange-300 text-sm font-medium">
              To do
            </dd>
          </dl>
          <dl className="bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
            <dt className="w-8 h-8 rounded-full bg-gray-500 text-teal-300 text-sm font-medium flex items-center justify-center mb-1">
              23
            </dt>
            <dd className="text-teal-300 text-sm font-medium">
              In progress
            </dd>
          </dl>
          <dl className="bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
            <dt className="w-8 h-8 rounded-full bg-gray-500 text-blue-300 text-sm font-medium flex items-center justify-center mb-1">
              64
            </dt>
            <dd className="text-blue-300 text-sm font-medium">
              Done
            </dd>
          </dl>
        </div>
      </div>

      {/* Radial Chart */}
      <div className="py-6" id="radial-chart">
        <ReactApexChart
          options={chartOptions}
          series={chartOptions.series}
          type="radialBar"
          height={380}
        />
      </div>

      <div className="grid grid-cols-1 items-center border-t border-gray-700 justify-between">
        <div className="flex justify-between items-center pt-5">
          <button
            className="text-sm font-medium text-gray-400 text-center inline-flex items-center hover:text-white"
            type="button"
          >
            Last 7 days
          </button>
          <a
            href="#"
            className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-500 hover:bg-gray-700 focus:ring-gray-700 border-gray-700 px-3 py-2"
          >
            Progress report
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamProgressDashboard;
