import React from "react";
import { Outlet } from "react-router-dom";
import { SharedComp } from "..";
import { useSelector } from "react-redux";
import { getShowBottomNav } from "../../redux/features/common/common.slice";

function Layout() {
  const showBottomNav = useSelector(getShowBottomNav);

  return (
    <div className="max-w-xl mx-auto bg-gradient-to-t from-slate-300 to-slate-50 min-h-screen">
      <Outlet />
      { showBottomNav && <SharedComp.BottomNavigation /> }
    </div>
  );
}

export default Layout;
