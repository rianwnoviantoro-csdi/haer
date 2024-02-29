import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setShowBottomNav } from "../../../../redux/features/common/common.slice";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

function Setting() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShowBottomNav({ show: false }));
  }, []);

  return (
    <div className="bg-white min-h-screen h-full">
      <div className="max-w-xl w-full mx-auto p-4 flex gap-3 justify-center place-items-center fixed top-0 bg-white z-50 shadow-sm">
        <Link to="/dashboard/profile" className="flex-none w-12 cursor-pointer">
          <ChevronLeftIcon className="h-6 w-6 " />
        </Link>
        <div className="grow text-center">
          <h1 className="font-semibold ">Change Password</h1>
        </div>
        <div className="flex-none w-12"></div>
      </div>
      <div className="px-4 pb-4 pt-14">
        <div className="mt-2 mb-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
          architecto ipsa unde pariatur cupiditate accusantium animi illo
          consequuntur. Consequatur consequuntur necessitatibus hic, quaerat
          dolores omnis similique aspernatur expedita voluptatum. Autem.
        </div>
      </div>
    </div>
  );
}

export default Setting;
