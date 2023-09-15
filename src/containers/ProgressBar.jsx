import React from "react";

const ProgressBar = ({ progressNum }) => {
  const progressBarColor =
    progressNum >= 25 && progressNum < 75
      ? "bg-blue-500"
      : progressNum >= 75
      ? "bg-green-500"
      : "bg-red-500";

  return (
    <div>
      <div className="bg-[#F4F7FA] h-[9px] w-full">
        <div className={`h-[10px] w-1/2 ${progressBarColor} shadow-lg`}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
