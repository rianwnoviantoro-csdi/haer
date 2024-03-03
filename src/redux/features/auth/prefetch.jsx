import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

function Prefetch() {
  useEffect(() => {}, []);

  return <Outlet />;
}

export default Prefetch;
