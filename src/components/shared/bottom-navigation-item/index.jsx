import React from "react";
import { Link } from "react-router-dom";

function BottomNavigationItem({ path, icon, label, center = false }) {
  return (
    <Link to={path} className="w-full flex justify-center">
      {center ? (
        <div className="bg-[#3085FE] outline outline-4 outline-white absolute w-14 h-14 rounded-full -top-7 flex items-center justify-center">
          <div>{icon}</div>
        </div>
      ) : (
        <div className="flex flex-col justify-center place-items-center">
          {icon}
          <p className="mt-1 text-[9px] tracking-wider text-[#ACAFB5]">
            {label}
          </p>
        </div>
      )}
    </Link>
  );
}

export default BottomNavigationItem;
