import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { MdFilterList } from 'react-icons/md';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { GoArrowDownLeft } from 'react-icons/go';
import { HiArrowUpRight } from 'react-icons/hi2';

import pic from '../app/public/logo.png'; 

const leads = [
  {
    id: 1,
    name: 'Brooklyn Simmons',
    source: 'Website',
    status: 'New',
    nextAction: 'Contact Lead',
    manager: 'Sarah Johnson',
    image: pic, // Local image path
  },
  {
    id: 2,
    name: 'Darlene Robertson',
    source: 'Ad Campaign',
    status: 'Follow-Up',
    nextAction: 'Send Proposal',
    manager: 'Sarah Johnson',
    image: pic,
  },
  {
    id: 3,
    name: 'Cameron Williamson',
    source: 'Referral',
    status: 'Converted',
    nextAction: 'Onboarding',
    manager: 'Sarah Johnson',
    image: pic,
  },
  {
    id: 4,
    name: 'Jerome Bell',
    source: 'Website',
    status: 'New',
    nextAction: 'Contact Lead',
    manager: 'Sarah Johnson',
    image: pic,
  },
  {
    id: 5,
    name: 'Kathryn Murphy',
    source: 'Website',
    status: 'New',
    nextAction: 'Send Proposal',
    manager: 'Sarah Johnson',
    image: pic,
  },
];

const LeadManagementTable = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start mt-10">
      <div className="bg-white shadow-xl rounded-md w-full lg:w-2/3 p-4 mb-6 lg:mb-0 lg:min-h-full lg:flex lg:flex-col lg:h-[500px]">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h2 className="text-lg font-bold mb-2 md:mb-0">Lead Management</h2>
          <div className="flex space-x-2">
            <button className="flex items-center border border-gray-500 text-gray-500 px-2 py-1 rounded text-sm">
              <BiSearch className="mr-2" /> Search
            </button>
            <button className="flex items-center border border-gray-500 text-gray-500 px-2 py-1 rounded text-sm">
              <MdFilterList className="mr-2" /> Filter
            </button>
          </div>
        </div>
        <div className="flex-grow overflow-auto">
          <table className="min-w-full divide-y divide-gray-200 text-sm h-full">
            <thead>
              <tr>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lead Name</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Next Action</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned Manager</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {leads.map((lead) => (
                <tr key={lead.id}>
                  <td className="px-3 py-2 whitespace-nowrap">{lead.id}</td>
                  <td className="px-3 py-2 whitespace-nowrap flex items-center">
                    <Image src={lead.image} alt={`${lead.name}`} width={30} height={30} className="w-8 h-8 rounded-full mr-2" />
                    {lead.name}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">{lead.source}</td>
                  <td className="px-3 py-2 whitespace-nowrap text-center">{lead.status}</td>
                  <td className="px-3 py-2 whitespace-nowrap">{lead.nextAction}</td>
                  <td className="px-3 py-2 whitespace-nowrap">{lead.manager}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4">
          <button className="flex items-center px-2 py-1 border rounded-md text-sm">
            <FaArrowLeft className="mr-2" /> Previous
          </button>
          <button className="flex items-center px-2 py-1 border rounded-md text-sm">
            Next <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
      <div className="bg-white p-4 rounded-md shadow-md w-full lg:w-1/3 lg:ml-6 lg:min-h-full lg:h-[500px]">
        <p className="text-lg font-bold">Recent Transaction</p>
        <div className="mt-2">
          <p className="font-bold">5 August, 2024</p>
          <div className="mt-3 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <GoArrowDownLeft size={20} className="border p-1 rounded-md border-[#6FAB23]" />
              <div>
                <p>Tax return</p>
                <p>Income</p>
              </div>
            </div>
            <div>
              <p>10:42pm</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="mt-3 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <HiArrowUpRight size={20} className="border p-1 rounded-md border-[#D32F2F]" />
              <div>
                <p>Invoice Payment</p>
                <p>Expense</p>
              </div>
            </div>
            <div>
              <p>11:15am</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="font-bold">4 August, 2023</p>
          <div className="mt-3 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <GoArrowDownLeft size={20} className="border p-1 rounded-md border-[#6FAB23]" />
              <div>
                <p>Invoice Payment</p>
                <p>Expense</p>
              </div>
            </div>
            <div>
              <p>11:15am</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="mt-3 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <GoArrowDownLeft size={20} className="border p-1 rounded-md border-[#6FAB23]" />
              <div>
                <p>Invoice Payment</p>
                <p>Expense</p>
              </div>
            </div>
            <div>
              <p>11:15am</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="mt-3 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <GoArrowDownLeft size={20} className="border p-1 rounded-md border-[#6FAB23]" />
              <div>
                <p>Invoice Payment</p>
                <p>Expense</p>
              </div>
            </div>
            <div>
              <p>11:15am</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="mt-3 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <GoArrowDownLeft size={20} className="border p-1 rounded-md border-[#6FAB23]" />
              <div>
                <p>Invoice Payment</p>
                <p>Expense</p>
              </div>
            </div>
            <div>
              <p>11:15am</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadManagementTable;
