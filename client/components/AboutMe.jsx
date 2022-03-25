import React from "react";
import Image from "next/image";
import AboutMeImage from "../public/AboutMeImage.jpg";

function AboutMe() {
  return (
    <div className="flex items-center justify-center my-[3rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%]">
        <div className="col-span-1 flex items-center justify-center">
          <div className="w-[80%] md:w-[80%] flex items-center justify-center border-2 border-[#FF8C42] rounded-lg p-2">
            <Image src={AboutMeImage} width={700} height={400} alt="" />
          </div>
        </div>
        <div className="col-span-1">
          <div className="aboutMeHeader">
            <h2 className="text-[2.3rem] text-[#FF8C42]">About Me</h2>
          </div>
          <div className="aboutMeBody">
            <p className="text-[1rem]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
              voluptatum, repellat sint rerum delectus consectetur est, ad,
              debitis sunt provident error ipsa id. Iste id suscipit mollitia
              animi, quae vel.
            </p>
            <br />
            <p className="text-[1rem]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
              voluptatum, repellat sint rerum delectus consectetur est, ad,
              debitis sunt provident error ipsa id. Iste id suscipit mollitia
              animi, quae vel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
