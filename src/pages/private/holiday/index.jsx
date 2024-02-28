import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import Holidays from "date-holidays";
import dayjs from "dayjs";
import React from "react";

function Holiday() {
  const holidays = new Holidays("ID");
  const currentYear = dayjs().year();
  const holidaysArray = holidays.getHolidays(currentYear);

  return (
    <div className="p-4 mb-10">
      <div className="flex justify-between place-items-center">
        <div className="">
          <h1 className="font-semibold text-lg">Holiday List</h1>
        </div>
      </div>
      {/* Holidays */}
      <div className="my-6">
        {holidaysArray.map((holiday, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg p-3 mb-3 ${
              dayjs(holiday.date).isAfter(dayjs())
                ? "border-l-8 border-blue-500"
                : "border-l-8 border-gray-300"
            }`}
          >
            <div className="mb-3 flex place-items-start">
              <div className="grow flex gap-2 place-items-center">
                <CalendarDaysIcon className="h-4 w-4" />
                <p className="text-sm font-semibold">
                  {dayjs(holiday.date).format("MMMM DD, YYYY")}
                </p>
              </div>
              <div className="">
                <p className="text-xs text-[#ACAFB5]">
                  {dayjs(holiday.date).format("dddd")}
                </p>
              </div>
            </div>
            <h1 className="text-lg font-semibold">{holiday.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Holiday;
