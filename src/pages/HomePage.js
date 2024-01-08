import React from "react";
import Box1Picture from "../components/containers/Box_1_Picture";
import Box2 from "../components/containers/Box_2";
import Box3 from "../components/containers/Box_3";
import Box4 from "../components/containers/Box_4";
import Box5 from "../components/containers/Box_5";
import Box6 from "../components/containers/Box_6";
import Box7 from "../components/containers/Box_7";
import Box8 from "../components/containers/Box_8";
import Box9 from "../components/containers/Box_9";
import "./Homepage.css";
function HomePage() {
  return (
    <div className="w-[1377px]">
      <div className="flex items-center justify-center h-screen ">
        <div className="grid grid-cols-4 grid-rows-4 grid-flow-row-dense gap-2   bg-[#5f445b] p-2 rounded-xl">
          <Box1Picture />
          <Box2 />
          <Box3 />
          <Box4 />
          <Box5 />
          <Box6 />
          <Box7 />
          <Box8 />
          <Box9 />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
