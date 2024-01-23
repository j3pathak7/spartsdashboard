import React from "react";
import Div1 from "./div1/Div1";
import Div2 from "./div2/Div2";
import Div5 from "./div5/Div5";
import Div4 from "./div4/Div4";
import Div3 from "./div3/Div3";

const Board = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col sm:flex-row">
        <div className="py-4 w-full sm:w-1/2 bg-white mb-2 mr-2 sm:mb-0">
          <Div1 />
        </div>
        <div className="w-full sm:w-1/2 bg-white">
          <Div2 />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 bg-white mb-2 mr-2 sm:mb-0">
          <Div3 />
        </div>
        <div className="w-full sm:w-1/2 bg-white">
          <Div4 />
        </div>
      </div>
      <div className="bg-white">
        <Div5 />
      </div>
    </div>
  );
};

export default Board;
