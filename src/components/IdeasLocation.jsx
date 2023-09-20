import React from "react";
import { IoFlashOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

const randomNumber = (max, min) => {
  const num = Math.floor(Math.random() * (max - min + 1) + min);
  return num;
};

const items = [
  {
    icon: <IoFlashOutline className="text-[#1DE9B6] text-4xl" />,
    number: randomNumber(100, 999),
    text: "TOTAL IDEAS",
  },
  {
    icon: <IoLocationOutline className="text-4xl text-[#04A9F5]" />,
    number: randomNumber(10, 99),
    text: "TOTAL LOCATIONS",
  },
];

const IdeasLocation = () => {
  return (
    <div className="mt-4 py-5 bg-white shadow-md">
      <div>
        {items.map((item, i) => (
          <div key={i}>
            <div className="px-4 py-3">
              <div className={`flex items-center gap-10 w-full}`}>
                <div>{item.icon}</div>
                <div>
                  <div className="text-2xl font-light">{item.number}</div>
                  <div className="text-sm my-1 font-light">{item.text}</div>
                </div>
              </div>
            </div>

            {i === 0 ? (
              <div className="w-full">
                <div className="w-full h-[1.5px] bg-[#DEE2E6]"></div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IdeasLocation;
