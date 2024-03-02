import dayjs from "dayjs";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

function DatePickerInput({ label, placeholder, value, onChange }) {
  let [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative mt-6">
      <DatePicker
        selected={value}
        onChange={(date) => {
          onChange(date);
          setIsFocused(false);
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          if (!value) {
            onChange(null);
          }
        }}
        dateFormat="dd/MM/yyyy" // Customize date format as needed
        className={`bg-white w-full px-3 py-2 placeholder-gray-500 border border-indigo-200 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
        calendarClassName="custom-calendar"
        placeholderText={isFocused ? "" : placeholder}
      />
      <label
        className={`bg-white text-sm px-2 absolute left-2 -top-2.5 text-gray-600 transition-all duration-300 transform origin-[0] ${
          isFocused || value ? "opacity-100 -top-3" : "opacity-0 top-0"
        }`}
      >
        {label}
      </label>
      <div className="absolute right-3 top-1/2 -translate-y-1/2">
        <CalendarDaysIcon className="h-5 w-5 cursor-pointer text-slate-500 hover:text-slate-800 transition-colors duration-200" />
      </div>
    </div>
  );
}

export default DatePickerInput;
