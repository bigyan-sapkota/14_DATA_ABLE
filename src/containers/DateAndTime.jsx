import React from "react";
import { format } from "date-fns";

const DateAndTime = () => {
  const date = new Date();
  const dateFormat = "dd MMM HH:mm";
  const formattedDate = format(date, dateFormat);
  return <div>{formattedDate}</div>;
};

export default DateAndTime;
