import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setShowBottomNav } from "../../../../redux/features/common/common.slice";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import dayjs from "dayjs";

function TermAndCondition() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShowBottomNav({ show: false }));
  }, []);

  return (
    <div className="bg-white min-h-screen h-full">
      <div className="max-w-xl w-full mx-auto p-4 flex gap-3 justify-center place-items-center fixed top-0 bg-white z-50 shadow-sm">
        <Link to="/dashboard/profile" className="flex-none w-12 cursor-pointer">
          <ChevronLeftIcon className="h-6 w-6 text-slate-700" />
        </Link>
        <div className="grow text-center">
          <h1 className="font-semibold text-slate-700">Term & Condition</h1>
        </div>
        <div className="flex-none w-12"></div>
      </div>
      <div className="px-4 pb-4 pt-14">
        <div className="mt-2 mb-6">
          <p className="mb-2 text-xs text-[#ACAFB5]">
            Last update: {dayjs().format("DD/MM/YYYY")}
          </p>
          <p className="mb-6 text-sm text-slate-700 leading-tight  text-justify">
            Please read these terms of service, carefully before using our app
            operated by us.
          </p>
          <p className="mb-2 font-semibold text-[#3085FE] leading-none">
            Condition of Uses
          </p>
          <div className="">
            <p className="indent-6 text-sm text-slate-700 leading-tight text-justify">
              Welcome! By accessing or utilizing our website/application, you
              are acknowledging and agreeing to abide by the following terms and
              conditions. Your use of our services is contingent upon your
              compliance with these terms. We expect users to engage in lawful
              activities while using our platform and refrain from any actions
              that may disrupt its functionality.
            </p>
            <p className="indent-6 text-sm text-slate-700 leading-tight text-justify">
              Please be aware that your interaction with our website/application
              is also subject to our Privacy Policy, which outlines how we
              handle your personal information. All content and materials
              available on this platform are the intellectual property of our
              company, protected by applicable intellectual property laws.
            </p>
            <p className="indent-6 text-sm text-slate-700 leading-tight text-justify">
              In no event shall our company be liable for any direct, indirect,
              incidental, consequential, or punitive damages arising from your
              access or use of the site. We reserve the right to modify these
              terms at any time, and it is your responsibility to review them
              regularly for updates.
            </p>
            <p className="indent-6 text-sm text-slate-700 leading-tight text-justify">
              We retain the right to terminate or suspend your access to our
              platform without prior notice for any reason. These terms are
              governed by the laws of our jurisdiction. For any questions
              regarding these terms and conditions, please reach out to us at
              contact@email.com. Thank you for choosing our company – we
              appreciate your cooperation in ensuring a positive and secure user
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermAndCondition;
