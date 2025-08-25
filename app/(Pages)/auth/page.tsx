"use client";
import React from "react";
import img1 from "@/public/Frame 18773.png";
import Image from "next/image";
import logo from "@/public/logo.png";
import user from "@/public/Vector (5).png";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
const page = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const router = useRouter();

  const handleRole = (role: string) => {
    setSelectedRole(role.toLowerCase());
    console.log(role);
  };

  function handleNext() {
    if (selectedRole === "user") {
      return router.push("/auth/signup");
    } else if (selectedRole === "agent") {
      return router.push("/auth/agent/signup");
    } else {
      toast.error("Please select a role");
    }
  }

  return (
    <div className="flex md:flex-row flex-col items-center">
      <div className="md:w-[45%] h-72 md:h-screen">
        <Image className="h-full object-cover" src={img1} alt="image" />
      </div>
      <div className="md:p-10 p-5 w-[90%] shadow md:shadow-none flex-1 relative md:-top-0  -top-20 bg-white/80 backdrop-blur-md rounded-xl">
        <div className="md:w-[85%] md:block flex flex-col items-center w-[95%]">
          <Image src={logo} alt="logo" className="h-20 w-20" />
          <div>
            <h1 className="py-6 md:text-3xl md:text-left text-center">
              Welcome To Home Trace
            </h1>
            <p className="text-gray-500 md:text-base text-sm md:text-left text-center pb-4">
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
            <button
              onClick={handleNext()}
              className="py-3 px-10 w-full my-8 cursor-pointer bg-primary text-white hover:scale-95 transition rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
