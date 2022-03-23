import React from "react";

function CustomButton({ children, onClick, className, containerStyles }) {
  return (
    <div className={containerStyles}>
      <button
        onClick={onClick}
        className={`rounded-[0.4rem] font-bold text-[1.3rem] text-[#fff] ${className}`}
      >
        {children}
      </button>
    </div>
  );
}

export default CustomButton;
