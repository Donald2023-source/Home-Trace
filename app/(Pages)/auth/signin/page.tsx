"use client";
import React, { FormEvent, useState } from "react";
import img1 from "@/public/Frame 18773.png";
import Image from "next/image";
import logo from "@/public/logo.png";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { toast } from "sonner";

const page = () => {
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    try {
      const response = await fetch('/api/signin', {
        method: "POST",
        headers: {
          "ContentType": "application/json"
        },
        body: JSON.stringify(formData)
      })
    } catch(err) {
      console.error(err)
    }
  };

  return (
    <div className="flex md:flex-row-reverse flex-col items-center">
      <div className="md:w-[45%] h-82 md:h-screen">
        <Image className="h-full object-cover" src={img1} alt="image" />
      </div>

      <div className="md:p-10 p-5 w-[90%] shadow md:shadow-none flex-1 relative md:-top-0  -top-20 bg-white/80 backdrop-blur-md rounded-xl">
        <div className="md:w-[85%] md:block flex flex-col items-center w-[95%]">
          <div className="flex flex-col items-center justify-center">
            <h1 className="py-6 font-bold text-primary text-xl md:text-3xl md:text-left text-center">
              Sign in
            </h1>
          </div>

          <form
            className="md:w-[80%] w-full px-1 md:text-base text-sm mx-auto flex flex-col gap-6 items-center justify-center"
            action="POST"
            onSubmit={() => handleSubmit()}
          >
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
                type={passwordToggle ? "text" : "password"}
                placeholder="Password"
              />
              {passwordToggle ? (
                <Eye
                  onClick={() => setPasswordToggle(!passwordToggle)}
                  className="text-gray-400 cursor-pointer"
                />
              ) : (
                <EyeOff
                  onClick={() => setPasswordToggle(!passwordToggle)}
                  className="text-gray-400 cursor-pointer"
                />
              )}
            </fieldset>

            <Button className="w-full cursor-pointer py-3 rounded-lg">
              Sign in
            </Button>

            <p className="text-gray-400">
              Dont have an account?{" "}
              <Link className="text-primary" href={"/auth/signup"}>
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
