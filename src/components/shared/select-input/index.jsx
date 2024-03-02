import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

function SelectInput({ label, placeholder, options, value, onChange }) {
  let [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative mt-6">
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            if (value === "") {
              onChange("");
            }
          }}
          className={`bg-white w-full px-3 py-2 placeholder-gray-500 border border-indigo-200 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 appearance-none`}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <ChevronDownIcon className="h-5 w-5 text-gray-500" />
        </div>
      </div>
      <label
        className={`bg-white text-sm px-2 absolute left-2 -top-2.5 text-gray-600 transition-all duration-300 transform origin-[0] ${
          isFocused || value ? "opacity-100 -top-3" : "opacity-0 top-0"
        }`}
      >
        {label}
      </label>
    </div>
  );
}

export default SelectInput;
