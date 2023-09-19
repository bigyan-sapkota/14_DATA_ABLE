import React from "react";

const Button = ({ text, bgColor }) => {
  return (
    <button
      className={`text-[12px] text-white font-normal ${bgColor} px-2 py-0.5 `}
      style={{
        borderRadius: "20px",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
