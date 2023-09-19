import React from "react";
import DateAndTime from "./DateAndTime";
import Button from "./Button";

const UsersDetails = [
  {
    name: "Rita Timilsina",
    description: "Turn off the light after using it...",
  },
  {
    name: "Bigyan Lawliet",
    description: "Plant new flowers in the gard...",
  },
  {
    name: "Sita Neupane",
    description: "To every action there is equa...",
  },
  {
    name: "Light Yagami",
    description: "Everything in this universe is e...",
  },
  {
    name: "Roney Adhikari",
    description: "Using too much mobile is bad...",
  },
];

const Users = () => {
  return (
    <div className="w-full mt-4">
      <div
        className="bg-white ml-[1.5rem]"
        style={{
          width: "calc(60% + 2rem)",
        }}
      >
        <div className="flex items-center py-4 gap-5">
          <div className="h-6 w-1 bg-[#04A9F5]"></div>
          <div className="">Recent Users</div>
        </div>
        {UsersDetails.map((detail, i) => (
          <div
            key={i}
            className="flex justify-between items-center py-4 px-3"
            style={{
              borderTop: "1px solid #dcd9d9",
            }}
          >
            <div className="flex gap-7">
              <div className="h-10 w-10">
                <img src={`./user-${i + 1}.jpeg`} alt="" />
              </div>
              <div className="">
                <p className="font-normal text-[16px]">{detail.name}</p>
                <p className="font-light text-[15px] overflow-hidden text-gray-500">
                  {detail.description}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <div
                  className={`${
                    (i + 1) % 2 == 0 ? "bg-red-600" : "blue-gradient"
                  } w-2 h-2 rounded-full`}
                ></div>
              </div>
              <div className="text-gray-500">
                <DateAndTime />
              </div>
            </div>
            <div className="flex gap-1">
              <div>
                <Button text="Reject" bgColor="purple-gradient" />
              </div>
              <div>
                <Button text="Approve" bgColor="blue-gradient" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
