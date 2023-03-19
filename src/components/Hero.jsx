import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] ">
      <img
        src="/assets/wallpaper.jpg"
        alt=""
        className="w-full h-full object-cover "
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl">Find your special trip</h1>
          <h2 className="text-4xl py-4 italic">With Weekaway</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
            inventore debitis aperiam magni vero quae corporis accusamus
            quibusdam sunt voluptas ullam, voluptate ducimus officia nihil fuga
            ratione reiciendis veritatis necessitatibus!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
