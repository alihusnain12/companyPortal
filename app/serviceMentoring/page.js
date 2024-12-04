import Image from "next/image";
import React from "react";
import { FaChevronLeft, FaChevronRight, FaEye, FaSearch } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";
import pic from "../public/dp.jpg"
import { BiDownArrowAlt, BiPlus } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
const Data = [
  // Sample data
  {
    id: 1,
    invoiceNum: "INV102397",
    name: "Jack",
    date: "Oct 17, 2024",
    dueDate: "Nov 17, 2024",
    amount: "250$",
    status: "paid",
    payment: "card",
    image: pic,
  },
  {
    id: 2,
    invoiceNum: "INV102398",
    name: "Jane",
    date: "Oct 18, 2024",
    dueDate: "Nov 18, 2024",
    amount: "300$",
    status: "pending",
    payment: "cash",
    image: pic,
  },
  {
    id: 3,
    invoiceNum: "INV102399",
    name: "Bob",
    date: "Oct 19, 2024",
    dueDate: "Nov 19, 2024",
    amount: "150$",
    status: "paid",
    payment: "card",
    image: pic,
  },
  {
    id: 4,
    invoiceNum: "INV102400",
    name: "Alice",
    date: "Oct 20, 2024",
    dueDate: "Nov 20, 2024",
    amount: "400$",
    status: "pending",
    payment: "paypal",
    image: pic,
  },
  {
    id: 5,
    invoiceNum: "INV102401",
    name: "Charlie",
    date: "Oct 21, 2024",
    dueDate: "Nov 21, 2024",
    amount: "500$",
    status: "paid",
    payment: "check",
    image: pic,
  },
];
const ServiceMentoring = () => {
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
            <button className="border border-black rounded text-black p-1">
              Dismiss
            </button>
          </div>
        </div>

        <p className="pt-3 text-gray-500 text-xs">
          New Lead Notification: You have 5 new leads waiting for follow-up.
          <br />
          Reminder: Follow up with Jane Smith scheduled for Oct 18, 2024.
        </p>
      </div>

      {/* Cards */}
      <div className="bg-white p-3 rounded-md shadow-xl mt-7 pb-5">
        <p className="text-lg font-bold">Todays Summary</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
          {/* Each summary card content */}
          <div className="bg-[#FFEFF18C] rounded-md p-6 flex justify-center items-center flex-col text-center h-36">
            <p className="text-xl font-semibold">Total Leads</p>
            <p className="font-extrabold text-3xl">450</p>
          </div>
          <div className="bg-[#DFFFE5] rounded-md p-6 flex justify-center items-center flex-col text-center h-36">
            <p className="text-xl font-semibold">Completed Tasks</p>
            <p className="font-extrabold text-3xl">1800$</p>
          </div>
          <div className="bg-[#FFD3D3] rounded-md p-6 flex justify-center items-center flex-col text-center h-36">
            <p className="text-xl font-semibold">Pending Tasks</p>
            <p className="font-extrabold text-3xl">2500$</p>
          </div>
          <div className="bg-[#FFEBCC] rounded-md p-6 flex justify-center items-center flex-col text-center h-36">
            <p className="text-xl font-semibold">New Clients</p>
            <p className="font-extrabold text-3xl">5500$</p>
          </div>
        </div>
      </div>
      {/* table */}
      <div>
        <div className="bg-white rounded-md p-3 shadow-xl mt-10">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg font-bold">Bills</p>
              <p className="text-xs text-gray-500 pt-2">
                Accounts with +99 invoices are not accepted.
              </p>
            </div>
            <div className="flex space-x-1">
              <BiPlus className="border text-3xl px-2 rounded-md" />
              <FiSend className="border text-3xl px-2 rounded-md" />
              <div className="flex items-center border space-x-2 px-3 rounded-md">
                <IoCloudDownloadOutline />
                <p className="text-sm">download</p>
              </div>
            </div>
          </div>

          {/* Buttons and search icons */}
          <div className="mt-5 flex justify-between items-center">
            <div>
              <button className="border p-2 rounded-l-md text-xs text-gray-500">
                24 hours
              </button>
              <button className="border p-2 text-xs text-gray-500">
                7 days
              </button>
              <button className="border p-2 text-xs text-gray-500">
                30 days
              </button>
              <button className="border rounded-r-md p-2 text-xs text-gray-500">
                customize
              </button>
            </div>
            <div className="flex space-x-4 items-center">
              <FaSearch />
              <div className="flex space-x-2 border rounded-md items-center px-2">
                <BiDownArrowAlt />
                <p>Filters</p>
              </div>
            </div>
          </div>

          {/* Table */}
          <table className="min-w-full mt-5">
            <thead>
              <tr>
                <th className="border-b px-4 py-2 text-left">#</th>
                <th className="border-b px-4 py-2 text-left">Invoice Number</th>
                <th className="border-b px-4 py-2 text-left">Client Name</th>
                <th className="border-b px-4 py-2 text-left">Date Issued</th>
                <th className="border-b px-4 py-2 text-left">Due Date</th>
                <th className="border-b px-4 py-2 text-left">Amount</th>
                <th className="border-b px-4 py-2 text-left">Status</th>
                <th className="border-b px-4 py-2 text-left">Payment Method</th>
                <th className="border-b px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {Data.map((item) => (
                <tr key={item.id}>
                  <td className="border-b px-4 py-2 text-center">{item.id}</td>
                  <td className="border-b px-4 py-2 text-center">
                    {item.invoiceNum}
                  </td>
                  <td className="border-b px-4 py-2 text-center flex items-center space-x-2">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="rounded-full w-7 h-7"
                    />
                    <span>{item.name}</span>
                  </td>
                  <td className="border-b px-4 py-2 text-center">
                    {item.date}
                  </td>
                  <td className="border-b px-4 py-2 text-center cursor-pointer">
                    {item.dueDate}
                  </td>
                  <td className="border-b px-4 py-2 text-center">
                    {item.amount}
                  </td>
                  <td className="border-b px-4 py-2 text-center">
                    {item.status}
                  </td>
                  <td className="border-b px-4 py-2 text-center">
                    {item.payment}
                  </td>
                  <td className="border-b px-4 py-2 text-center flex space-x-3">
                    <IoCloudDownloadOutline className="bg-gray-300 text-blue-400 rounded-full p-2 text-3xl cursor-pointer" />
                    <FaEye className="bg-gray-300 text-blue-400 rounded-full p-2 text-3xl cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button className="flex items-center p-2 border rounded-md text-sm text-gray-500 hover:bg-gray-200">
              <FaChevronLeft className="mr-1" />
              Previous
            </button>
            <button
              className="flex items-center p-2 border rounded-md text-sm text-gray-500 hover:bg-gray-200"
            >
              Next
              <FaChevronRight className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceMentoring;
