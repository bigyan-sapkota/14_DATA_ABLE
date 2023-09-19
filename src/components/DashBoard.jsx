import React from "react";
import Sales from "./Sales";
import Users from "../containers/Users";

const DashBoard = () => {
  return (
    <div className="bg-[#F4F7FA] w-full">
      <Sales />
      <Users />
    </div>
  );
};

export default DashBoard;
