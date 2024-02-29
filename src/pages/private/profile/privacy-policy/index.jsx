import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setShowBottomNav } from "../../../../redux/features/common/common.slice";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShowBottomNav({ show: false }));
  }, []);

  return (
    <div className="bg-white h-[calc(100vh)]">
      <div className="max-w-xl w-full mx-auto p-4 flex gap-3 justify-center place-items-center fixed top-0 bg-white z-50 shadow-sm">
        <Link to="/dashboard/profile" className="flex-none w-12 cursor-pointer">
          <ChevronLeftIcon className="h-6 w-6 text-slate-700" />
        </Link>
        <div className="grow text-center">
          <h1 className="font-semibold text-slate-700">Privacy Policy</h1>
        </div>
        <div className="flex-none w-12"></div>
      </div>
      <div className="px-4 pb-4 pt-14">
        <div className="mt-2 mb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit velit
          sint nesciunt aliquam. Enim excepturi quibusdam ullam maxime nesciunt.
          Dolores consequatur deleniti ab animi voluptatum natus labore minus
          ipsam pariatur?
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
