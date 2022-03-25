import Image from "next/image";
import CustomLink from "./CustomLink";
import { BsArrowRight } from "react-icons/bs";

const Card2 = ({ children, src, buttonLabel, link, dateTime }) => {
  return (
    <div className="bg-[#fff] p-2 hover:shadow-2xl border border-[#e3e3e3] w-[200px] md:w-[300px]">
      <div>
        <Image src={src} width={300} height={200} alt="" />
      </div>
      <div className="cardDescriptionContainer p-2">
        <p>{children}</p>
      </div>
      <div className="cardBtnContainer my-1 mx-1 flex items-center justify-between text-[0.8rem]">
        <CustomLink
          href={link}
          textStyle="text-[#123384] font-[600] flex w-full items-center justify-between"
          className="w-[25%] cursor-pointer"
        >
          <span>{buttonLabel}</span>
          <BsArrowRight />
        </CustomLink>

        <span>{dateTime}</span>
      </div>
    </div>
  );
};

export default Card2;
