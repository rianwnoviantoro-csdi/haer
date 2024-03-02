import React, { useEffect, useState } from "react";
import {
  AdjustmentsHorizontalIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { SharedComp } from "../../../components";
import { useDispatch } from "react-redux";
import { setShowBottomNav } from "../../../redux/features/common/common.slice";
import dayjs from "dayjs";

function Leave() {
  let [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  let [title, seTitle] = useState("");
  let [leaveType, setLeaveType] = useState("");
  let [contactNumber, setContactNumber] = useState("");
  let [startDate, setStartDate] = useState(null);
  let [endDate, setEndDate] = useState(null);
  let [reason, setReason] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShowBottomNav({ show: true }));
  }, []);

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

  const leaveTypeArray = [
    { id: 1, label: "Medical Leave" },
    { id: 2, label: "Medical Leave" },
    { id: 3, label: "Medical Leave" },
    { id: 4, label: "Medical Leave" },
  ];

  function OpenCreateModal() {
    setIsCreateModalOpen(true);
  }

  function CloseCreateModal() {
    setIsCreateModalOpen(false);
  }

  function TitleHandler(e) {
    seTitle(e);
  }

  function LeaveTypeHandler(e) {
    setLeaveType(e);
  }

  function ContactNumberHandler(e) {
    setContactNumber(e);
  }

  function StartDateHandler(e) {
    setStartDate(e);
  }

  function EndDateHandler(e) {
    setEndDate(e);
  }

  function ReasonHandler(e) {
    setReason(e);
  }

  return (
    <>
      <div className="p-4 mb-7">
        <div className="fixed bg-slate-50 max-w-xl mx-auto top-0 left-0 right-0 p-4 z-50">
          <div className="flex justify-between place-items-center">
            <div className="">
              <h1 className="font-semibold text-lg">All Leaves</h1>
            </div>
            <div className="flex gap-3">
              <SquaresPlusIcon onClick={OpenCreateModal} className="h-6 w-6" />
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
      {/* Create Modal */}
      <SharedComp.Modal
        title="Request Leave"
        isOpen={isCreateModalOpen}
        onClose={CloseCreateModal}
      >
        <form action="">
          <SharedComp.Input
            label="Title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={TitleHandler}
          />
          <SharedComp.SelectInput
            label="Leave Type"
            type="text"
            options={leaveTypeArray}
            placeholder="Leave type"
            value={leaveType}
            onChange={LeaveTypeHandler}
          />
          <SharedComp.Input
            label="Contact Number"
            type="text"
            placeholder="Contact number"
            value={contactNumber}
            onChange={ContactNumberHandler}
          />
          <SharedComp.DatePickerInput
            label="Start Date"
            placeholder={dayjs().format("DD/MM/YYYY")}
            value={startDate}
            onChange={StartDateHandler}
          />
          <SharedComp.DatePickerInput
            label="End Date"
            placeholder={dayjs().add(1, "day").format("DD/MM/YYYY")}
            value={endDate}
            onChange={EndDateHandler}
          />
          <SharedComp.TextArea
            label="Reason for Leave"
            type="text"
            placeholder="Reason for Leave"
            value={reason}
            onChange={ReasonHandler}
          />
          <div className="mt-4">
            <SharedComp.Button
              background="bg-[#3085FE]"
              color="text-white"
              label="Apply Leave"
            />
          </div>
        </form>
      </SharedComp.Modal>
    </>
  );
}

export default Leave;
