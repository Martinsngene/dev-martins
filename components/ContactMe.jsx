import React from "react";
import CustomInput from "./CustomInput";
import CustomTextArea from "./CustomTextArea";

function ContactMe() {
  return (
    <div className="flex flex-col items-center justify-center my-[3rem] bg-[#1E2833]">
      <div>
        <h1>Get In Touch</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[80%]">
        <div className="col-span-1 flex items-center justify-center">
          <div className="contactMeForm w-full flex flex-col items-center justify-center">
            <div className="w-full md:w-[70%]">
              <CustomInput
                placeholder="Name"
                className="border-[3px] border-[#FF8C42] p-2 md:p-4 rounded-lg bg-[#1E2833]"
              />
            </div>
            <div className="w-full md:w-[70%]">
              <CustomInput
                placeholder="Email"
                className="border-[3px] border-[#FF8C42] p-2 md:p-4 rounded-lg bg-[#1E2833]"
              />
            </div>
            <div className="w-full md:w-[70%]">
              <CustomTextArea
                placeholder="Message"
                className="border-[3px] border-[#FF8C42] p-2 md:p-4 rounded-lg bg-[#1E2833]"
              />
            </div>
            <div className="w-full md:w-[70%]">
              <button className="w-full h-10 md:h-12 bg-[#FF8C42] flex items-center justify-center text-[#fff] rounded-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <div className="contactMeForm w-full flex flex-col items-center justify-center">
            <div className="w-[70%]">
              <h2 className="text-[#FF8C42] text-[1.5rem]">Phone</h2>
              <p className="text-[#fff] text-[1.2rem]">
                +234 808-587-8073, +234 806-321-0160
              </p>
            </div>
            <div className="w-[70%]">
              <h2 className="text-[#FF8C42] text-[1.5rem]">Email</h2>
              <p className="text-[#fff] text-[1.2rem]">
                martinsngene@gmail.com
              </p>
            </div>
            <div className="w-[70%]">
              <h2 className="text-[#FF8C42] text-[1.5rem]">Address</h2>
              <p className="text-[#fff] text-[1.2rem]">
                3 Asifor Lane Off Sokoh Estate Road Warri, Delta State, Nigeria
              </p>
            </div>
            <div className="w-[70%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
