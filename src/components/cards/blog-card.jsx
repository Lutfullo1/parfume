import React from "react";

export const BlogCard = ({ img, title, text }) => {
  return (
    <div className="text-center w-[165px]">
      <img className="mb-[12px] ml-auto mr-auto " src={img} alt="img" />
      <h3 className="mb-[12px] text-[12px]">{title}</h3>
      <p className="mb-[6px] font-medium text-[12px]">{text}</p>
    </div>
  );
};
