import React from "react";

const Button = ({ text, bgColor, isOfEvent }) => {
  return (
    <button
      className={`text-[12.3px] text-white font-normal ${bgColor} ${
        isOfEvent ? "py-2 px-5 rounded-2xl" : "px-2 py-[3px] rounded-3xl"
      } `}
    >
      {text}
    </button>
  );
};

export default Button;
