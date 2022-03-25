import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

const HeroCarousel = () => {
  return (
    <div className="grid grid-cols-1 pt-[4rem] md:grid-cols-2 gap-4 bg-[#C2B7E1] h-[100vh]">
      <div className="col-span-1 flex flex-col items-center justify-center bg-[#fff] p-[4rem] order-2 md:order-1">
        <h1 className="text-[1.7rem] md:text-[3rem] text-center">
          "Knowledge is gotten by understanding"
        </h1>
        <h3>-Martins Ngene </h3>

        <CustomButton href="#latestSection" className="bg-[#C2B7E1] mt-[1rem]">
          View posts
        </CustomButton>
      </div>

      <div className="col-span-1 p-[2rem] flex items-center justify-center order-1 md:order-2">
        <Image
          className="rounded-lg"
          width={500}
          height={500}
          src="/hero.gif"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroCarousel;
