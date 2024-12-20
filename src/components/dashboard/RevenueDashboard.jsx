import React from "react";
import ReactApexChart from "react-apexcharts";

const RevenueDashboard = () => {
  const chartOptions = {
    series: [
      {
        name: "Income",
        data: [1420, 1620, 1820, 1420, 1650, 2120],
        color: "#31C48D",
      },
      {
        name: "Expense",
        data: [788, 810, 866, 788, 1100, 1200],
        color: "#F05252",
      },
    ],
    chart: {
      type: "bar",
      height: 400,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: "100%",
        borderRadius: 6,
      },
    },
    legend: {
      show: true,
      position: "bottom",
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value) => `$${value}`,
      },
    },
    xaxis: {
      categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      labels: {
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-400",
        },
        formatter: (value) => `$${value}`,
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-400",
        },
      },
    },
    grid: {
      show: true,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -20,
      },
    },
    fill: {
      opacity: 1,
    },
  };

  return (
    <div className="min-[370px]:w-[350px] min-[420px]:w-[390px] md:w-[480px] lg:w-[360px] xl:w-[600px]  rounded-lg shadow bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between border-b border-gray-700 pb-3">
        <dl>
          <dt className="text-base font-normal :text-gray-400 pb-1">
            Profit
          </dt>
          <dd className="leading-none text-3xl font-bold text-white">
            $5,405
          </dd>
        </dl>
        <div>
          <span className=" text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md bg-green-900 text-green-300">
            <svg
              className="w-2.5 h-2.5 me-1.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13V1m0 0L1 5m4-4 4 4"
              />
            </svg>
            Profit rate 23.5%
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 py-3">
        <dl>
          <dt className="text-base font-normal text-gray-400 pb-1">
            Income
          </dt>
          <dd className="leading-none text-xl font-bold text-green-400">
            $23,635
          </dd>
        </dl>
        <dl>
          <dt className="text-base font-normal text-gray-400 pb-1">
            Expense
          </dt>
          <dd className="leading-none text-xl font-bold :text-red-500">
            -$18,230
          </dd>
        </dl>
      </div>

      <div id="bar-chart">
        <ReactApexChart
          options={chartOptions}
          series={chartOptions.series}
          type="bar"
          height={300}
          width="100%"
        />
      </div>

    </div>
  );
};

export default RevenueDashboard;
