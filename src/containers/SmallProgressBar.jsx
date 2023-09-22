import React from "react";

const colors = ["blue-gradient", "purple-gradient"];

const SmallProgressBar = ({ generateRandomNumbers }) => {
  const color = colors[generateRandomNumbers(1, 2) - 1];
  return (
    <div className="w-full">
      <div className="bg-[#F4F7FA] h-[7px] w-full">
        <div className={`h-[8px] ${color} shadow-lg`}></div>
      </div>
    </div>
  );
};

export default SmallProgressBar;
