"use client";
import React, { useState } from "react";
import img1 from "@/public/Frame 18773.png";
import Image from "next/image";
import logo from "@/public/logo.png";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  const [passwordToggle, setPasswordToggle] = useState<{
    [key: string]: boolean;
  }>({
    password: false,
    confirmPassword: false,
  });

  const handlePasswordToggle = (field: string) => {
    setPasswordToggle((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
    console.log("Clicked");
  };

  return (
    <div className="flex md:flex-row flex-col items-center">
      <div className="md:w-[45%] h-72 md:h-screen">
        <Image className="h-full object-cover" src={img1} alt="image" />
      </div>
      <div className="md:p-10 p-5 w-[90%] shadow md:shadow-none flex-1 relative md:-top-0  -top-20 bg-white/80 backdrop-blur-md rounded-xl">
        <div className="md:w-[85%] md:block flex flex-col items-center w-[95%]">
          <div className="flex flex-col items-center justify-center">
            <h1 className="py-6 font-bold text-primary text-xl md:text-3xl md:text-left text-center">
              Create Account
            </h1>
            <p className="text-gray-500 md:text-base text-sm md:text-left text-center pb-4">
              Kindly enter your information to create your account
            </p>
          </div>

          <form
            className="md:w-[80%] w-full px-7 md:text-base tex-xs mx-auto flex flex-col gap-6 items-center justify-center"
            action=""
          >
            <fieldset className="border w-full p-3 rounded-lg">
              <input
                className="w-full h-full outline-none"
                type="text"
                placeholder="Full Name"
              />
            </fieldset>
            <fieldset className="border w-full p-3 rounded-lg">
              <input
                className="w-full h-full outline-none"
                type="email"
                placeholder="email@gmail.com"
              />
            </fieldset>
            <fieldset className="border flex items-center w-full p-3 rounded-lg">
              <input
                className="w-full h-full outline-none"
                type={passwordToggle.password ? "text" : "password"}
                placeholder="Password"
              />

              {passwordToggle.confirmPassword ? (
                <Eye
                  onClick={() => handlePasswordToggle("password")}
                  className="text-gray-400 cursor-pointer"
                />
              ) : (
                <EyeOff
                  onClick={() => handlePasswordToggle("password")}
                  className="text-gray-400 cursor-pointer"
                />
              )}
            </fieldset>

            <fieldset className="border flex items-center w-full p-3 rounded-lg">
              <input
                className="w-full h-full outline-none"
                type={passwordToggle.confirmPassword ? "text" : "password"}
                placeholder="Password"
              />

              {passwordToggle ? (
                <Eye
                  onClick={() => handlePasswordToggle("confirmPassword")}
                  className="text-gray-400 cursor-pointer"
                />
              ) : (
                <EyeOff
                  onClick={() => handlePasswordToggle("confirmPassword")}
                  className="text-gray-400 cursor-pointer"
                />
              )}
            </fieldset>

            <Button className="w-full py-3 rounded-lg">Sign up</Button>

            <p className="text-gray-400">
              Already have an account?{" "}
              <Link className="text-primary" href={"/auth/signin"}>
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
