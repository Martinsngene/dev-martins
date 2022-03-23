import React from "react";
import Image from "next/image";
import MartinsLogo from "../public/MartinsLogo.png";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import SlideOut from "./animations/SlideOut";
import { NavbarSchemaData } from "../components/constants/NavbarSchema";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <div className="hidden md:block">
        <div className="bg-[#fff] h-[4.5rem] fixed z-10 w-[100%] flex items-center justify-between px-[2rem] shadow-xl">
          <Link href={"/"} passHref={true}>
            <div className="logo flex items-center justify-center bg-[#C2B7E1] w-[60px] h-[55px] rounded-md">
              <div className="logoContainer">
                <Image src={MartinsLogo} width={50} height={25} alt="" />
              </div>
            </div>
          </Link>

          <ul className="flex items-center justify-between w-[45%]">
            {NavbarSchemaData.map((item, index) => (
              <li
                className="font-[500] text-[#001011] text-[0.9rem]"
                key={index}
              >
                <Link href={`${item.route}`} passHref={true}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:hidden bg-[#fff] h-[4rem] fixed z-10 w-[100%] flex items-center justify-between px-[1rem] shadow-xl">
        <Link href={"/"} passHref={true}>
          <div className="logo w-[50%] bg-[#C2B7E1]">
            <Image src={MartinsLogo} width={50} height={25} alt="" />
          </div>
        </Link>
        <div>
          <SlideOut menu={menu}>
            <div
              className={`menuWrapper ${menu === true ? "block" : "hidden"}`}
              id="hamBurgerMenu"
            >
              <div className="menuBody">
                <div className="menuCloseContainer">
                  <button id="navMenuClose" onClick={() => setMenu(!menu)}>
                    <AiOutlineClose size={"26px"} />
                  </button>
                </div>
                <ul className="flex flex-col justify-between">
                  {NavbarSchemaData.map((item, index) => (
                    <li
                      className="font-[500] my-[0.6rem] text-[#001011] text-[14px]"
                      key={index}
                    >
                      <Link href={`${item.route}`} passHref={true}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SlideOut>
        </div>
        <button>
          <AiOutlineMenu size={"26px"} onClick={() => setMenu(!menu)} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
