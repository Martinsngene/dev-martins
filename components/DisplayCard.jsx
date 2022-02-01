import Image from "next/image";

const DisplayCard = () => {
  return (
    <div className="flex items-center justify-center p-6">
      <div className="md:w-[80%]">
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row-reverse bg-white w-full">
            <div className="w-full md:w-1/2 md:h-auto">
              <Image
                width={900}
                height={520}
                src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="sm:w-1/2 flex items-center justify-center">
              <div className="p-2 md:p-6 flex flex-col justify-start">
                <h5 className="text-gray-900 text-[1.2rem] md:text-[2rem] font-medium mb-2">
                  Create A Scrollable Section With React
                </h5>
                <p className="text-gray-700 text-[0.9rem] md:text-[1.2rem] mb-4 md:mb-12">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-gray-600 text-[0.6rem] md:text-[0.7rem]">
                    Last updated 3 mins ago
                  </p>
                  <button
                    type="button"
                    className=" text-black font-bold text-[0.6rem] md:text-[0.7rem]"
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
