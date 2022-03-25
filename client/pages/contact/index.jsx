import React from "react";
import Image from "next/image";
import Layout from "../../components/Layout";
import SearchBar from "../../components/SearchBar";
import Textarea from "../../components/Textarea";
import CustomButton from "../../components/CustomButton";

function Contact() {
  return (
    <Layout>
      <div className="grid grid-cols-1 px-[1rem] sm:grid-cols-2 gap-10 pt-[2rem] mb-[2rem]">
        <div className="col-span-1 pt-[2rem] md:pt-[4rem] order-2 md:order-1">
          <div className="grid grid-cols-1 px-[1rem] sm:grid-cols-2 gap-10">
            <div className="col-span-1">
              <SearchBar
                name="firstName"
                label="First Name"
                labelId="firstName"
                inputId="firstName"
                className="mb-[1rem]"
              />
              <SearchBar
                name="email"
                label="Email Address"
                labelId="email"
                inputId="email"
                className="mt-[1rem]"
              />
            </div>
            <div className="col-span-1">
              <SearchBar
                name="lastName"
                label="Last Name"
                labelId="lastName"
                inputId="lastName"
                className="mb-[1rem]"
              />
              <SearchBar
                name="phone"
                label="Phone Number"
                labelId="phone"
                inputId="phone"
                className="mt-[1rem]"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 px-[1rem]">
            <Textarea
              name="message"
              label="Message"
              labelId="message"
              textAreaId="message"
              className="h-[120px] px-[0.8rem]"
              containerStyles="mt-[1rem]"
            />
          </div>
          <div className="grid grid-cols-1 px-[1rem]">
            <CustomButton
              containerStyles="mt-[1rem]"
              className="w-full text-[0.7rem] md:text-[1rem] bg-[#A06CD5] p-[0.5rem]"
            >
              Submit
            </CustomButton>
          </div>
        </div>
        <div className="col-span-1 order-1 md:order-2 flex items-center justify-center pt-[4rem] md:pt-[2rem]">
          <Image src="/contact.gif" width={500} height={500} alt="img" />
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
