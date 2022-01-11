const DisplayCard = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-row-reverse rounded-lg bg-white shadow-lg">
        <div className="w-1/2 h-auto">
          <img
            className="w-full h-full rounded-r-lg"
            src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="p-6 flex flex-col justify-start w-1/2">
          <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
          <p className="text-gray-700 text-base mb-8">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div className="flex items-center justify-between">
            <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>{" "}
            <button
              type="button"
              className=" text-black font-bold text-[0.7rem]"
            >
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
