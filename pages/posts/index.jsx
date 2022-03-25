import Card2 from "../../components/Card2";
import Layout from "../../components/Layout";
import InputSearch from "../../components/InputSearch";
import { CardMockData2 } from "../../components/mock/CardMock";
import { BsInfoCircle } from "react-icons/bs";
import { v4 as uuid } from "uuid";

const index = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center px-[2rem] pt-[8rem] pb-[5rem]">
        <div className="flex flex-col items-center justify-center my-[2rem]">
          <p className="flex items-center justify-center">
            <span>
              <BsInfoCircle />
            </span>
            <span className="ml-[0.3rem]">
              For a better search experience, search by a keyword which may be
              found in the heading of the post you are searching for.
            </span>
          </p>
          <div className="w-[65%] mt-[1rem]">
            <InputSearch className="border border-[#e3e3e3] p-[0.5rem] rounded-md" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[2rem]">
          <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[3rem]">
            {CardMockData2.map((item, index) => (
              <Card2
                href={item.href}
                key={uuid()}
                src={item.url}
                buttonLabel={item.buttonLabel}
                dateTime={item.dateTime}
                link={item.link}
                id={uuid()}
              >
                {item.description}
              </Card2>
            ))}
          </div>
          <div className="col-span-1 bg-[#e3e3e3] border border-[#e3e3e3] rounded-md"></div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
