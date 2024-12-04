"use client"
import Image from "next/image";
import React from "react";
import pic from "../../app/public/logo.png"
import { useRouter } from "next/navigation";
const TeamManagement2 = () => {
    const router=useRouter()
    const nextpg=()=>{
        router.push("/teamManagement3")
    }
  return (
    <div>
      <div className=" p-4">
        {/* card */}
        <div className="w-full bg-white p-2 rounded-lg shadow-lg mt-">
          <div className="flex justify-between items-center p-1">
            <div>
              <h4 className="text-2xl font-bold">Good morning,Jack</h4>
              <p className="text-gray-600 pt-2 text-sm">
                Here is the client information
              </p>
            </div>
            <button className="bg-black border text-white px-3 py-1 rounded-lg">
              <p>Edit</p>
            </button>
          </div>
        </div>
        {/*  */}
        <div className="bg-white rounded-lg p-10 mt-10 shadow-2xl">
          {/* 1 */}
          <div className="flex justify-between border-b border-gray-500">
            {/* first */}
            <div className="flex-1">
              <p className="text-xl font-bold">Basic Information</p>
              <p className="pt-2 text-gray-500">
                This is the information of the
                <br /> client
              </p>
            </div>
            {/* second */}
            <div className="flex-1">
              <div className="flex  items-center space-x-8 bg-gray-300 p-2 rounded-lg ml-20">
                <p className="text-bold">Image</p>
                <Image
                  src={pic}
                  alt="logo"
                  className="rounded-full w-14 h-14"
                />
              </div>
              {/*  */}
              <div className="flex  items-center space-x-8 bg-gray-300 p-2 mt-4 rounded-lg ml-20">
                <p>Name</p>
                <p className="text-gray-500">Jhone alll</p>
              </div>
              {/*  */}
              <div className="flex  items-center space-x-8 bg-gray-300 p-2 mt-4 rounded-lg ml-20">
                <p>Phone</p>
                <p className="text-gray-500">23233334</p>
              </div>
              {/*  */}
              <div className="flex  items-center space-x-8 bg-gray-300 p-2 mt-4 rounded-lg ml-20">
                <p>Email</p>
                <p className="text-gray-500">Jhone@gmail.com</p>
              </div>
              {/*  */}
              <div className="flex  items-center space-x-8 bg-gray-300 p-2 mt-4 rounded-lg ml-20 mb-5">
                <p>Address</p>
                <p className="text-gray-500">street no 2 safdar,california</p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="flex justify-between border-b border-gray-500 mt-9">
            {/* first */}
            <div className="flex-1">
              <p className="text-xl font-bold">Business Info</p>
              <p className="pt-2 text-gray-500">
                This is the information of the
                <br /> client
              </p>
            </div>
            {/* second */}
            <div className="flex-1 ">
              {/*  */}
              <div className="flex  items-center space-x-8 bg-gray-300 p-2 mt-4 rounded-lg ml-20">
                <p className="text-sm">
                  Company
                  <br /> Name
                </p>
                <p className="text-gray-500">Tech Innovators Inc.</p>
              </div>
              {/*  */}
              <div className="flex  items-center space-x-8 bg-gray-300 p-2 mt-4 rounded-lg ml-20">
                <p>Reg no</p>
                <p className="text-gray-500">23233334</p>
              </div>
              {/*  */}
              <div className="flex  items-center space-x-8 bg-gray-300 p-2 mt-4 rounded-lg ml-20 mb-6">
                <p className="text-sm">
                  Business <br /> Type
                </p>
                <p className="text-gray-500">Technology</p>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="flex justify-between border-b border-gray-500 mt-9">
            {/* first */}
            <div className="flex-1">
              <p className="text-xl font-bold">
                Accounting and Tax Information
              </p>
              <p className="pt-2 text-gray-500">
                This is the information of the
                <br /> client
              </p>
            </div>
            {/* second */}
            <div className="flex-1 ">
              {/*  */}
              <div className="flex  items-center space-x-8 bg-gray-300 p-2 mt-4 rounded-lg ml-20">
                <p className="text-sm">TIN</p>
                <p className="text-gray-500">12234-23</p>
              </div>
              {/*  */}
              <div className="flex  items-center space-x-8 bg-gray-300 p-2 mt-4 rounded-lg ml-20">
                <p>VAT</p>
                <p className="text-gray-500">EU-VAT-87654321</p>
              </div>
              {/*  */}
              <div className="flex  items-center space-x-8 bg-gray-300 p-2 mt-4 rounded-lg ml-20">
                <p className="text-sm">
                  Fiscal Year <br /> End
                </p>
                <p className="text-gray-500">December 31</p>
              </div>
              {/*  */}
              <div className="flex  items-center space-x-8 bg-gray-300 p-2 mt-4 rounded-lg ml-20 mb-6">
                <p className="text-sm">Preference</p>
                <p className="text-gray-500">Accrual Basis</p>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="flex justify-between border-b border-gray-500 mt-9">
            {/* first */}
            <div className="flex-1">
              <p className="text-xl font-bold">Subscribed Services</p>
              <p className="pt-2 text-gray-500">
                This is the information of the
                <br /> client
              </p>
            </div>
            {/* second */}
            <div className="flex-1 ">
              {/*  */}
              <div className="flex  items-center space-x-8 bg-gray-300 p-2 mt-4 rounded-lg ml-20">
                <p className="text-sm">VAT Returns:</p>
                <p className="text-gray-500">Active (Start Date: 2023-01-01)</p>
              </div>
              {/*  */}
              <div className="flex  items-center space-x-8 bg-gray-300 p-2 mt-4 rounded-lg ml-20 mb-6">
                <p>
                  Payroll
                  <br /> Management
                </p>
                <p className="text-gray-500">In Progress</p>
              </div>
            </div>
          </div>
          {/* 5 */}
          <div className="flex justify-between border-b border-gray-500 mt-9">
            {/* first */}
            <div className="flex-1">
              <p className="text-xl font-bold">Financial Information</p>
              <p className="pt-2 text-gray-500">
                This is the information of the
                <br /> client
              </p>
            </div>
            {/* second */}
            <div className="flex-1 ">
              {/*  */}
              <div className="flex  items-center space-x-8 bg-gray-300 p-2 mt-4 rounded-lg ml-20">
                <p className="text-sm">Billing</p>
                <p className="text-gray-500">Monthly Subscription</p>
              </div>
              {/*  */}
              <div className="flex  items-center space-x-8 bg-gray-300 p-2 mt-4 rounded-lg ml-20">
                <p>
                  Outstanding
                  <br /> Balance
                </p>
                <p className="text-gray-500"> $500</p>
              </div>
              {/*  */}
              <div className="flex  items-center space-x-8 bg-gray-300 p-2 mt-4 rounded-lg ml-20 mb-6">
                <p className="text-sm">
                  Payment
                  <br /> History{" "}
                </p>
                <p className="text-gray-500">Last Payment $250 (2024-09-15)</p>
              </div>
            </div>
          </div>
         {/* 6 */}
         <div className="flex justify-between border-b border-gray-500 mt-9">
            {/* first */}
            <div>
                <p className="font-bold text-xl">Access control</p>
                <p className="text-gray-500 pt-2">this is the access control of member</p>
            </div>
            {/* second */}
            <div className="pr-32">
            <div className="flex space-x-3 items-center mt-2">
                <input type="checkbox"/>
                <p className="text-xs text-gray-600">View only for assigned clients.</p>
            </div>
            <div className="flex space-x-3 items-center mt-2">
                <input type="checkbox"/>
                <p className="text-xs text-gray-600">View only for assigned clients.</p>
            </div>
            <div className="flex space-x-3 items-center mt-2">
                <input type="checkbox"/>
                <p className="text-xs text-gray-600">Create, edit, and upload draft documents for review.</p>
            </div>
            <div className="flex space-x-3 items-center mt-2">
                <input type="checkbox"/>
                <p className="text-xs text-gray-600">View only for assigned clients.</p>
            </div>
            <div className="flex space-x-3 items-center mt-2">
                <input type="checkbox"/>
                <p className="text-xs text-gray-600">Create, edit, and upload draft documents for review.</p>
            </div>
            <div className="flex space-x-3 items-center mt-2">
                <input type="checkbox"/>
                <p className="text-xs text-gray-600">View only for assigned clients.</p>
            </div>
            <div className="flex space-x-3 items-center mt-2 mb-7">
                <input type="checkbox"/>
                <p className="text-xs text-gray-600">Create, edit, and upload draft documents for review.</p>
            </div>
            </div>
         </div>
                 {/* 7 */}
                 <div className="flex justify-between  border-gray-500 mt-9">
            {/* first */}
            <div>
                <p className="font-bold text-xl">Icompliance check list</p>
                <p className="text-gray-500 pt-2">this is the access control of member</p>
            </div>
            {/* second */}
            <div className="pr-32">
            <div className="flex space-x-3 items-center mt-2">
                <input type="checkbox"/>
                <p className="text-xs text-gray-600">View only for assigned clients.</p>
            </div>
            <div className="flex space-x-3 items-center mt-2">
                <input type="checkbox"/>
                <p className="text-xs text-gray-600">View only for assigned clients.</p>
            </div>
            <div className="flex space-x-3 items-center mt-2">
                <input type="checkbox"/>
                <p className="text-xs text-gray-600">Create, edit, and upload draft documents for review.</p>
            </div>
            <div className="flex space-x-3 items-center mt-2">
                <input type="checkbox"/>
                <p className="text-xs text-gray-600">View only for assigned clients.</p>
            </div>
            <div className="flex space-x-3 items-center mt-2">
                <input type="checkbox"/>
                <p className="text-xs text-gray-600">Create, edit, and upload draft documents for review.</p>
            </div>
            <div className="flex space-x-3 items-center mt-2">
                <input type="checkbox"/>
                <p className="text-xs text-gray-600">View only for assigned clients.</p>
            </div>
            <div className="flex space-x-3 items-center mt-2 ">
                <input type="checkbox"/>
                <p className="text-xs text-gray-600">Create, edit, and upload draft documents for review.</p>
            </div>
            <div className="flex space-x-3 items-center mt-2">
                <input type="checkbox"/>
                <p className="text-xs text-gray-600">View only for assigned clients.</p>
            </div>
            <div className="flex space-x-3 items-center mt-2 mb-7">
                <input type="checkbox"/>
                <p className="text-xs text-gray-600">Create, edit, and upload draft documents for review.</p>
            </div>
            </div>
         </div>
         {/* button */}
         <div className="flex justify-end">
         <button className="bg-blue-400 px-3 py-1 text-white w-96 mr-12 mt-7 rounded-md" onClick={nextpg}>Save</button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default TeamManagement2;
