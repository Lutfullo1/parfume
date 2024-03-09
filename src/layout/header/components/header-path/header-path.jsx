import React from "react";
import { headerPath } from "../../../../data/data";
import logo from "../../../../assets/img/logo.svg";

export const HeaderPath = () => {
  return (
    <ul className="flex items-center gap-[32px]">
      {headerPath.map((item) => (
        <li key={item.path}>
          <a
            className="font-sans text-[rgb(16, 14, 14)] font-[400] text-[18px]"
            href={item.path}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
