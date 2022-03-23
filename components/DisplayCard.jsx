import DisplayCardTemplate from "./DisplayCardTemplate";

const DisplayCard = () => {
  return (
    <div>
      <DisplayCardTemplate
        img={
          "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        }
        header="Latest Post"
        link="/"
        buttonLabel="Read"
        time="Mar 1, 2022"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, maiores,
        veritatis officia et provident officiis reiciendis assumenda itaque
        animi recusandae illo eligendi aliquam, dolore totam.
      </DisplayCardTemplate>
    </div>
  );
};

export default DisplayCard;
