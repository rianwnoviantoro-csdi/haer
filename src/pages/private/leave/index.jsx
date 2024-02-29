import React from "react";
import {
  AdjustmentsHorizontalIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { SharedComp } from "../../../components";

function Leave() {
  const tabs = [
    {
      title: "Upcoming",
      content: [
        {
          date: "Apr 15, 2023 - Apr 18, 2023",
          apply: 3,
          balance: 16,
          status: "Approved",
          approver: "Martin Deo",
        },
        {
          date: "Apr 15, 2023 - Apr 18, 2023",
          apply: 3,
          balance: 16,
          status: "Approved",
          approver: "Martin Deo",
        },
        {
          date: "Apr 15, 2023 - Apr 18, 2023",
          apply: 3,
          balance: 16,
          status: "Approved",
          approver: "Martin Deo",
        },
      ],
    },
    {
      title: "Past",
      content: [
        {
          date: "Apr 15, 2023 - Apr 18, 2023",
          apply: 3,
          balance: 16,
          status: "Approved",
          approver: "Martin Deo",
        },
        {
          date: "Apr 15, 2023 - Apr 18, 2023",
          apply: 3,
          balance: 16,
          status: "Approved",
          approver: "Martin Deo",
        },
        {
          date: "Apr 15, 2023 - Apr 18, 2023",
          apply: 3,
          balance: 16,
          status: "Approved",
          approver: "Martin Deo",
        },
      ],
    },
    {
      title: "Team Leave",
      content: [
        {
          date: "Apr 15, 2023 - Apr 18, 2023",
          apply: 3,
          balance: 16,
          status: "Rejected",
          approver: "Martin Deo",
        },
        {
          date: "Apr 15, 2023 - Apr 18, 2023",
          apply: 3,
          balance: 16,
          status: "Rejected",
          approver: "Martin Deo",
        },
        {
          date: "Apr 15, 2023 - Apr 18, 2023",
          apply: 3,
          balance: 16,
          status: "Rejected",
          approver: "Martin Deo",
        },
      ],
    },
  ];

  return (
    <div className="p-4 mb-7">
      <div className="fixed bg-slate-50 max-w-xl mx-auto top-0 left-0 right-0 p-4 z-50">
        <div className="flex justify-between place-items-center">
        <div className="">
          <h1 className="font-semibold text-lg">All Leaves</h1>
        </div>
        <div className="flex gap-3">
          <SquaresPlusIcon className="h-6 w-6" />
          <AdjustmentsHorizontalIcon className="h-6 w-6" />
        </div>
        </div>
      </div>
      {/* Summary */}
      <div className="mt-14 my-6">
        <SharedComp.Summary />
      </div>
      {/* Tab */}
      <div className="my-6">
        <SharedComp.Tab tabs={tabs} />
      </div>
    </div>
  );
}

export default Leave;
