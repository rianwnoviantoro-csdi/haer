import React from "react";
import dayjs from "dayjs";

function NotificationItem({title, excerp, image, date}) {
  return (
    <>
      <div className="my-4 flex gap-3 place-items-start">
        {image}
        <div className="">
          <h4 className="font-semibold text-slate-700 leading-normal">
            {title}
          </h4>
          <h5 className="text-sm text-slate-700 leading-relaxed">
            {excerp}
          </h5>
          <p className="text-xs text-[#ACAFB5] leading-normal">{dayjs().format("MMMM DD, YYYY")} at {dayjs().format("hh:mm a")}</p>
        </div>
      </div>
      <hr />
    </>
  );
}

export default NotificationItem;
