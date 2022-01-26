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

//   const button = document.getElementById('slide');

// button.onclick = function () {
//   document.getElementById('container3').scrollLeft += 20;
// };

  return (
    <div className="relative">
     <div className="absolute top-[-9.5%] w-[6rem] right-[2%] flex items-center justify-between">
        <button onClick={function () {
  const cardBox = document.getElementById('container3')
  cardBox.scrollLeft += -400;
  // cardBox.scrollBehavior = "smooth";
}
}>
          <BsArrowLeftSquare size={"35px"} />
        </button>

        <button id="slide" onClick={function () {
  const cardBox = document.getElementById('container3')
  cardBox.scrollLeft += 400;
  // cardBox.scrollBehavior = "smooth";
}
}>
          <BsArrowRightSquare size={"35px"} />
        </button>
      </div>
      <div id="container3" style={{scrollBehavior: "smooth"}} ref={ref} className="outer">
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
    </div>
  );
};

export default Test;
