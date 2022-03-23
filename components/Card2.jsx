import Image from "next/image";
import CustomLink from "./CustomLink";
import { BsArrowRight } from "react-icons/bs";

const Card2 = ({ children, src, buttonLabel, link }) => {
  return (
    <div className="bg-[#fff] p-2 hover:shadow-2xl border border-[#e3e3e3] w-[300px]">
      <div>
        <Image src={src} width={300} height={200} alt="" />
      </div>
      <div className="cardDescriptionContainer p-2">
        <p>{children}</p>
      </div>
      <div className="cardBtnContainer my-2 mx-1">
        <CustomLink
          href={link}
          textStyle="text-[#123384] font-[600] flex w-full items-center justify-between"
          className="w-[35%] cursor-pointer"
        >
          <span>{buttonLabel}</span>
          <BsArrowRight />
        </CustomLink>
      </div>
    </div>
  );
};

export default Card2;
