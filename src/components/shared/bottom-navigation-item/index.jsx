import React from "react";
import { Link } from "react-router-dom";

function BottomNavigationItem({ path, icon, center = false, isActive }) {
  return (
    <Link to={path} className="w-full flex justify-center">
      {center ? (
        <div className="bg-[#3085FE] outline outline-8 outline-white absolute w-14 h-14 rounded-full -top-4 flex items-center justify-center">
          <div>{icon}</div>
        </div>
      ) : (
          <div className="flex flex-col justify-center place-items-center">
            {icon}
            {isActive ? (
              <div className="mt-1 rounded-full h-1 w-2 bg-[#3085FE]/50"></div>
            ) : (
              <div className="mt-1 rounded-full h-1 w-2"></div>
            )}
          </div>
      )}
    </Link>
  );
}

export default BottomNavigationItem;
