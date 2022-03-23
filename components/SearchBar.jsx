import React from "react";

function SearchBar({ label, labelId, className, inputId, name }) {
  return (
    <div className={className}>
      <label className="text-[12px] text-[#555] font-[400]" htmlFor={labelId}>
        {label}
      </label>
      <input
        name={name}
        id={inputId}
        className="border border-[#555] py-[1rem] px-[0.6rem] rounded-[8px] mt-[1rem] w-full outline-none font-bold"
      />
    </div>
  );
}

export default SearchBar;
