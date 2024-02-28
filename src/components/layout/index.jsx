import React from "react";
import { Outlet } from "react-router-dom";
import { SharedComp } from "..";

function Layout() {
  return (
    <div className="max-w-xl mx-auto bg-white min-h-screen">
      <Outlet />
      <SharedComp.BottomNavigation />
    </div>
  );
}

export default Layout;
