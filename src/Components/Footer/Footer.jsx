import React from "react";
import FooterInfo from "./FooterInfo";
import FooterSubscribe from "./FooterSubscribe";

const Footer = () => {
  return (
    <footer className="self-stretch flex w-full flex-col mt12 max-md:max-w-full">
      <section className="flex-col bg-black overflow-hidden self-stretch relative flex min-h-[479px] w-full px-5 py-10 max-md:max-w-full">
        <div className="relative text-white text-4xl font-inter font-extrabold self-center mt-12">
          Logo Here
        </div>
        <div className="w-[1280.5px] h-0 flex-shrink-0 border-t-[1px] border-white self-center mt-12 max-md:max-w-full"></div>
        <div className="relative self-center w-full max-w-[1260px] mt-5 mb-7 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <FooterInfo />
            <FooterSubscribe />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
