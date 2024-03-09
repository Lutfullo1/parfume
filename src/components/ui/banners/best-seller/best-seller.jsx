import React from "react";
import { Button } from "../../button";

export const BestSeller = ({ children }) => {
  return (
    <div className="flex flex-col items-center mt-[64px] mb-[64px]">
      <h2 className="mb-[40px] text-[20px] font-[500]">Our bestsellers</h2>
      <div className="flex gap-[20px] mb-[36px]">{children}</div>
      <Button variant="transparent">Shop All</Button>
    </div>
  );
};
