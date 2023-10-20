import React from "react";
import phone from "../../assets/phone.png";
import email from "../../assets/email.png";
import location from "../../assets/location.png";

const ContactInfo = (props) => {
  let container = `relative flex flex-col ${props.style} mt-px max-md:mt-12`;
  return (
    <div className={container}>
      <div className="flex w-[164px] max-w-full items-start justify-between gap-5 mt-7">
        <img
          srcSet={phone}
          className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
        />
        <div className="text-white text-base self-center my-auto">
          +1012 3456 789
        </div>
      </div>
      <div className="flex w-[197px] max-w-full items-start justify-between gap-5 mt-6">
        <img
          loading="lazy"
          srcSet={email}
          className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
        />
        <div className="text-white text-base my-auto self-center">
          demo@gmail.com
        </div>
      </div>
      <div className="flex w-[331px] max-w-full items-start justify-between gap-5 mt-6">
        <img
          loading="lazy"
          srcSet={location}
          className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
        />
        <div className="text-white text-base max-w-[282px] grow shrink-0 basis-auto my-auto">
          132 Dartmouth Street Boston, Massachusetts 02156 United States
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
