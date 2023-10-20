import React from "react";
import ContactInfo from "../Main/ContactInfo";

const FooterInfo = () => {
  return (
    <div className="flex flex-col items-stretch w-[74%] max-md:w-full max-md:ml-0">
      <div className="relative grow mt-4 max-md:max-w-full max-md:mt-12">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0">
            <div className="relative flex flex-col mt-px max-md:mt-12">
              <div className="text-white text-lg font-semibold leading-[144.44%]">
                Reach us
              </div>
              <ContactInfo />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[15%] ml-5 max-md:w-full max-md:ml-0">
            <div className="relative flex flex-col mt-px max-md:mt-12">
              <div className="text-white text-lg font-semibold leading-[144.44%]">
                Company
              </div>
              <a href="/about" className="text-white text-base mt-7">
                About
              </a>
              <a href="/contact" className="text-white text-base mt-9">
                Contact
              </a>
              <a href="/blogs" className="text-white text-base mt-9">
                Blogs
              </a>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[21%] ml-5 max-md:w-full max-md:ml-0">
            <div className="relative flex grow flex-col mt-px max-md:mt-12">
              <div className="text-white text-lg font-semibold leading-[144.44%]">
                Legal
              </div>
              <a href="" className="text-white text-base mt-7">
                Privacy Policy
              </a>
              <a href="" className="text-white text-base mt-8">
                Terms &amp; Services
              </a>
              <a href="" className="text-white text-base mt-9">
                Terms of Use
              </a>
              <a href="" className="text-white text-base mt-9">
                Refund Policy
              </a>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
            <div className="relative flex flex-col max-md:mt-12">
              <div className="text-white text-lg font-semibold leading-[144.44%]">
                Quick Links
              </div>
              <a href="" className="text-white text-base mt-7">
                Techlabz Keybox
              </a>
              <a href="" className="text-white text-base mt-8">
                Downloads
              </a>
              <a href="" className="text-white text-base mt-9">
                Forum
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
