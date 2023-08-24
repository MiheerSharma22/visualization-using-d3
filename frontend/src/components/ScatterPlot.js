import React from "react";

const ScatterPlot = () => {
  return (
    <div className="w-9/12 mx-auto flex flex-col gap-[2rem] border border-borderColor px-[1.3rem] py-[0.75rem] rounded-lg">
      <p className="text-textColor text-xl font-medium">Scatter Chart</p>
      <div id="container"></div>
    </div>
  );
};

export default ScatterPlot;
