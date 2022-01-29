import React from "react";

function CustomTextArea(props) {
  return (
    <div className="w-full mb-4">
      <div className="flex items-center justify-center">
        <textarea
          name={props.name}
          id={props.id}
          placeholder={props.placeholder}
          onChange={props.onchange}
          className={`w-full h-20 outline-none font-bold ${props.className}`}
        ></textarea>
      </div>
    </div>
  );
}

export default CustomTextArea;
