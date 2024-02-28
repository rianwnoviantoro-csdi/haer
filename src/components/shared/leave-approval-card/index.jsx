import React from "react";

function LeaveApprovalCard({ date, apply, balance, approver, status }) {
  return (
    <div className="bg-white w-full p-3 shadow-lg rounded-lg mb-3">
      <div className="flex justify-between place-items-start">
        <div className="">
          <p className="text-xs leading-loose">Date</p>
          <h6 className="font-semibold text-sm">{date}</h6>
        </div>
        <div
          className={`bg-[${
            status === "Rejected" ? "#FF7F74" : "#30BEB6"
          }]/5 px-3 py-2 rounded-lg`}
        >
          <p
            className={`text-xs text-[${
              status === "Rejected" ? "#FF7F74" : "#30BEB6"
            }]`}
          >
            {status}
          </p>
        </div>
      </div>
      <div className="my-3 border border-[#ACAFB5]/10"></div>
      <div className="grid grid-cols-3">
        <div className="">
          <p className="text-xs leading-loose">Apply Days</p>
          <h6 className="font-semibold leading-loose">{apply} Days</h6>
        </div>
        <div className="">
          <p className="text-xs leading-loose">Leave Balance</p>
          <h6 className="font-semibold leading-loose">{balance}</h6>
        </div>
        <div className="">
          <p className="text-xs leading-loose">
            {status === "Rejected" ? "Rejected" : "Approved"} By
          </p>
          <h6 className="font-semibold leading-loose">{approver}</h6>
        </div>
      </div>
    </div>
  );
}

export default LeaveApprovalCard;
