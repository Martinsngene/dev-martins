import React, { useRef } from "react";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import Card from "./Card";

const CardContainer = (props) => {
  const ref = useRef();

  return (
    <div className="CardContainer">
      <div className="w-full flex items-center justify-between px-4">
        <div className="text-[1.5rem] md:text-[2.2rem]">
          <h1>{props.postDate}</h1>
        </div>
        <div className="w-20 sm:flex items-center justify-between hidden ">
          <button
            onClick={() => {
              ref.current.scrollLeft += -400;
            }}
          >
            <BsArrowLeftSquare size={"35px"} />
          </button>

          <button
            onClick={() => {
              ref.current.scrollLeft += 400;
            }}
          >
            <BsArrowRightSquare size={"35px"} />
          </button>
        </div>
      </div>
      <div style={{ scrollBehavior: "smooth" }} ref={ref} className="outer">
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

export default CardContainer;
