import React from "react";
import Image from "next/image";
import MartinsLogo from "../public/MartinsLogo.png";
import Link from "next/link";
import SearchBar from "./SearchBar";
// import DarkmodeBtn from "./DarkmodeBtn";
import SideMenu from "./SideMenu";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between border-2 px-2 md:px-6 py-2 shadow-l fixedg">
      <div className="logoContainer w-1/6">
        <Image src={MartinsLogo} width={50} height={25} alt="" />
      </div>
      <div className="searchBar hidden md:block w-2/6">
        <SearchBar />
      </div>
      {/* <div className="darkmodeBtn">
        <DarkmodeBtn />
      </div> */}
      <div>
        <SideMenu />
      </div>
      <div className="navigationLinks w-2/6 hidden md:block">
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
            <Link href={"/"}>All posts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
