import React from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import Card from "./Card";

const Test = () => {
  const ref = React.createRef();

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  return (
    // <div className="w-full bg-red-600 h-96 relative overflow-y-hidden overflow-x-auto px-12 py-4 flex whitespace-nowrap">
    //   <button className="absolute  top-1/2 left-0">
    //     <BsArrowLeftCircle size={"30px"} />
    //   </button>
    //   <button className="absolute top-1/2 right-0">
    //     <BsArrowRightCircle size={"30px"} />
    //   </button>
    //   <Card />
    //   <Card />
    //   <Card />
    //   <Card />
    //   <Card />
    // </div>
    <div>
      <div className="outer">
        <Card ref={ref} />

        <Card ref={ref} />

        <Card ref={ref} />

        <Card ref={ref} />

        <Card ref={ref} />

        <Card ref={ref} />

        <Card ref={ref} />

        <Card ref={ref} />

        <Card ref={ref} />

        <Card ref={ref} />
      </div>
      <div>
        <button onClick={() => scroll(-20)}>LEFT</button>
        <button onClick={() => scroll(20)}>RIGHT</button>
      </div>
    </div>
  );
};

export default Test;
