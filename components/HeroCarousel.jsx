import Image from "next/image";
import HeroThree from "../public/HeroThree.png";

const HeroCarousel = () => {
  return (
    <div className="w-full">
      <div>
        <Image className="w-full" src={HeroThree} />
      </div>
    </div>
  );
};

export default HeroCarousel;
