import Image from "next/image";
import CustomLink from "./CustomLink";
import { BsArrowRight } from "react-icons/bs";

const Card = ({ children, src, buttonLabel, id, dateTime }) => {
  return (
    <div className="w-[300px] md:w-[700px] mx-[1rem] border border-[#e3e3e3]">
      <div className="h-[8rem] md:h-[350px] w-[300px] item">
        <div>
          <Image width={700} height={400} src={src} alt="" />
        </div>
        <div className="px-[0.5rem]">
          <h5 className="text-gray-900 text-[1.2rem] font-[700] mb-1">
            Hello World
          </h5>
          <p className="text-gray-700 mb-4">{children}</p>
          <div className="footer w-full">
            <div className="cardBtnContainer my-1 mx-1 flex items-center justify-between text-[0.8rem]">
              <CustomLink
                href={`/posts/${id}`}
                textStyle="text-[#123384] font-[600] flex w-full items-center justify-between"
                className="w-[25%] cursor-pointer"
              >
                <span>{buttonLabel}</span>
                <BsArrowRight />
              </CustomLink>

              <span>{dateTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
