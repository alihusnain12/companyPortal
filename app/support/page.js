"use client";

import HelpCenter from "@/components/helpCenter";
import PrivacyPolicy from "@/components/privacyPolicy";
import Terms from "@/components/termsAndCondition";
import React, { useState } from "react";

const LandingPageSetting = () => {
  const [activeTab, setActiveTab] = useState("General Settings");

  return (
    <div>
      <div className="bg-white p-2 rounded-lg shadow-2xl">
        <p className="text-xl font-bold">Good morning, Jake</p>
        <div className="flex space-x-4 mt-5">
          {["Help Center", "Privacy Policy", "Terms & Condition"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`p-2 text-lg ${
                activeTab === tab
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-10 ">
        {activeTab === "Help Center" && (
          <div>
           <PrivacyPolicy/>
          </div>
        )}
        {/* 2 */}
        {activeTab === "Privacy Policy" && (
          <div>
          <HelpCenter/>
          </div>
        )}
        {activeTab === "Terms & Condition" && (<div>
          
            <Terms/>
            </div>)}
      </div>
    </div>
  );
};

export default LandingPageSetting;
