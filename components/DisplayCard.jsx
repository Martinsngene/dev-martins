import { v4 as uuid } from "uuid";
import Card from "./Card";

const DisplayCard = () => {
  const Latest = [
    {
      url: "https://images.unsplash.com/photo-1647920564028-5756c7af4bd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      buttonLabel: "Read",
      href: "/",
      dateTime: "Mar 1, 2022",
      link: "/[postId]",
    },
    {
      url: "https://images.unsplash.com/photo-1647920564028-5756c7af4bd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      buttonLabel: "Read",
      href: "/",
      dateTime: "Mar 1, 2022",
      link: "/[postId]",
    },
    {
      url: "https://images.unsplash.com/photo-1647920564028-5756c7af4bd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      buttonLabel: "Read",
      href: "/",
      dateTime: "Mar 1, 2022",
      link: "/[postId]",
    },
  ];
  return (
    <div id="latestSection" className="mt-[3rem]">
      <div className="text-[1.5rem] md:text-[2.2rem] mb-[1rem] px-4">
        <h1>Latest Post</h1>
        <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[3rem]">
          {Latest.map((item) => (
            <Card
              href={item.href}
              key={uuid()}
              src={item.url}
              buttonLabel={item.buttonLabel}
              dateTime={item.dateTime}
              link={item.link}
              id={uuid()}
            >
              {item.description}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
