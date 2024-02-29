import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function ProfileMenuItem({ icon, title, path }) {
  return (
    <Link to={path} className="cursor-pointer">
      <div className="my-2 flex gap-3 justify-between place-items-center">
        <div className="flex gap-4 place-items-center">
          <div className="h-10 w-10 rounded-full flex justify-center place-items-center bg-slate-200">
            {icon}
          </div>
          <div className="grow">
            <h1 className="font-semibold leading-tight ">
              {title}
            </h1>
          </div>
        </div>
        <div className="cursor-pointer">
          <ChevronRightIcon className="h-3 w-3 " />
        </div>
      </div>
      <hr />
    </Link>
  );
}

export default ProfileMenuItem;
