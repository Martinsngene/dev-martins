import Card2 from "../../components/Card2";
import Layout from "../../components/Layout";
import { CardMockData2 } from "../../components/mock/CardMock";

const index = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center px-[2rem] pt-[10rem] pb-[5rem]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[3rem]">
          {CardMockData2.map((item, index) => (
            <Card2
              href={item.href}
              key={index}
              src={item.url}
              buttonLabel={item.buttonLabel}
            >
              {item.description}
            </Card2>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default index;
