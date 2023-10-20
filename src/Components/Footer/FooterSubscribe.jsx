import React from "react";

const FooterSubscribe = () => {
  return (
    <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
      <div className="bg-neutral-900 relative flex w-[304px] max-w-full flex-col mx-auto pl-3.5 pr-3.5 py-5 rounded-xl max-md:mt-12">
        <h3 className="text-white text-lg font-semibold leading-[144.44%] -mt-0.5">
          Join Our Newsletter
        </h3>
        <form className="flex flex-row">
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded h-[39px] border-0 py-1.5 pl-2 text-[#616161] font-[400] text-[11px] font-['Poppins'] bg-[#1E1E1E] placeholder:text-[#616161] sm:text-sm sm:leading-6"
            placeholder="Your email adress"
          />
          <button className="bg-black w-[105px] height-[39px] text-white py-[10px] px-[22px] font-medium text-xs font-['Poppins']">
            Subscribe
          </button>
        </form>
        <p className="text-white text-sm font-medium opacity-50 w-[277px] max-w-full mt-6 mb-px">
          * Will send you weekly updates for your better tool management.
        </p>
      </div>
    </div>
  );
};

export default FooterSubscribe;
