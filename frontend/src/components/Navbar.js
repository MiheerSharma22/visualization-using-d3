import React, { useEffect } from "react";
import dummyImage from "../assets/dummyUser.png";

const Navbar = () => {
  useEffect(() => {
    //eslint-disable-next-line
  }, []);

  return (
    <div className="w-9/12 mx-auto border border-borderColor flex items-center justify-between px-[2rem] py-[1rem] rounded-lg">
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
