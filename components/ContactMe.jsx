import React from "react";
import CustomInput from "./CustomInput";
import CustomTextArea from "./CustomTextArea";

function ContactMe() {
  return (
    <div className="flex items-center justify-center my-[3rem]">
      <div className="grid grid-cols-2 w-[80%]">
        <div className="col-span-1 flex items-center justify-center bg-indigo-700">
          <div className="contactMeForm w-full flex flex-col items-center justify-center">
            <div className="w-[70%]">
              <CustomInput
                placeholder="Name"
                className="border-[3px] border-[#FF8C42] p-4 rounded-lg"
              />
            </div>
            <div className="w-[70%]">
              <CustomInput
                placeholder="Email"
                className="border-[3px] border-[#FF8C42] p-4 rounded-lg"
              />
            </div>
            <div className="w-[70%]">
              <CustomTextArea
                placeholder="Message"
                className="border-[3px] border-[#FF8C42] p-4 rounded-lg"
              />
            </div>
            <div className="w-[70%]">
              <button className="w-full h-12 bg-[#FF8C42] flex items-center justify-center text-[#fff] rounded-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-center bg-indigo-700">
          <div className="contactMeForm w-full flex flex-col items-center justify-center">
            <div className="w-[70%]"></div>
            <div className="w-[70%]"></div>
            <div className="w-[70%]"></div>
            <div className="w-[70%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
