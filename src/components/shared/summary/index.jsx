import React from "react";

function Summary() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="bg-[#3085FE]/5 border border-[#3085FE] p-3 rounded-xl">
        <h3 className="font-semibold leading-tight">
          Leave
          <br />
          Balance
        </h3>
        <h2 className="mt-4 font-semibold text-lg text-[#3085FE]">13</h2>
      </div>
      <div className="bg-[#A3D139]/5 border border-[#A3D139] p-3 rounded-xl">
        <h3 className="font-semibold leading-tight">
          Leave
          <br />
          Approved
        </h3>
        <h2 className="mt-4 font-semibold text-lg text-[#A3D139]">13</h2>
      </div>
      <div className="bg-[#30BEB6]/5 border border-[#30BEB6] p-3 rounded-xl">
        <h3 className="font-semibold leading-tight">
          Leave
          <br />
          Pending
        </h3>
        <h2 className="mt-4 font-semibold text-lg text-[#30BEB6]">13</h2>
      </div>
      <div className="bg-[#FF7F74]/5 border border-[#FF7F74] p-3 rounded-xl">
        <h3 className="font-semibold leading-tight">
          Leave
          <br />
          Cancelled
        </h3>
        <h2 className="mt-4 font-semibold text-lg text-[#FF7F74]">13</h2>
      </div>
    </div>
  );
}

export default Summary;
