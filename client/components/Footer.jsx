import Link from "next/link";
import { RiSendPlaneFill } from "react-icons/ri";
import {
  BsLinkedin,
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsWhatsapp,
} from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="bg-[#1E2833] h-full md:h-1/5 w-full text-white flex-col flex items-center justify-between py-4 px-8">
      <div className="w-full md:w-4/5 flex flex-col md:flex-row items-center justify-between">
        <div className="newsLetter">
          <div className="newsLetterHeader flex items-center justify-center text-[1.2rem] md:text-[1.5rem]">
            <h2 className="md:ml-12">
              Want more great content?
              <br />
              Subscribe!
            </h2>
          </div>
          <div className="newsLetterField flex items-center justify-center">
            <input
              className="border-b text-[0.9rem] bg-[#1E2833] border-[#E6E8E6] p-1 text-[#E6E8E6] outline-none"
              type="text"
              placeholder="Email address"
            />
            <button className="bg-[#C2B7E1] text-[#E6E8E6] p-[0.58rem] rounded-t-md">
              <RiSendPlaneFill />
            </button>
          </div>
        </div>

        <div className="navigationFooter mt-8">
          <ul className="flex flex-col items-center justify-between text-[0.9rem]">
            <li className="text-[#C2B7E1] mb-4 md:-mb-0">Links</li>
            <li className="mb-4 md:-mb-0">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="mb-4 md:-mb-0">
              <Link href={"/"}>All posts</Link>
            </li>
            <li className="mb-4 md:-mb-0">
              <Link href={"/"}>Contact</Link>
            </li>
            <li className="mb-4 md:-mb-0">
              <Link href={"/"}>About</Link>
            </li>
            <li className="mb-4 md:-mb-0">
              <Link href={"/"}>Support</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-4/5 flex flex-col md:flex-row items-center justify-between mt-12 md:mt-24">
        <div className="footerTC md:ml-12 w-full md:w-1/2 text-[0.7rem] md:text-[0.9rem] order-2 md:order-1 mt-8 md:mt-0">
          <div className="w-full md:w-1/2 flex items-center  justify-between">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>

        <div className="socialLinks w-1/2 order-1 md:order-2">
          <ul className="w-full flex items-center justify-center md:justify-end">
            <li className="ml-4 md:ml-8">
              <a href={"/"}>
                <BsLinkedin />
              </a>
            </li>
            <li className="ml-4 md:ml-8">
              <a href={"/"}>
                <BsTwitter />
              </a>
            </li>
            <li className="ml-4 md:ml-8">
              <a href={"/"}>
                <BsFacebook />
              </a>
            </li>
            <li className="ml-4 md:ml-8">
              <a href={"/"}>
                <BsInstagram />
              </a>
            </li>
            <li className="ml-4 md:ml-8">
              <a href={"/"}>
                <BsWhatsapp />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-[0.7rem] mt-8">
        <p className="text-center">
          Copyright &copy; Martins Ngene, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
