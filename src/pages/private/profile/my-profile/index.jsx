import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setShowBottomNav } from "../../../../redux/features/common/common.slice";
import { SharedComp } from "../../../../components";

function MyProfile() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShowBottomNav({ show: false }));
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

  return (
    <div className="bg-white min-h-screen h-full">
      <div className="max-w-xl w-full mx-auto p-4 flex gap-3 justify-center place-items-center fixed top-0 bg-white z-50 shadow-sm">
        <Link to="/dashboard/profile" className="flex-none w-12 cursor-pointer">
          <ChevronLeftIcon className="h-6 w-6 " />
        </Link>
        <div className="grow text-center">
          <h1 className="font-semibold ">My Profile</h1>
        </div>
        <div className="flex-none w-12"></div>
      </div>
      <div className="px-4 pb-4 pt-14">
        <div className="mt-2 mb-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
          nostrum eligendi, laboriosam laborum iste accusamus harum aspernatur
          iusto reprehenderit obcaecati adipisci maiores sit molestiae, dolore,
          ipsum at. Error, nemo odio?
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
