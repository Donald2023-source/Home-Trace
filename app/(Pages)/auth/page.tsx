import React from "react";
import img1 from "@/public/Frame 18773.png";
import Image from "next/image";
import logo from "@/public/logo.png";

const page = () => {
  return (
    <div className="flex items-center">
      <div className="w-[45%] border h-screen">
        <Image className="h-full" src={img1} alt="image" />
      </div>
      <div className="p-10 flex-1">
        <div className="w-[90%] border">
          <Image src={logo} alt="logo" className="h-20 w-20" />
          <div>
            <h1 className="py-5 text-3xl">Welcome To Home Trace</h1>
            <p className="text-gray-500">
              Select an Option which Best Describes You
            </p>

            <div>
                <div>
                    <p>Agent</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
