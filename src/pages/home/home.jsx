import React from "react";
import { MainLayout } from "../../layout/main-layout";
import { heroBannerData } from "../../data/data";
import { Button } from "../../components/ui/button";
import { BestSeller } from "../../components/ui/banners/best-seller/best-seller";

import { bestSellerData } from "../../data/data";
import { BestSellerCard } from "../../components/cards/best-seller-card";

import { BlogBanner } from "../../components/ui/banners/blog-banner/blog-banner";
import { BlogCard } from "../../components/cards/blog-card";
import { blogData } from "../../data/data";

import { Info1 } from "../../assets/icons/info1";

import insta1 from "../../assets/img/insta1.svg";
import insta2 from "../../assets/img/insta2.svg";
import insta3 from "../../assets/img/insta3.svg";
import insta4 from "../../assets/img/insta4.svg";
import insta5 from "../../assets/img/insta5.svg";
import insta6 from "../../assets/img/insta6.svg";
import insta7 from "../../assets/img/insta7.svg";
export const Home = () => {
  return (
    <MainLayout>
      {/* HERO */}
      <div className="bg-[#D5CEC8]">
        <div className="container">
          <div className="flex justify-center items-center text-center pt-[216px] pb-[272px]">
            {heroBannerData.map((item) => (
              <div className="flex flex-col items-center gap-[24px]">
                <h1 className="text-black font-roboto text-[28px] font-medium leading-[36px]">
                  {item.title}
                </h1>
                <p className="text-black font-roboto text-[14px] font-normal leading-[24px]">
                  {item.text}
                </p>
                <div className="flex gap-[12px]">
                  <Button variant="black">Skincare</Button>
                  <Button variant="transparent">Shop All</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* HERO */}
      {/* BESTSELLER */}
      <div className="container">
        <BestSeller>
          {bestSellerData.map((item) => (
            <BestSellerCard
              key={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
            />
          ))}
        </BestSeller>
      </div>
      {/* BESTSELLER */}

      {/* INFO */}
      <div className="bg-[#FCF3F6]">
        <div className="container">
          <div className="py-[64px] flex gap-[60px] justify-center">
            <div className="flex flex-col items-center gap-1">
              <Info1 />
              <h3 className="text-[12px]">Ethical business</h3>
              <p className="text-[10px]">Only green beauty products.</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Info1 />
              <h3 className="text-[12px]">Ethical business</h3>
              <p className="text-[10px]">Only green beauty products.</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Info1 />
              <h3 className="text-[12px]">Ethical business</h3>
              <p className="text-[10px]">Only green beauty products.</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Info1 />
              <h3 className="text-[12px]">Ethical business</h3>
              <p className="text-[10px]">Only green beauty products.</p>
            </div>
          </div>
        </div>
      </div>
      {/* INFO */}

      {/* BLOGS */}
      <div className="container">
        <BlogBanner>
          {blogData.map((item) => (
            <BlogCard
              key={item.id}
              img={item.img}
              title={item.title}
              text={item.text}
            />
          ))}
        </BlogBanner>
      </div>
      {/* BLOGS */}

      {/* HELP */}
      <div className="bg-[#FCF3F6] pt-[64px]">
        <div className="container">
          <h3 className="text-center text-[28px] font-[500]">
            How can we help?
          </h3>
          <div className="py-[64px] flex gap-[30px] justify-center">
            <div className="w-[272px] flex flex-col items-center gap-1 text-center">
              <Info1 />
              <h3 className="text-[12px] font-[600]">
                Frequently asked questions
              </h3>
              <p className="text-[12px] font-[400]">
                If you have questions about products, orders or account info,
                you may find answer in our FAQ.
              </p>
            </div>
            <div className="w-[272px] flex flex-col items-center gap-1 text-center">
              <Info1 />
              <h3 className="text-[12px] font-[600]">
                Frequently asked questions
              </h3>
              <p className="text-[12px] font-[400]">
                If you have questions about products, orders or account info,
                you may find answer in our FAQ.
              </p>
            </div>
            <div className="w-[272px] flex flex-col items-center gap-1 text-center">
              <Info1 />
              <h3 className="text-[12px] font-[600]">
                Frequently asked questions
              </h3>
              <p className="text-[12px] font-[400]">
                If you have questions about products, orders or account info,
                you may find answer in our FAQ.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* HELP */}

      {/* INSTAGRAM */}
      <div className="container pb-[50px]">
        <h3 className="text-center text-[28px] font-[500] mt-[64px] mb-[40px]">
          Instagram
        </h3>
        <div className="flex gap-[16px] mb-[50px]">
          <div>
            <img src={insta1} alt="" />
          </div>
          <div className="grid grid-cols-3 gap-[16px]">
            <img src={insta2} alt="" />
            <img src={insta3} alt="" />
            <img src={insta4} alt="" />
            <img src={insta5} alt="" />
            <img src={insta6} alt="" />
            <img src={insta7} alt="" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Button variant="transparent">Follow Us @beautyshop</Button>
        </div>
      </div>
      {/* INSTAGRAM */}
    </MainLayout>
  );
};
