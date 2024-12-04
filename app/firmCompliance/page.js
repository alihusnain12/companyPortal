import React from "react";

const FirmCompliance = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-xl p-4">
        <p className="text-xl font-bold">Good Morning,Jack</p>
        <p className="text-gray-500 text-xs pt-1">
          Here is the firm compliance
        </p>
      </div>
      {/* card full */}
      <div>
        <div className="bg-white rounded-md shadow-xl mt-8 p-5 flex justify-between">
          <div className="flex-1">
            <p className="text-lg font-bold">Firm Info</p>
            <p className="text-gray-500 pt-1  text-sm">This is the firm info</p>
          </div>
          {/* second */}
          <div className="flex-1">
            {/* 1 */}
            <div className="bg-gray-300 rounded-md mb-2 flex justify-between items-center p-2 ">
              <p className="text-sm">Company Name</p>
              <p className="text-gray-500 text-xs">Tech Innovators Inc.</p>
            </div>
            {/* 2*/}
            <div className="bg-gray-300 rounded-md mb-2 flex justify-between items-center p-2 ">
              <p className="text-sm">Reg no</p>
              <p className="text-gray-500 text-xs">45321-AB</p>
            </div>
            {/* 3*/}
            <div className="bg-gray-300 rounded-md mb-2 flex justify-between items-center p-2 ">
              <p className="text-sm">AML reg no</p>
              <p className="text-gray-500 text-xs">45321-AB</p>
            </div>
            {/* 3*/}
            <div className="bg-gray-300 rounded-md mb-2 flex justify-between items-center p-2 ">
              <p className="text-sm">Proffesional indemnity insure no</p>
              <p className="text-gray-500 text-xs">45321-AB</p>
            </div>
            {/* 3*/}
            <div className="bg-gray-300 rounded-md mb-2 flex justify-between items-center p-2 ">
              <p className="text-sm">Proffesional indemnity insure provider</p>
              <p className="text-gray-500 text-xs">insure pvt ltd</p>
            </div>
            {/* 3*/}
            <div className="bg-gray-300 rounded-md mb-2 flex justify-between items-center p-2 ">
              <p className="text-sm">HMRC agent codes</p>
              <p className="text-gray-500 text-xs">45321-AB</p>
            </div>
            {/* 3*/}
            <div className="bg-gray-300 rounded-md mb-2 flex justify-between items-center p-2 ">
              <p className="text-sm">client trust account name</p>
              <p className="text-gray-500 text-xs">45321-AB</p>
            </div>
            {/* 3*/}
            <div className="bg-gray-300 rounded-md mb-2 flex justify-between items-center p-2 ">
              <p className="text-sm">client trust account number</p>
              <p className="text-gray-500 text-xs">234********456</p>
            </div>
            {/* 3*/}
            <div className="bg-gray-300 rounded-md mb-2 flex justify-between items-center p-2 ">
              <p className="text-sm">client trust sort code</p>
              <p className="text-gray-500 text-xs">123er567yyy</p>
            </div>
            {/* 3*/}
            <div className="bg-gray-300 rounded-md mb-2 flex justify-between items-center p-2 ">
              <p className="text-sm">ethical standards </p>

              <p className="text-gray-500 text-xs">
                Data Privacy and Security
                <br />
                Transparency in Data Usage
                <br />
                Fair Pricing and Billing
              </p>
            </div>
            {/* 3*/}
            <div className="bg-gray-300 rounded-md mb-2 flex justify-between items-center p-2 ">
              <p className="text-sm">aML training link </p>

              <p className="text-gray-500 text-xs">Www.innovators.com</p>
            </div>
            {/* 3*/}
            <div className="bg-gray-300 rounded-md mb-2 flex justify-between items-center p-2 ">
              <p className="text-sm">engagement contract</p>
              <div>
                
              <p className="text-gray-500 text-xs">contract.pdf</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirmCompliance;
