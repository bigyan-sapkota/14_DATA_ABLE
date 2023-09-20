import React from "react";
import { FaFacebookF, FaGooglePlusG, FaTwitter } from "react-icons/fa";
import ProgressBar from "../containers/ProgressBar";

const generateRandomNumbers = (min, max) => {
  const number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
};

const arrayOfRandomNumbers = [
  generateRandomNumbers(10000, 30000).toLocaleString(),
  generateRandomNumbers(10000, 30000).toLocaleString(),
  generateRandomNumbers(10000, 30000).toLocaleString(),
];
const arrayOfRandomPercentage = [
  (generateRandomNumbers(11, 99) / 10).toFixed(1),
  (generateRandomNumbers(11, 99) / 10).toFixed(1),
  (generateRandomNumbers(11, 99) / 10).toFixed(1),
];

const arrayOfRandomTargets = [
  generateRandomNumbers(50000, 60000).toLocaleString(),
  generateRandomNumbers(40000, 50000).toLocaleString(),
  generateRandomNumbers(70000, 80000).toLocaleString(),
];
const socialMedias = [
  {
    logo: <FaFacebookF className="text-[#007BFF] text-4xl hover:scale-125" />,
    number: arrayOfRandomNumbers[0],
    percentage: arrayOfRandomPercentage[0],
    target: arrayOfRandomTargets[0],
    duration: generateRandomNumbers(100, 999),
  },
  {
    logo: <FaTwitter className="text-[#04A9F5] text-4xl hover:scale-125" />,
    number: arrayOfRandomNumbers[1],
    percentage: arrayOfRandomPercentage[1],
    target: arrayOfRandomTargets[1],
    duration: generateRandomNumbers(100, 999),
  },
  {
    logo: <FaGooglePlusG className="text-[#F44236] text-4xl hover:scale-125" />,
    number: arrayOfRandomNumbers[2],
    percentage: arrayOfRandomPercentage[2],
    target: arrayOfRandomTargets[2],
    duration: generateRandomNumbers(100, 999),
  },
];

const SocialMedia = () => {
  return (
    <div className="flex w-full justify-center">
      {socialMedias.map((media, i) => {
        return (
          <div key={i} className="w-[30%] m-4 bg-white shadow-md">
            <div className="flex items-center justify-between px-7 pt-7 mb-7">
              <div>{media.logo}</div>
              <div className="text-right">
                <p className="text-2xl">{media.number}</p>
                <p className="text-[18px] text-[#6C757D] mt-1">
                  <span className="text-[#1dc8e3]">{`${media.percentage}%`}</span>{" "}
                  Total Likes
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full h-[1px] bg-[#DEE2E6]"></div>
            </div>
            <div className="flex justify-between mt-5 px-7 pb-5 text-base">
              <div className="border-0 border-[#DEE2E6] border-r-[1px] py-[2px] pr-9 text-sm">
                <p className="text-[#6C757D]">
                  Target:<span className="text-black"> {media.target}</span>
                </p>
              </div>
              <div>
                <p className="text-[#6C757D] text-sm">
                  Duration:<span className="text-black"> {media.duration}</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SocialMedia;
