import React from "react";

const ProgressBar = ({ progressNum }) => {
  const progressBarColor =
    progressNum >= 0 && progressNum < 25
      ? "red-gradient"
      : progressNum >= 25 && progressNum < 75
      ? "purple-gradient"
      : "blue-gradient";

  return (
    <div className="w-full">
      <div className="bg-[#F4F7FA] h-[9px] w-full">
        <div
          className={`h-[10px] ${progressBarColor} shadow-lg`}
          style={{
            width: `${progressNum}%`,
            boxShadow: "5px 10px 20px #ccc",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
