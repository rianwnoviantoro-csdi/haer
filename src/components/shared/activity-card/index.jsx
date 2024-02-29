import React from "react";
import dayjs from "dayjs";

function ActivityCard({ icon, title, date, status }) {
  return (
    <div className="mb-3 bg-white rounded-2xl p-3 shadow-sm flex gap-3 place-items-center">
      <div className="p-2 bg-[#3085FE]/5 rounded-lg">{icon}</div>
      <div className="grow flex justify-between place-items-center">
        <div className="">
          <h3 className="font-semibold leading-snug">{title}</h3>
          <p className="text-xs text-[#ACAFB5] leading-snug">
            {dayjs(date).format("MMMM DD, YYYY")}
          </p>
        </div>
        <div className="">
          <h3 className="font-semibold leading-snug">
            {dayjs(date).format("hh:mm a")}
          </h3>
          <p className="text-xs text-[#ACAFB5] leading-snug">{status}</p>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
