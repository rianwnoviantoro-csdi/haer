import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

function TextArea({ label, placeholder, value, onChange }) {
  let [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative mt-6">
      <textarea
        className={`bg-white w-full min-h-32 px-3 py-2 placeholder-gray-500 border border-indigo-200 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          if (value === "") {
            onChange("");
          }
        }}
        placeholder={isFocused ? "" : placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
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

export default TextArea;
