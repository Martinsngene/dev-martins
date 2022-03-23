import Link from "next/link";

const CustomLink = ({ children, className, onClick, textStyle, href }) => {
  return (
    <div className={className} onClick={onClick}>
      <Link href={`${href}`}>
        <span className={textStyle}>{children}</span>
      </Link>
    </div>
  );
};

export default CustomLink;
