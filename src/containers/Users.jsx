import React from "react";

const UsersDetails = [
  {
    name: "Rita Adhkari",
    discription:
      "You should have turned off the light. My friend we should save electricity.",
    status: "offline",
  },
];

const Users = () => {
  return (
    <div className="flex w-full justify-sart">
      <div className="">
        {UsersDetails.map((detail, i) => (
          <div className="main_div">
            <div className="image_username">
              <div>
                <img src="./user-1.jpeg" alt="" />
              </div>
              <div></div>
            </div>
            <div className="status_date"></div>
            <div className="buttons"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
