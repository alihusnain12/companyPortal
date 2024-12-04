"use client";
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import Box from "@mui/material/Box";
import BasicDatePicker from "@/components/datepicker";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import  { useState } from 'react';
import Revenue from "@/components/revenue";
import { FaArrowRight } from "react-icons/fa6";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Transactions',
      data: [10, 15, 12, 8, 20, 18, 22, 25, 20, 18, 24, 25],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        font: {
          size: 10,
        },
      },
    },
    title: {
      display: true,
      text: '',
    },
  },
  scales: {
    x: {
      type: 'category',
      ticks: {
        font: {
          size: 10,
        },
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        font: {
          size: 10,
        },
      },
    },
  },
};

const ReportAndAnalytic = () => {
  const [viewRange, setViewRange] = useState('Historic');

  const handleViewRangeChange = (range) => {
    setViewRange(range);
  };

  return (
    <div>
      <div className="bg-white p-4 flex justify-between rounded-md shadow-xl">
        <div>
          <p className="text-2xl font-semibold pb-2">Good morning, Jack</p>
          <p className="text-gray-500 text-sm">
            Here are Alerts for new leads, pending approvals, or updates from
            July 19 - July 25.
          </p>
        </div>
        <div>
          <BasicDatePicker />
        </div>
      </div>
      {/* cards and graph */}
      <div className="bg-white rounded-md shadow-xl mt-10 p-4 flex">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* cards */}
          <div className="bg-[#FFEFF18C] p-4 rounded-md shadow-lg">
            <p className="text-xl font-semibold">Total Clients</p>
            <div className="flex mt-6 justify-evenly">
              <p className="text-5xl font-bold">45</p>
            </div>
          </div>
          <div className="bg-[#FFEFF18C] p-4 rounded-md shadow-lg">
            <p className="text-xl font-semibold">New Leads This Month</p>
            <div className="flex mt-6 justify-evenly">
              <p className="text-5xl font-bold">18</p>
            </div>
          </div>
          <div className="bg-[#FFEFF18C] p-4 rounded-md shadow-lg">
            <p className="text-xl font-semibold">Total Clients</p>
            <div className="flex mt-6 justify-evenly">
              <p className="text-5xl font-bold">45</p>
            </div>
          </div>
          <div className="bg-[#FFEFF18C] p-4 rounded-md shadow-lg">
            <p className="text-xl font-semibold">New Leads This Month</p>
            <div className="flex mt-6 justify-evenly">
              <p className="text-5xl font-bold">18</p>
            </div>
          </div>
        </div>
        {/* graph */}
        <Box
          sx={{
            backgroundColor: "#EEFAF7",
            borderRadius: 2,
            boxShadow: 1,
            padding: 2,
            marginLeft: 4,
            flexShrink: 0,
          }}
        >
          <div className="flex justify-between items-center">
            <p className="font-bold">Revenue Summary</p>
            <p className="text-gray-500 text-sm">See statistics for all time</p>
          </div>
          <p className="font-extrabold pt-3">+3.15%</p>
          <BarChart
            series={[
              { data: [4, 2, 5, 4, 1], stack: "A" },
              { data: [2, 8, 1, 3, 1], stack: "A" },
              { data: [14, 6, 5, 8, 9] },
            ]}
            barLabel={(item, context) => {
              if ((item.value ?? 0) > 10) {
                return "";
              }
              return context.bar.height < 60 ? null : item.value?.toString();
            }}
            width={370}
            height={240}
          />
        </Box>
      </div>
      {/* graph and circle in a row */}
      <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-8 h-full">
        {/* circle */}
        <div className="bg-white rounded-md shadow-xl p-4 w-full lg:w-1/2 flex flex-col items-center">
          <div className="w-full">
            <p className="text-lg font-bold mb-2">Conversion Rate</p>
          </div>
          <div className="flex items-center space-x-4">
            <svg width="200" height="200">
              <circle
                r="70"
                cx="100"
                cy="100"
                fill="transparent"
                stroke="lightgrey"
                strokeWidth="30"
                strokeDasharray="439.8"
                strokeDashoffset="0"
              />
              <circle
                r="70"
                cx="100"
                cy="100"
                fill="transparent"
                stroke="blue"
                strokeWidth="30"
                strokeDasharray="439.8"
                strokeDashoffset="66"
              />
            </svg>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex  items-center space-x-4">
                <div className="w-4 h-4 bg-blue-500 rounded-md flex items-center justify-center"></div>
                  <p className="text-black">80%</p>
                
              </div>
              <div className="flex  items-center space-x-3">
                <div className="w-4 h-4 bg-gray-300 rounded-md flex items-center justify-center"></div>
                  <p className="text-black">20%</p>
                
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-8 cursor-pointer">
            <p className="text-blue-400 ">View All Application</p>
            <FaArrowRight className="text-blue-400"/>
          </div>
        </div>
        {/* line graph */}
        <div className="graph-section w-full lg:w-2/3 bg-white p-4 shadow-lg rounded-lg flex flex-col flex-grow">
          <h2 className="text-xl font-bold mb-2">Performance Analytics</h2>
          <h3 className="text-gray-600 mb-4">Observe behavior in time slots</h3>
          <div className="flex justify-end gap-2 mb-4">
            <button 
              onClick={() => handleViewRangeChange('7 days')} 
              className={`px-2 py-1 border rounded ${viewRange === '7 days' ? 'bg-gray-400 text-white' : 'bg-gray-100'}`}
            >
              7 days
            </button>
            <button 
              onClick={() => handleViewRangeChange('30 days')} 
              className={`px-2 py-1 border rounded ${viewRange === '30 days' ? 'bg-gray-400 text-white' : 'bg-gray-100'}`}
            >
              30 days
            </button>
            <button 
              onClick={() => handleViewRangeChange('Historic')} 
              className={`px-2 py-1 border rounded ${viewRange === 'Historic' ? 'bg-gray-400 text-white' : 'bg-gray-100'}`}
            >
              Historic
            </button>
          </div>
          <div className="chart-wrapper flex-grow">
            <Line data={data} options={options} height={200} />
          </div>
        </div>
      </div>
      {/* revenue */}
      <Revenue/>
    </div>
  );
};

export default ReportAndAnalytic;
