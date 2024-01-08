import {
  faLinkedin,
  faSquareFacebook,
  faSquareGithub,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Box_6() {
  return (
    <div className="flex justify-center boder-2 border-[2px] border-black rounded-xl bg-[#fff] p-2">
      <div className="grid grid-cols-3 grid-rows-2 grid-flow-row-dense gap-x-6 items-center justify-center">
        <div className="flex items-center justify-center">
          <FontAwesomeIcon
            icon={faSquareFacebook}
            className="w-[3em] h-[3em]  text-[#313131]"
          />
        </div>
        <div className="flex items-center justify-center">
          <FontAwesomeIcon
            icon={faSquareGithub}
            className="w-[3em] h-[3em] text-[#313131]"
          />
        </div>
        <div className="flex items-center justify-center">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="w-[3em] h-[3em]  text-[#313131]"
          />
        </div>
        <div className="flex items-center justify-center">
          <FontAwesomeIcon
            icon={faTelegram}
            className="w-[3em] h-[3em]  text-[#313131] "
          />
        </div>
        <div className="flex items-center justify-center">
          <FontAwesomeIcon
            icon={faTwitter}
            className="w-[3em] h-[3em]  text-[#313131]"
          />
        </div>
      </div>
    </div>
  );
}

export default Box_6;
