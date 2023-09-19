import React from "react";
import Button from "../containers/Button";
import { LiaHandPeaceSolid } from "react-icons/lia";

const UpcomingEvent = () => {
  return (
    <div className="w-full">
      <div className="w-full bg-white p-6 flex flex-col gap-3 shadow-md">
        <div className="text_button flex w-full justify-between">
          <div className="text-base">Upcoming Event</div>
          <div>
            <Button text="34%" bgColor="purple-gradient" isOfEvent={true} />
          </div>
        </div>

        <div className="flex">
          <div>
            <p className="text-5xl font-extralight">
              45<sub className="font-extralight text-sm">Competitors</sub>
            </p>
            <p className="font-normal text-sm text-[#6C7581] my-3 whitespace-nowrap">
              You can participate in event
            </p>
          </div>
          <div className="mt-5 ml-8">
            <LiaHandPeaceSolid className="text-[#A18BD4] text-6xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
