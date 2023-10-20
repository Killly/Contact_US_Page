import React, { useState } from "react";
import radio from "../../assets/radio.png";
import check from "../../assets/check.png";

const ContactInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [source1, setSource1] = useState(radio);
  const [source2, setSource2] = useState(radio);
  const [source3, setSource3] = useState(radio);
  const [source4, setSource4] = useState(radio);
  const [textArea, setTextArea] = useState("");

  const handleInputChange = (e) => {
    if (e.target.id === "first_name") setFirstName(e.target.value);
    if (e.target.id === "last_name") setLastName(e.target.value);
    if (e.target.id === "email") setEmail(e.target.value);
    if (e.target.id === "number") setNumber(e.target.value);
    if (e.target.id === "area") setTextArea(e.target.value);
  };

  const handleRadio = (e) => {
    switch (e.target.id) {
      case "first":
        source1 == radio ? setSource1(check) : setSource1(radio);
        break;
      case "second":
        source2 == radio ? setSource2(check) : setSource2(radio);
        break;
      case "third":
        source3 == radio ? setSource3(check) : setSource3(radio);
        break;
      case "fourth":
        source4 == radio ? setSource4(check) : setSource4(radio);
        break;
    }
  };

  return (
    <div className="flex flex-col items-stretch w-[55%] ml-5 max-md:w-full max-md:ml-0">
      <div className="flex flex-col w-[595px] my-auto max-md:max-w-full max-md:mt-12">
        <div className="self-stretch flex w-full items-start justify-between gap-[39px] max-md:flex-wrap">
          <div className="self-stretch flex flex-col grow shrink-0 basis-auto">
            <label
              className={`text-xs font-medium leading-[166.67%] ${
                firstName ? "text-black" : "text-[#8D8D8D]"
              }`}
            >
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              className="text-[#8D8D8D] border-b border-[#8D8D8D] focus:outline-none focus:border-black focus:text-black"
              placeholder=""
              value={firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="self-stretch flex flex-col grow shrink-0 basis-auto">
            <label
              className={`text-xs font-medium leading-[166.67%] ${
                lastName ? "text-black" : "text-[#8D8D8D]"
              }`}
            >
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              className="text-[#8D8D8D] border-b border-[#8D8D8D] focus:outline-none focus:border-black focus:text-black"
              placeholder=""
              value={lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="self-stretch flex w-full items-start justify-between gap-[39px] mt-[45px] max-md:flex-wrap max-md:justify-center">
          <div className="self-stretch flex flex-col grow shrink-0 basis-auto">
            <label
              className={`text-xs font-medium leading-[166.67%] ${
                email ? "text-black" : "text-[#8D8D8D]"
              }`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="text-[#8D8D8D] border-b border-[#8D8D8D] focus:outline-none focus:border-black focus:text-black"
              placeholder=""
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div className="self-stretch flex flex-col grow shrink-0 basis-auto">
            <label
              className={`text-xs font-medium leading-[166.67%] ${
                number ? "text-black" : "text-[#8D8D8D]"
              }`}
            >
              Phone Number
            </label>
            <input
              type="text"
              id="number"
              className="text-[#8D8D8D] border-b border-[#8D8D8D] focus:outline-none focus:border-black focus:text-black"
              placeholder=""
              value={number}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="text-black text-sm font-semibold leading-[142.86%] mt-[45px]">
          Select Subject?
        </div>
        <div className="flex w-[519px] max-w-full items-start justify-between gap-2.5 mt-5 max-md:flex-wrap max-md:justify-center">
          <div className="flex gap-2 justify-around items-center">
            <img
              id="first"
              src={source1}
              className=" w-[13px] h-[13px]"
              onClick={handleRadio}
            />
            <div className="text-black text-xs leading-[166.67%] self-stretch">
              General Inquiry
            </div>
          </div>

          <div className="flex gap-2 justify-around items-center">
            <img
              id="second"
              src={source2}
              className=" w-[13px] h-[13px]"
              onClick={handleRadio}
            />
            <div className="text-black text-xs leading-[166.67%] self-stretch">
              General Inquiry
            </div>
          </div>

          <div className="flex gap-2 justify-around items-center">
            <img
              id="third"
              src={source3}
              className=" w-[13px] h-[13px]"
              onClick={handleRadio}
            />
            <div className="text-black text-xs leading-[166.67%] self-stretch">
              General Inquiry
            </div>
          </div>

          <div className="flex gap-2 justify-around items-center">
            <img
              id="fourth"
              src={source4}
              className=" w-[13px] h-[13px]"
              onClick={handleRadio}
            />
            <div className="text-black text-xs leading-[166.67%] self-stretch">
              General Inquiry
            </div>
          </div>
        </div>
        <label
          className={`text-xs font-medium leading-[166.67%] mt-12 ${
            textArea ? "text-black" : "text-[#8D8D8D]"
          }`}
        >
          Message
        </label>
        <textarea
          id="area"
          type="text"
          placeholder="Write your message.."
          value={textArea}
          onChange={handleInputChange}
          className="text-[#8D8D8D] border-b border-[#8D8D8D] focus:outline-none focus:border-black focus:text-black object-center w-full overflow-hidden self-stretch mt-3 max-md:max-w-full"
          style={{ resize: "none" }}
        />
        <div className="flex w-[214px] max-w-full grow self-end justify-center shadow-[0px_0px_14px_0px_rgba(0,0,0,0.12)] bg-black mt-11 px-5 py-4 rounded-md">
          <button
            type="submit"
            className="text-white text-center text-base font-medium self-center"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactInputs;
