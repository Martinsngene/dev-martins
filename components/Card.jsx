const Card = ({ ref }) => {
  return (
    <div ref={ref} className="h-[9rem] w-[18rem] mr-8">
      <div className="rounded-md shadow-lg     h-[9rem] w-[18rem] item">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img
            className="rounded-t-md"
            src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
            alt=""
          />
        </a>
        <div className="p-2">
          <h5 className="text-gray-900 text-[1.2rem] font-medium mb-2">
            Lorem Ipsum Dolo
          </h5>
          <p className="text-gray-700 text-[0.8rem] mb-4">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="footer w-full flex items-center p-1 justify-between">
            <div className="date text-[0.7rem]">
              <p>May 11th 2022</p>
            </div>

            <div className="readMore">
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
    </div>
  );
};

export default Card;
