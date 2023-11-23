import React from "react";

const style = {
  sm: "rounded-full bg-gradient-to-r from-[#6017a7] to-[#9d72cb] lg:text-lg text-sm font-semibold text-white lg:py-4 py-2 lg:px-6 px-4 ",
  lg: "rounded-full bg-gradient-to-r from-[#6017a7] to-[#9d72cb]  font-semibold text-white py-4 w-full mx-auto",
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
