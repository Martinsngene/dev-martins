import Image from "next/image";

const CustomImage = ({ className, src, width, height }) => {
  return (
    <div className={className}>
      <Image src={src} width={width} height={height} alt="" />
    </div>
  );
};

export default CustomImage;
