import React from "react";
import Image from "next/image";
import MartinsLogo from "../public/MartinsLogo.png";
import Link from "next/link";
import SearchBar from "./SearchBar";
import DarkmodeBtn from "./DarkmodeBtn";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between border-2 px-6 py-2 shadow-lg">
      <div className="logoContainer w-1/5">
        <Image src={MartinsLogo} width={50} height={25} />
      </div>
      <div className="searchBar  w-2/5">
        <SearchBar />
      </div>
      <div className="darkmodeBtn">
        <DarkmodeBtn />
      </div>
      <div className="navigationLinks w-1/5">
        <ul className="flex items-center justify-between ">
          <li className="font-bold">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="font-bold">
            <Link href={"/"}>About</Link>
          </li>
          <li className="font-bold">
            <Link href={"/"}>Contact</Link>
          </li>
          <li className="font-bold">
            <Link href={"/"}>Articles</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
