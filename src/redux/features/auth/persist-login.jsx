import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./auth.slice";
import { doRefresh } from "../../apis/auth.api";
import { Outlet } from "react-router-dom";
import UsePersist from "../../../hooks/use-persist";

function PersistLogin() {
  let [success, setSuccess] = useState(false);

  const [isPersist] = UsePersist();
  const token = useSelector(selectCurrentToken);
  const affectRan = useRef(false);
  const [
    refresh,
    {
      isUninitialized: uninitializedRefresh,
      isLoading: loadingRefresh,
      isSuccess: successRefresh,
      isError: errorRefresh,
      error,
    },
  ] = doRefresh();

  useEffect(() => {
    if (affectRan.current === true) {
      const verifyRefreshToken = async () => {
        try {
          await refresh();
          setSuccess(true);
        } catch (err) {
          console.log(err);
        }
      };

      if (!token & isPersist) {
        verifyRefreshToken();
      }
    }

    return () => (affectRan.current = true);
  }, []);

  useEffect(() => {
    if (errorRefresh) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [errorRefresh]);

  if (!isPersist) {
    return <Outlet />;
  } else if (errorRefresh) {
    return (
      <div className="fixed inset-0 max-w-xl mx-auto bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50">
        {`${error?.data?.message} - `}
        <Link to="/">Please login again</Link>
      </div>
    );
  } else if (successRefresh && success) {
    return <Outlet />;
  } else if (token && uninitializedRefresh) {
    return <Outlet />;
  }
}

export default PersistLogin;
