import React from "react";
import {
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { AVATAR } from "../../../constant";
import { SharedComp } from "../../../components";

function Team() {
  return (
    <div className="p-4 mb-16">
      <div className="fixed bg-slate-50 max-w-xl mx-auto top-0 left-0 right-0 p-4 z-50">
        <div className="flex justify-between place-items-center">
          <div className="">
            <h1 className="font-semibold text-lg text-slate-700">
              Team Members
            </h1>
          </div>
          <div className="cursor-pointer">
            <EllipsisVerticalIcon className="h-6 w-6 text-slate-700" />
          </div>
        </div>
      </div>
      {/* Search */}
      <div className="mt-14 mb-6">
        <div className="relative">
          <input
            type="text"
            className="shadow-sm bg-transparent w-full pl-10 pr-3 py-2 placeholder-gray-500 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Search team members..."
            autoComplete="off"
          />
          <div className="absolute left-2 top-1/2 -translate-y-1/2">
            <MagnifyingGlassIcon className="h-6 w-6 text-slate-700" />
          </div>
        </div>
      </div>
      {/* Team Member List */}
      <div className="">
        <SharedComp.TeamMember
          image={AVATAR}
          name="Hane Jawkins"
          email="hane.jawkins@gmail.com"
        />
        <SharedComp.TeamMember
          image={AVATAR}
          name="Jane Hawkins"
          email="jane.hawkins@gmail.com"
        />
        <SharedComp.TeamMember
          image={AVATAR}
          name="Jane Hawkins"
          email="jane.hawkins@gmail.com"
        />
        <SharedComp.TeamMember
          image={AVATAR}
          name="Jane Hawkins"
          email="jane.hawkins@gmail.com"
        />
        <SharedComp.TeamMember
          image={AVATAR}
          name="Jane Hawkins"
          email="jane.hawkins@gmail.com"
        />
      </div>
    </div>
  );
}

export default Team;
