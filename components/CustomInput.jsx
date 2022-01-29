import React from "react";

export default function CustomInput(props) {
  return (
    <div className="rounded-md w-full mb-4">
      <div className="flex items-center">
        <input
          className={`w-full outline-none font-bold ${props.className}`}
          type={props.type}
          id={props.id}
          name={props.name}
          disabled={props.disabled}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
}
