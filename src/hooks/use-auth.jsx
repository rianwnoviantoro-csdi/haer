import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentAccount } from "../redux/features/auth/auth.slice";

function UseAuth() {
  const account = useSelector(selectCurrentAccount);

  let status = false;

  if (account) {
    status = true;
  }

  return { status };
}

export default UseAuth;
