"use client";
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

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

const Graph = () => {
  const [viewRange, setViewRange] = useState('Historic');

  const handleViewRangeChange = (range) => {
    setViewRange(range);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-8 h-full">
      {/* Graph Section */}
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
      {/* Circle Card Section */}
      <div className='bg-white rounded-md shadow-xl flex p-4 w-full lg:w-1/2 justify-center items-center'>
        <div className="  w-full">
          <p className='text-lg font-bold mb-2'>Average Time per Task</p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li className='text-gray-400 text-sm'>Tasks completed by each team member: 50%</li>
            <li className='text-gray-400 text-sm'>Tasks completed by each team member: 50%</li>
            <li className='text-gray-400 text-sm'>Tasks completed by each team member: 50%</li>
            <li className='text-gray-400 text-sm'>Tasks completed by each team member: 50%</li>
          </ul></div>
          <div>
            <svg width="200" height="200">
              <circle r="70" cx="100" cy="100" fill="transparent" stroke="lightgrey" strokeWidth="20" strokeDasharray="439.8" strokeDashoffset="0" />
              <circle r="70" cx="100" cy="100" fill="transparent" stroke="blue" strokeWidth="20" strokeDasharray="439.8" strokeDashoffset="66" />
            </svg>
          </div>
        
      </div>
    </div>
  );
};

export default Graph;
