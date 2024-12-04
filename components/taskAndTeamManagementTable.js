import React from "react";
import pic from "../app/public/logo.png";
import { BiSearch } from "react-icons/bi";
import { MdFilterList } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const leads = [
  {
    id: 1,
    name: "Brooklyn Simmons",
    image: pic, // Local image path
    taskname: "Review Tax Returns",
    date: "Oct 25, 2024",
    status: "In Progress",
  },
  {
    id: 2,
    name: "Darlene Robertson",
    image: pic,
    taskname: "Review Tax Returns",
    date: "Oct 25, 2024",
    status: "Pending",
  },
  {
    id: 3,
    name: "Cameron Williamson",
    image: pic,
    taskname: "Review Tax Returns",
    date: "Oct 25, 2024",
    status: "Complete",
  },
  {
    id: 4,
    name: "Jerome Bell",
    image: pic,
    taskname: "Review Tax Returns",
    date: "Oct 25, 2024",
    status: "In Progress",
  },
  {
    id: 5,
    name: "Kathryn Murphy",
    image: pic,
    taskname: "Review Tax Returns",
    date: "Oct 25, 2024",
    status: "Complete",
  },
];

const TaskAndTeamManagementTable = () => {
  return (
    <div className="mt-10 flex flex-col lg:flex-row lg:justify-between items-start lg:min-h-[500px] lg:space-x-6">
      <div className="bg-white shadow-xl rounded-md w-full lg:w-2/3 p-6 lg:flex lg:flex-col">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h2 className="text-xl font-bold mb-2 md:mb-0">Lead Management</h2>
          <div className="flex space-x-2">
            <button className="flex items-center border border-gray-300 bg-gray-100 text-gray-700 px-3 py-2 rounded text-sm hover:bg-gray-200">
              <BiSearch className="mr-2" /> Search
            </button>
            <button className="flex items-center border border-gray-300 bg-gray-100 text-gray-700 px-3 py-2 rounded text-sm hover:bg-gray-200">
              <MdFilterList className="mr-2" /> Filter
            </button>
          </div>
        </div>
        <div className="flex-grow overflow-auto">
          <table className="min-w-full divide-y divide-gray-200 text-sm h-full">
            <thead>
              <tr>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task Name</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned to</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due to</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {leads.map((lead) => (
                <tr key={lead.id}>
                  <td className="px-3 py-2 whitespace-nowrap">{lead.id}</td>
                  <td className="px-3 py-2 whitespace-nowrap">{lead.taskname}</td>
                  <td className="px-3 py-2 whitespace-nowrap flex items-center">
                    <Image src={lead.image} alt={`${lead.name}`} width={30} height={30} className="w-8 h-8 rounded-full mr-2" />
                    {lead.name}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">{lead.date}</td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      lead.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                      lead.status === 'Pending' ? 'bg-red-100 text-red-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {lead.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4">
          <button className="flex items-center px-3 py-2 border border-gray-300 bg-gray-100 rounded-md text-sm hover:bg-gray-200">
            <FaArrowLeft className="mr-2" /> Previous
          </button>
          <button className="flex items-center px-3 py-2 border border-gray-300 bg-gray-100 rounded-md text-sm hover:bg-gray-200">
            Next <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
      <div className="bg-white rounded-md p-6 shadow-xl lg:w-1/3 lg:flex lg:flex-col lg:min-h-full">
        <p className="text-xl font-bold">Notifications</p>
        <ul className="list-disc ml-5 mt-3 text-gray-700 text-sm space-y-4 flex-grow">
          <li className="mt-6">You have received a new lead. You may have to follow up and convert to a client.</li>
          <li>You have received a new lead. You may have to follow up and convert to a client.</li>
          <li>You have received a new lead. You may have to follow up and convert to a client.</li>
          <li>You have received a new lead. You may have to follow up and convert to a client.</li>
          <li>You have received a new lead. You may have to follow up and convert to a client.</li>
          <li>You have received a new lead. You may have to follow up and convert to a client.</li>
        </ul>
      </div>
    </div>
  );
};

export default TaskAndTeamManagementTable;
