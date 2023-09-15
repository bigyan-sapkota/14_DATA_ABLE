import React from "react";
import ProgressBar from "../containers/ProgressBar";
import { BsArrowUp } from "react-icons/bs";

const Sales = () => {
  return (
    <div className="flex flex-col gap-4 w-[28%] p-6 m-4 bg-white shadow-md">
      <div className="font-light text-base">Daily Sales</div>
      <div className="flex items-center justify-between w-full">
        <div className="flex justify-between items-center gap-2 text-[25px]">
          <BsArrowUp className="text-blue-600" />
          <div className="font-light">$249.95</div>
        </div>
        <div className="text-gray-500 text-sm">50%</div>
      </div>
      <div>
        <ProgressBar progressNum={10} />
      </div>
    </div>
  );
};

export default Sales;
