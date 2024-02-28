import React from "react";
import { Outlet } from "react-router-dom";
import { SharedComp } from "..";

function Layout() {
  return (
    <div className="max-w-xl mx-auto bg-gradient-to-t from-slate-300 to-slate-50 min-h-screen">
      <Outlet />
      <SharedComp.BottomNavigation />
    </div>
  );
}

export default Layout;
