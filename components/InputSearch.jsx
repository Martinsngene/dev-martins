import React from "react";
import { RiSearchLine } from "react-icons/ri";

function SearchBar({ className }) {
  return (
    <div className="relative searchBar p-2 rounded-md">
      <div className={`flex ${className}`}>
        <button className="flex items-center justify-center transform ">
          <RiSearchLine />
        </button>
        <input
          className=" w-full ml-2 outline-none font-[500]"
          placeholder="Search"
        />
      </div>
    </div>
  );
}

export default SearchBar;
