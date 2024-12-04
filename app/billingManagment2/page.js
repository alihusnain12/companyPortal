import Image from "next/image";
import React from "react";
import pic from "../../app/public/dp.jpg";
import CardCircle from "@/components/card-circle";
import Link from "next/link";
import { BiTrash } from "react-icons/bi";
const BillingManagment2 = () => {
  return (
    <div>
      <div className="bg-white rounded-md p-4 shadow-xl flex items-center space-x-8">
        <Image src={pic} className="w-9 h-9 rounded-md " alt="ali"/>
        <div>
          <p className="font-bold">INV102397</p>
          <p className="text-xs text-gray-500">
            Here is the john copper payment details{" "}
          </p>
        </div>
      </div>
      {/*  */}
      <div className="bg-[#FFE9D5] p-3 rounded-lg shadow-xl mt-8 flex justify-between items-center">
        <div>
          <p className="text-orange-700 font-bold">Warning</p>
          <p className="pt-2 text-xs text-orange-700">
            INV-20241002: $750 from John Doe - Overdue by 5 days
          </p>
        </div>
        <div className="space-x-3 flex items-center">
          <button className="bg-[#FF5630] rounded-md px-3 py-1 text-white text-sm">
            Send reminder
          </button>
          <button className="text-orange-700">Dismiss</button>
        </div>
      </div>
      {/* card and circle */}
      <CardCircle />
      {/* payment history */}
      <div className="mt-8 ">
        <div className="bg-white shadow-xl rounded-xl p-4 pb-8">
          <p className="text-lg font-bold">Payment history</p>
          {/*  */}
          <div className="flex  items-center">
            <div className="bg-gray-200 mt-6 rounded-lg shadow-lg p-4 flex justify-between flex-1 ">
              <div>
                <p className="text-sm">FEAC 271 - 990</p>
                <p className="text-sm">Sat, 10 Jun 2023</p>
                <Link href={"#"} className="font-semibold">
                  Download
                </Link>
              </div>
              <div>
                <p className="text-xs">132 bils</p>
              </div>
            </div>
            <BiTrash className="ml-3 text-gray-600" />
          </div>
          {/*  */}
          <div className="flex  items-center">
            <div className="bg-gray-200 mt-6 rounded-lg shadow-lg p-4 flex justify-between flex-1 ">
              <div>
                <p className="text-sm">FEAC 271 - 990</p>
                <p className="text-sm">Sat, 10 Jun 2023</p>
                <Link href={"#"} className="font-semibold">
                  Download
                </Link>
              </div>
              <div>
                <p className="text-xs">132 bils</p>
              </div>
            </div>
            <BiTrash className="ml-3 text-gray-600" />
          </div>
        </div>
      </div>
      {/* last card */}
      <div className="bg-white rounded-lg shadow-lg p-4 mt-8">
        <p className="text-lg font-bold mb-4">Plans subscription detail</p>
        <div className="flex space-x-7 items-center">
        <div className="bg-gray-200 p-5 rounded-lg flex-1">
          <p>
            Subscription Details for Acme Corp:
            <br />
            Plan: Annual VAT & Payroll Services
            <br />
            Amount: $12,000 per year
            <br />
            Next Payment Due: Oct 1, 2025
          </p>
        </div>
        <BiTrash/>
        </div>
      </div>
    </div>
  );
};

export default BillingManagment2;
