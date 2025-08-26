"use client";
import React from "react";
import img1 from "@/public/Frame 18773.png";
import Image from "next/image";
import logo from "@/public/logo.png";

const page = () => {
  return (
    <div className="flex md:flex-row flex-col items-center">
      <div className="md:w-[45%] h-72 md:h-screen">
        <Image className="h-full object-cover" src={img1} alt="image" />
      </div>
      <div className="md:p-10 p-5 w-[90%] shadow md:shadow-none flex-1 relative md:-top-0  -top-20 bg-white/80 backdrop-blur-md rounded-xl">
        <div className="md:w-[85%] md:block flex flex-col items-center w-[95%]">
          <Image src={logo} alt="logo" className="h-20 w-20" />
          <div>
            <h1 className="py-6 font-bold text-primary md:text-3xl md:text-left text-center">
              Create Account
            </h1>
            <p className="text-gray-500 md:text-base text-sm md:text-left text-center pb-4">
              Kindly enter your information to create your account
            </p>
          </div>

          form
        </div>
      </div>
    </div>
  );
};

export default page;
