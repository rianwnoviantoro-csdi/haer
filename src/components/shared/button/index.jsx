import React from "react";

function Button({ background, color, label, border = "", icon }) {
  return (
    <button
      type="submit"
      className={`${background} ${border} w-full py-2.5 rounded-lg`}
    >
      {icon ? (
        <div className="flex justify-center gap-2">
          <img src={icon} alt="" />
          <p className={`${color} text-lg font-light tracking-wide`}>{label}</p>
        </div>
      ) : (
        <p className={`${color} text-lg font-light tracking-wide`}>{label}</p>
      )}
    </button>
  );
}

export default Button;
