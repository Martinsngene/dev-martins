import React from "react";

const HeroCarousel = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="col-span-1">
        <img
          className="w-full h-[40vh] md:h-[80vh]"
          src="/HeroOne.jpg"
          alt="hero img"
        />
      </div>
      <div className="col-span-1 flex items-center justify-center">
        <h1 className="text-[1.7rem] md:text-[3rem] text-center">
          Welcome to Martins Ngene's Blog
        </h1>
      </div>
    </div>
  );
};

export default HeroCarousel;
