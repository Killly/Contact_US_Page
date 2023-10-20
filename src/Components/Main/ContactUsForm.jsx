import React from "react";
import ContactInformation from "./ContactInformation";
import ContactInputs from "./ContactInputs";
import letter from "../../assets/letter_send.png";

const ContactUsForm = () => {
  return (
    <form className="relative h-[667px] shadow-[0px_0px_60px_30px_rgba(0,0,0,0.03)] bg-white self-center flex w-full max-w-[1196px] flex-col mt-14 mb-[50px] pl-2.5 pr-5 py-2.5 rounded-[10px] max-md:max-w-full">
      <div className=" self-center h-full w-full max-w-[1136px] max-md:max-w-full">
        <div className=" gap-5 flex h-full max-md:flex-col max-md:items-stretch max-md:gap-0">
          <ContactInformation />
          <ContactInputs />
        </div>
      </div>
      <img
        src={letter}
        className="w-[260px] h-[100px] rotate-[-10deg] absolute bottom-0 right-24"
      />
    </form>
  );
};

export default ContactUsForm;
