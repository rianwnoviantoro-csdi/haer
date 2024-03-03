import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import UseAuth from "../../../hooks/use-auth";

function RequireAuth() {
  const location = useLocation();
  const { status } = UseAuth();

  return status ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}

export default RequireAuth;
