import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

function ProfileMenuItem({ icon, title }) {
  return (
    <>
      <div className="my-2 flex gap-3 justify-between place-items-center">
        <div className="flex gap-4 place-items-center">
          <div className="h-10 w-10 rounded-full flex justify-center place-items-center bg-slate-200">
            {icon}
          </div>
          <div className="grow">
            <h1 className="font-semibold leading-tight text-slate-700">
              {title}
            </h1>
          </div>
        </div>
        <div className="cursor-pointer">
          <ChevronRightIcon className="h-6 w-6 text-slate-700" />
        </div>
      </div>
      <hr />
    </>
  );
}

export default ProfileMenuItem;
