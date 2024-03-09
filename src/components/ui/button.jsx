import React from "react";
import clsx from "clsx";

export const Button = ({ variant, children, onClick, type, icon: Icon }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        "px-[22px] py-[10px] flex items-center gap-[5px] text-[12px] font-normal cursor-pointer text-center",
        {
          "bg-transparent  border-[2px] border-black":
            variant === "transparent",
          "bg-black text-white": variant === "black",
        }
      )}
    >
      {Icon ? Icon : ""}
      <span>{children}</span>
    </button>
  );
};
