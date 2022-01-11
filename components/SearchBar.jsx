import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="relative border border-gray-400 p-2 bg-[#FAFAFA] rounded-full">
      <div className=" flex">
        <div className=" transform translate-y-1 ">
          <FiSearch />
        </div>
        <input
          className=" w-full ml-2 bg-[#FAFAFA] outline-none font-bold"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default SearchBar;
