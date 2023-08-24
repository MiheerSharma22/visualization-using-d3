import React from "react";
import dummyImage from "../assets/dummyUser.png";

const Navbar = () => {
  return (
    <div className="w-9/12 mx-auto border border-[rgba(208,212,241,0.16)] flex items-center justify-between px-[2rem] py-[1rem] rounded-lg">
      <p className="text-textColor text-2xl font-semibold">
        Chart Visualisation
      </p>

      <img
        src={dummyImage}
        alt="dummyUser"
        className="rounded-full w-[45px] aspect-square"
      />
    </div>
  );
};

export default Navbar;
