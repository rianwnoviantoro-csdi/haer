import React, { useEffect, useState } from "react";

function UsePersist() {
  let [isPersist, setIsPersist] = useState(
    JSON.parse(localStorage.getItem("persist")) || false
  );

  useEffect(() => {
    localStorage.setItem("persist", JSON.stringify(isPersist));
  }, [isPersist]);

  return [isPersist, setIsPersist];
}

export default UsePersist;
