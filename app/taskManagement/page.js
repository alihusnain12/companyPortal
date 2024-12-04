import React from "react";
import Image from "next/image";
import { BiEdit } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import pic from "../../app/public/dp.jpg";
import pic2 from "../../app/public/logo.png";

const tasks = [
  {
    id: 1,
    taskName: "VAT ",
    clientName: "Brooklyn Simmons",
    clientImage: pic,
    teamMember: "Jenny Wilson",
    teamImage: pic2,
    dueDate: "Oct 17, 2024",
    priority: "High",
    status: "in progress",
  },
  {
    id: 2,
    taskName: "Payroll",
    clientName: "Savannah Nguyen",
    clientImage: pic,
    teamMember: "Jane Cooper",
    teamImage: pic2,
    dueDate: "Oct 17, 2024",
    priority: "Medium",
    status: "completed",
  },
  {
    id: 3,
    taskName: "Company",
    clientName: "Kathryn Murphy",
    clientImage: pic,
    teamMember: "Bessie Cooper",
    teamImage: pic2,
    dueDate: "Oct 17, 2024",
    priority: "Low",
    status: "pending approval",
  },
  {
    id: 4,
    taskName: "Self ",
    clientName: "Eleanor Pena",
    clientImage: pic,
    teamMember: "Ralph Edwards",
    teamImage: pic2,
    dueDate: "Oct 17, 2024",
    priority: "High",
    status: "in progress",
  },
  {
    id: 5,
    taskName: "VAT",
    clientName: "Dianne Russell",
    clientImage: pic,
    teamMember: "Cameron Williamson",
    teamImage: pic2,
    dueDate: "Oct 17, 2024",
    priority: "Medium",
    status: "completed",
  },
];

const TaskManagement = () => {
  return (
    <div>
      <div className="bg-white rounded-md shadow-xl p-4">
        <p className="text-xl font-bold">Good morning, Jack</p>
        <p className="text-sm text-gray-500 pt-2">
          Here are Alert for summary of the leads overview.
        </p>
      </div>
      <div className="bg-[#CAFDF5] shadow-xl rounded-xl p-4 mt-7">
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold">Info</p>
          <div className="flex items-center space-x-2">
            <button className="bg-black rounded text-white p-1">Action</button>
            <button className="border border-black rounded text-black p-1">Dismiss</button>
          </div>
        </div>
        <p className="pt-3 text-gray-500 text-xs">
          New Lead Notification: You have 5 new leads waiting for follow-up.
          <br />
          Reminder: Follow up with Jane Smith scheduled for Oct 18, 2024.
        </p>
      </div>
      {/* cards */}
      <div className="bg-white p-3 rounded-md shadow-xl mt-7 pb-5">
        <p className="text-lg font-bold">Todays Summary</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
          <div className="bg-[#FFEFF18C] rounded-md p-6 flex justify-center items-center flex-col text-center h-36">
            <p className="text-xl font-semibold">Total Leads</p>
            <p className="font-extrabold text-3xl">45</p>
          </div>
          <div className="bg-[#DFFFE5] rounded-md p-6 flex justify-center items-center flex-col text-center h-36">
            <p className="text-xl font-semibold">Completed Tasks</p>
            <p className="font-extrabold text-3xl">30</p>
          </div>
          <div className="bg-[#FFD3D3] rounded-md p-6 flex justify-center items-center flex-col text-center h-36">
            <p className="text-xl font-semibold">Pending Tasks</p>
            <p className="font-extrabold text-3xl">10</p>
          </div>
          <div className="bg-[#FFEBCC] rounded-md p-6 flex justify-center items-center flex-col text-center h-36">
            <p className="text-xl font-semibold">New Clients</p>
            <p className="font-extrabold text-3xl">5</p>
          </div>
        </div>
      </div>
      {/* table */}
      <div className="bg-white p-3 rounded-md shadow-xl mt-7 overflow-hidden">
        <p className="text-lg font-bold">Task</p>
        <div className="max-w-full overflow-x-hidden mt-3">
          <table className="min-w-full table-fixed">
            <thead className="bg-gray-50 ">
              <tr>
                {['#', 'Task Name', 'Client Name', 'Assigned Team Member', 'Due Date', 'Priority', 'Status', 'Action'].map((header) => (
                  <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tasks.map((task, index) => (
                <tr key={task.id} className="hover:bg-gray-100 transition duration-200">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {task.taskName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex items-center">
                    <Image
                      src={task.clientImage}
                      alt={task.clientName}
                      width={32}
                      height={32}
                      className="rounded-full mr-2"
                    />
                    {task.clientName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center">
                      <Image
                        src={task.teamImage}
                        alt={task.teamMember}
                        width={32}
                        height={32}
                        className="rounded-full mr-2"
                      />
                      <span>{task.teamMember}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {task.dueDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {task.priority}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {task.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm  flex space-x-4 text-gray-600">
                    <BiEdit className="cursor-pointer hover:text-blue-500 bg-gray-500 inline-flex rounded-full text-white text-3xl p-2" />
                    <FaEye className="cursor-pointer hover:text-green-500 bg-gray-500 inline-flex rounded-full text-white text-3xl p-2" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaskManagement;