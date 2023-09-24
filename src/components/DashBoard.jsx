import React from "react";
import Sales from "./Sales";
import Users from "../containers/Users";
import SocialMedia from "./SocialMedia";
import Rating from "../containers/Rating";

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

      <div className="flex">
        <Rating />
      </div>
    </div>
  );
};

export default DashBoard;
