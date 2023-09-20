import React from "react";
import Sales from "./Sales";
import Users from "../containers/Users";
import SocialMedia from "./SocialMedia";

const DashBoard = () => {
  return (
    <div className="bg-[#F4F7FA] w-full">
      <div className="w-full">
        <Sales />
        <Users />
      </div>

      <div className="mt-4">
        <SocialMedia />
      </div>
    </div>
  );
};

export default DashBoard;
