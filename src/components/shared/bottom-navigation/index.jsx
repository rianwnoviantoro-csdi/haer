import React from "react";
import {
  CalendarIcon,
  HomeIcon,
  SunIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { SharedComp } from "../..";
import { useLocation } from "react-router-dom";

function BottomNavigation() {
  const location = useLocation();

  function IsActive(path) {
    const currentPath = location.pathname;

    if (currentPath === path) {
      return true;
    } else if (currentPath.startsWith(path) && path !== "/dashboard") {
      return true;
    }

    return false;
  }

  return (
    <div className="fixed max-w-xl mx-auto bottom-0 left-0 right-0 shadow-lg p-3 bg-slate-50 flex justify-evenly place-items-center rounded-t-2xl">
      <SharedComp.BottomNavigationItem
        path="/dashboard"
        label="Home"
        icon={
          <HomeIcon
            className={`h-6 w-6 ${
              IsActive("/dashboard") ? "text-[#3085FE]" : "text-slate-600"
            }`}
          />
        }
      />
      <SharedComp.BottomNavigationItem
        path="calendar"
        label="Calendar"
        icon={
          <CalendarIcon
            className={`h-6 w-6 ${
              IsActive("/dashboard/calendar")
                ? "text-[#3085FE]"
                : "text-slate-600"
            }`}
          />
        }
      />
      <SharedComp.BottomNavigationItem
        center={true}
        icon={<UserGroupIcon className="h-6 w-6 text-white" />}
      />
      <SharedComp.BottomNavigationItem
        path="leave"
        label="Leave"
        icon={
          <SunIcon
            className={`h-6 w-6 ${
              IsActive("/dashboard/leave") ? "text-[#3085FE]" : "text-slate-600"
            }`}
          />
        }
      />
      <SharedComp.BottomNavigationItem
        path="profile"
        label="Profile"
        icon={
          <UserIcon
            className={`h-6 w-6 ${
              IsActive("/dashboard/profile")
                ? "text-[#3085FE]"
                : "text-slate-600"
            }`}
          />
        }
      />
    </div>
  );
}

export default BottomNavigation;
