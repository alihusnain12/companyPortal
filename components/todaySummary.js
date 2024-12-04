import Image from "next/image";
import React from "react";
import pic from "../app/public/icon1.png";
import pic2 from "../app/public/icon2.png";
import { BiRightArrowAlt } from "react-icons/bi";
import CustomLabels from "../components/graph";

const TodaySummary = () => {
  return (
    <div>
      <div className="bg-white rounded-md shadow-xl mt-10 p-4">
        <p className="text-lg font-bold">Todays Summary</p>
        <p className="text-gray-500 pt-2 text-sm">Job Summary</p>
        {/*  */}
        <div className="mt-6 flex justify-between items-center">
          {/* cards */}
          <div>
            <div className="bg-[#FFEFF18C] p-3 rounded-md shadow-lg">
              <p className="text-xl font-semibold ">Total Clients</p>
              <div className="flex mt-6 justify-evenly">
                <p className="text-5xl font-bold">45</p>
                <Image src={pic} alt="ich" />
              </div>
            </div>
            <div className="bg-[#FFEFF18C] p-3 rounded-md mt-4 shadow-lg">
              <p className="text-xl font-semibold ">New Leads This Month</p>
              <div className="flex mt-6 justify-evenly">
                <p className="text-5xl font-bold">18</p>
                <Image src={pic2} alt="ich" />
              </div>
            </div>
          </div>
          {/*  ratio*/}
          <div className="bg-[#F8F8FD] p-5 rounded-md shadow-lg">
            <p className="text-xl font-semibold">Convertion Rate</p>
            <div className=" flex justify-evenly items-center mt-3">
              <svg width="200" height="200">
                <circle
                  r="70"
                  cx="100"
                  cy="100"
                  fill="transparent"
                  stroke="lightgrey"
                  stroke-width="2rem"
                  stroke-dasharray="439.8"
                  stroke-dashoffset="0"
                ></circle>
                <circle
                  r="70"
                  cx="100"
                  cy="100"
                  fill="transparent"
                  stroke="blue"
                  stroke-width="2rem"
                  stroke-dasharray="439.8"
                  stroke-dashoffset="66"
                ></circle>
              </svg>
              <div>
                {/* 1 */}
                <div className="flex space-x-3">
                    <span className=" text-[#52BDCD] rounded-lg bg-[#52BDCD] p-3"></span>
                    <div>
                        <p className="font-bold text-lg">60%</p>
                        <p className="text-gray-500 text-sm">Payment Clients</p>
                    </div>
                </div>
                {/* 2 */}
                <div className="flex space-x-3 mt-2">
                    <span className="  rounded-lg bg-[#E9EBFD] p-3"></span>
                    <div>
                        <p className="font-bold text-lg">40%</p>
                        <p className="text-gray-500 text-sm">Leads</p>
                    </div>
                </div>
              </div>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-[#52BDCD] text-lg">View All Applications</p>
                <BiRightArrowAlt size={14} color="#52BDCD" />
              </div>
            </div>
            {/* 3div */}
            <div>
                <CustomLabels/>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default TodaySummary;
