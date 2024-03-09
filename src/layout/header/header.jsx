import React from "react";
import { HeaderPath } from "./components/header-path/header-path";
import { Auth } from "./components/auth/auth";
import logo from "../../assets/img/logo.svg";

export const Header = () => {
  return (
    <div className="bg-[#D5CEC8] pt-[10px]">
      <div className="container flex items-center justify-between">
        <img className="cursor-pointer" src={logo} alt="logo" />
        <HeaderPath />
        <Auth />
      </div>
    </div>
  );
};
