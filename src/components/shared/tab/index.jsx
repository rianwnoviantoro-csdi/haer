import React, { useState } from "react";
import { SharedComp } from "../..";

function Tab({ tabs }) {
  let [activeTab, setActiveTab] = useState(0);

  function HandleTabClick(index) {
    setActiveTab(index);
  }

  return (
    <div className="">
      <div className="bg-[#ACAFB5]/5 flex justify-around rounded-lg">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-3 w-full ${
              activeTab === index
                ? "bg-blue-500 text-white rounded-lg"
                : "text-gray-800"
            }`}
            onClick={() => HandleTabClick(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <div className="flex flex-wrap">
          {tabs[activeTab].content?.map((content, index) => (
            <SharedComp.LeaveApprovalCard
              key={index}
              date={content.date}
              apply={content.apply}
              balance={content.balance}
              status={content.status}
              approver={content.approver}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tab;
