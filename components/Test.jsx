import React, { useEffect, useState, useRef } from "react";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import Card from "./Card";

const Test = () => {
  const [scrollValue, setScrollValue] = useState(0);

  const ref = useRef();

  const scrollSection = () => {
    ref.current.focus();

    window.scrollTo({
      left: 300,
      behavior: "smooth",
    });

    // console.log("right");

    // window.scrollTo({
    //   right: 300,
    //   behavior: "smooth",
    // });
  };

  // useEffect(() => {
  //   window.addEventListener("click", scrollSection);

  //   return () => {
  //     window.removeEventListener("click", scrollSection);
  //   };
  // }, []);

  return (
    <div>
      <div ref={ref} className="outer">
        <Card />

        <Card />

        <Card />

        <Card />

        <Card />

        <Card />

        <Card />

        <Card />

        <Card />

        <Card />
      </div>

      <div>
        <button onClick={scrollSection}>
          <BsArrowLeftSquare size={"50px"} />
        </button>
        <button onClick={scrollSection}>
          <BsArrowRightSquare size={"50px"} />
        </button>
      </div>
    </div>
  );
};

export default Test;
