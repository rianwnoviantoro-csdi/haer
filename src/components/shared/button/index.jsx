import React from "react";

function Button({ background, color, label, border = "", icon, onClick }) {
  return (
    <button
      // type="submit"
      onClick={onClick}
      className={`${background} ${border} w-full py-3 rounded-lg`}
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
