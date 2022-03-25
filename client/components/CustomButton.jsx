import Link from "next/link";
import React from "react";

function CustomButton({ children, onClick, className, containerStyles, href }) {
  return (
    <div className={containerStyles}>
      <button
        onClick={onClick}
        className={`rounded-[0.4rem] font-bold p-[0.5rem] text-[0.8rem] text-[#fff] ${className}`}
      >
        <Link href={`${href}`} passHref={true}>
          {children}
        </Link>
      </button>
    </div>
  );
}

export default CustomButton;
