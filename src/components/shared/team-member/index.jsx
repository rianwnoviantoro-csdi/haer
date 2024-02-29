import React from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

function TeamMember({ image, name, email }) {
  return (
    <>
      <div className="my-4 flex gap-3 justify-between place-items-center">
        <div className="flex gap-4 place-items-center">
          <div className="h-10 w-10 rounded-full bg-slate-200">
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover rounded-full"
            />
          </div>
          <div className="grow">
            <h1 className="font-semibold leading-tight">{name}</h1>
            <p className="text-sm text-[#ACAFB5] leading-tight">{email}</p>
          </div>
        </div>
        <div className="cursor-pointer">
          <EllipsisVerticalIcon className="h-6 w-6 " />
        </div>
      </div>
      <hr />
    </>
  );
}

export default TeamMember;
