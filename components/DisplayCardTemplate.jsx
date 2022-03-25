import CustomImage from "./CustomImage";
import CustomLink from "./CustomLink";
import { BsArrowRight } from "react-icons/bs";

const DisplayCardTemplate = ({
  img,
  header,
  children,
  buttonLabel,
  link,
  time,
  id,
}) => {
  return (
    <div className="w-[60%] md:w-full bg-[#C2B7E1] mx-auto md:mx-0 flex flex-col md:flex-row justify-center items-center my-[3rem]">
      <div className="itemTwo h-[200px] w-full md:w-[55%] py-[1rem] px-[2rem]">
        <div className="head">
          <h1 className="text-[1.5rem] font-[600] text-[#17224D]">{header}</h1>
        </div>
        <div className="body">
          <p className="text-[1.1rem] font-[400] text-[#17224D]">{children}</p>
        </div>

        <div className="cardBtnContainer my-[2rem] mx-1 flex items-center justify-between">
          <CustomLink
            href={`/posts/${id}`}
            textStyle="text-[#123384] font-[600] flex w-full items-center justify-between"
            className="w-[10%] cursor-pointer"
          >
            <span>{buttonLabel}</span>
            <BsArrowRight />
          </CustomLink>

          <span className="time">{time}</span>
        </div>
      </div>

      <CustomImage
        className="itemOne w-full md:w-[45%] h-full flex items-center justify-center"
        src={img}
        width={600}
        height={320}
      />
    </div>
  );
};

export default DisplayCardTemplate;
