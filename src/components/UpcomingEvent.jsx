import React from "react";
import Button from "../containers/Button";
import { LiaHandPeaceSolid } from "react-icons/lia";

const UpcomingEvent = () => {
  return (
    <div className="w-[30%]">
      {/* w-[30%] py-8 px-5 m-4 bg-white shadow-md */}
      <div className="mt-4 ml-4 bg-white">
        <div className="text_button flex">
          <div>Upcoming Event</div>
          <div>
            <Button text="34%" bgColor="purple-gradient" />
          </div>
        </div>

        <div>
          <div>
            <p>
              45<sub>Competitors</sub>
            </p>
            <p>You can participate in event</p>
          </div>
          <div className="text-[#A18BD4]">
            <LiaHandPeaceSolid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
