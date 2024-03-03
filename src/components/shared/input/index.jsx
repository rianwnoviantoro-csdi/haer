import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

function Input({ label, placeholder, type = "text", value, onChange, props }) {
  let [isFocused, setIsFocused] = useState(false);
  let [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const autoCompleteType = type === "password" ? "new-password" : "off";
  const inputType = isPasswordVisible ? "text" : type;

  return (
    <div className="relative mt-6">
      <input
        {...props}
        type={inputType}
        className={`bg-white w-full px-3 py-2 placeholder-gray-500 border border-indigo-200 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
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
        autoComplete={autoCompleteType}
      />
      <label
        className={`bg-white text-sm px-2 absolute left-2 -top-2.5 text-gray-600 transition-all duration-300 transform origin-[0] ${
          isFocused || value ? "opacity-100 -top-3" : "opacity-0 top-0"
        }`}
      >
        {label}
      </label>
      {type === "password" && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          {isPasswordVisible ? (
            <EyeSlashIcon
              className="h-5 w-5 cursor-pointer text-slate-500 hover:text-slate-800 transition-colors duration-200"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <EyeIcon
              className="h-5 w-5 cursor-pointer text-slate-500 hover:text-slate-800 transition-colors duration-200"
              onClick={togglePasswordVisibility}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Input;
