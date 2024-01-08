import React from "react";
import myPhoto from "./../../assets/myPhoto.jpg";
import "./picture.css";

function Box_1_Picture() {
  return (
    <div className="bg-[#323232] p-[2.5em] lg:row-span-2 flex flex-col items-center justify-center rounded-xl">
      <div className="h-56 w-56 overflow-hidden rounded-xl">
        <img src={myPhoto} alt="" className="object-cover" />
      </div>
      <div className="pt-[2em] w-full bg-[#323232]">
        <div className="text-[#fff] text-[1.3em] font-semibold">
          Joshua Melendres
        </div>
        <div className="text-[#cfcfcf] text-[.8em] font-medium">
          Full Stack Developer /
        </div>
        <div className="text-[#cfcfcf] text-[.8em] font-medium">Illstrator</div>
      </div>
    </div>
  );
}

export default Box_1_Picture;
