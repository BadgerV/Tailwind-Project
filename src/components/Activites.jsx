import React from "react";

const Activites = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
      <div className="relative p-4 flex-1">
        <h3 className="absolute z-20 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          Resorts
        </h3>
        <img
          src="/assets/resort1.jpg"
          alt=""
          className="w-full h-full object-cover relative border-4 border-white"
        />
      </div>

      <div className="relative p-4 flex-1">
        <h3 className="absolute z-20 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          Resorts
        </h3>
        <img
          src="/assets/resort2.jpg"
          alt=""
          className="w-full h-full object-cover relative border-4 border-white"
        />
      </div>
      <div className="relative p-4 flex-1 ">
        <h3 className="absolute z-20 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          Resorts
        </h3>
        <img
          src="/assets/resort3.jpg"
          alt=""
          className="w-full h-full object-cover relative border-4 border-white"
        />
      </div>
    </div>
  );
};

export default Activites;
