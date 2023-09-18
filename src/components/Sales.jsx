import React from "react";
import ProgressBar from "../containers/ProgressBar";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

const generateRandomValue = (min, max) => {
  const random = (Math.random() * (max - min) + min).toFixed(2);
  return parseFloat(random);
};

const salesItems = [
  {
    content: "Daily Sales",
    arrow: <BsArrowUp />,
    number: generateRandomValue(100.0, 999.0),
    percentage: Math.floor(generateRandomValue(20, 25)),
  },
  {
    content: "Monthly Sales",
    arrow: <BsArrowDown />,
    number: generateRandomValue(1000.0, 9999.0),
    percentage: Math.floor(generateRandomValue(40, 60)),
  },
  {
    content: "Yearly Sales",
    arrow: <BsArrowUp />,
    number: generateRandomValue(1000.0, 9999.0),
    percentage: Math.floor(generateRandomValue(75, 87)),
  },
];

const Sales = () => {
  return (
    <div className="flex w-full justify-center">
      {salesItems.map((item, i) => {
        return (
          <div
            key={i}
            className="flex flex-col gap-4 w-[30%] py-8 px-5 m-4 bg-white shadow-md"
          >
            <div className="font-light text-base">{item.content}</div>
            <div className="flex items-center justify-between w-full">
              <div className="flex justify-between items-center gap-2 text-[25px]">
                <div
                  className={`${
                    i == 1 ? "text-red-600" : "text-blue-600"
                  } text-2xl`}
                  styles={{
                    fontWeight: 900,
                  }}
                >
                  {item.arrow}
                </div>
                <div className="font-light">${item.number}</div>
              </div>
              <div className="text-gray-500 text-sm">{`${item.percentage}%`}</div>
            </div>
            <div className="flex-shrink-0 bg-blue-800 w-full">
              <ProgressBar progressNum={item.percentage} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sales;
