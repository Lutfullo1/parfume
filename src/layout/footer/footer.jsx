import React from "react";
import logo2 from "../../assets/img/logo2.svg";
import socilas from "../../assets/img/socials.svg";
export const Footer = () => {
  return (
    <div className="bg-black">
      <div className="container py-[64px] flex justify-between">
        <div>
          <img className="mb-[32px]" src={logo2} alt="" />
          <img src={socilas} alt="" />
        </div>
        <ul className="text-white flex flex-col gap-1">
          <li>ABOUT</li>
          <li>Finde</li>
          <li>Brand</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Where to buy</li>
        </ul>
        <ul className="text-white flex flex-col gap-1">
          <li>HELP</li>
          <li>Shipping & Returns</li>
          <li>Track Order</li>
          <li>FAQ</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
        <ul className="text-white flex flex-col gap-1">
          <li>SUBSCRIBE</li>
          <li>Subscribe now and thank us later</li>
          <form className="mt-[16px]">
            <input
              className=" bg-transparent border border-white py-[5px] px-[10px]"
              type="text"
            />
            <butto className="border border-white py-[8px] px-[10px]">
              Subscribe
            </butto>
          </form>
        </ul>
      </div>
    </div>
  );
};
