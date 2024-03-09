import React from "react";

export const BestSellerCard = ({ img, title, price }) => {
  return (
    <div className="text-center">
      <img className="mb-[12px]" src={img} alt="img" />
      <h3 className="mb-[12px] text-[12px]">{title}</h3>
      <p className="mb-[6px] text-[12px]">{price}</p>
    </div>
  );
};
