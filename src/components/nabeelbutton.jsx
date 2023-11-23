import React from "react";

const style = {
  sm: "rounded-full bg-gradient-to-r from-[#6017a7] to-[#9d72cb] font-semibold text-white py-4 px-6",
  lg: "rounded-full bg-gradient-to-r from-[#6017a7] to-[#9d72cb] font-semibold text-white py-4 px-6",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Button2 = ({ size, className, children, ...props }) => {
  return (
    <button className={classNames(style[size], className)} {...props}>
      {children}
    </button>
  );
};

export default Button2;
