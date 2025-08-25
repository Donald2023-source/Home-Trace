"use client";
import React from "react";
import img1 from "@/public/Frame 18773.png";
import Image from "next/image";
import logo from "@/public/logo.png";
import user from "@/public/Vector (5).png";
import { useState } from "react";
const page = () => {
  const [selectedRole, setSelectedRole] = useState("");

  const handleRole = (role: string) => {
    setSelectedRole(role.toLowerCase());
    console.log(role);
  };

  return (
    <div className="flex md:flex-row flex-col items-center">
      <div className="md:w-[45%] h-72 md:h-screen">
        <Image className="h-full object-cover" src={img1} alt="image" />
      </div>
      <div className="md:p-10 p-5 w-[95%] flex-1 relative md:-top-0  -top-20 bg-white rounded-xl">
        <div className="md:w-[85%] w-[95%]">
          <Image src={logo} alt="logo" className="h-20 w-20" />
          <div>
            <h1 className="py-6 md:text-3xl">Welcome To Home Trace</h1>
            <p className="text-gray-500 pb-4">
              Select an Option which Best Describes You
            </p>

            <div className="w-full flex flex-col gap-5">
              <div
                onClick={() => handleRole("agent")}
                className={`flex p-3 bg-primary/20 hover:bg-primary/60 cursor-pointer rounded-lg items-center justify-between ${
                  selectedRole === "agent" && "bg-primary/80 text-white"
                }`}
              >
                <p className=" font-semibold">Agent</p>
                <Image className="h-5 w-5" src={user} alt="User Image" />
              </div>
              <div
                onClick={() => handleRole("user")}
                className={`flex p-3 bg-primary/20 hover:bg-primary/60 cursor-pointer rounded-lg items-center justify-between ${
                  selectedRole === "user" && "bg-primary/80 text-white"
                }`}
              >
                <p className=" font-semibold">User</p>
                <Image className="h-5 w-5" src={user} alt="User Image" />
              </div>
            </div>
            <button className="py-3 px-10 w-full my-8 cursor-pointer bg-primary text-white hover:scale-95 transition rounded-lg">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
