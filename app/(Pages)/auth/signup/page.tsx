"use client";
import React, { FormEvent, useState } from "react";
import img1 from "@/public/Frame 18773.png";
import Image from "next/image";
import logo from "@/public/logo.png";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { toast } from "sonner";

const page = () => {
  const [passwordToggle, setPasswordToggle] = useState<{
    [key: string]: boolean;
  }>({
    password: false,
    confirmPassword: false,
  });
  const [formData, setFormData] = useState({
    FullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isOtp, setOtp] = useState(false);
  const [otpValue, setOtpValue] = useState("");

  const handlePasswordToggle = (field: string) => {
    setPasswordToggle((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
    console.log("Clicked");
  };

  const handleSubmit = () => {
    console.log("Go to the next page");

    setOtp(true);
  };

  const handleOtpVerification = () => {
    toast.error("Please enter the OTP");
    console.log(otpValue);
  };

  return (
    <div className="flex md:flex-row flex-col items-center">
      <div className="md:w-[45%] h-82 md:h-screen">
        <Image className="h-full object-cover" src={img1} alt="image" />
      </div>
      {isOtp ? (
        <div className="flex relative flex-col items-center justify-center mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h1 className="py-6 font-bold text-primary text-xl md:text-3xl md:text-left text-center">
              OTP
            </h1>
            <p className="text-gray-500 md:w-full w-[70%] md:text-base text-sm md:text-left text-center pb-4">
              Enter the verification code sent to the email you provided above.
            </p>
          </div>
          <form className="md:w-[90%] w-[85%] flex flex-col gap-6">
            <fieldset className="border justify-between flex items-center w-full p-3 rounded-lg">
              <p className="text-sm cursor-pointer px-1 pl-2 text-gray-400">
                +234
              </p>
              <input
                className="w-full h-full px-3 outline-none"
                type="tel"
                placeholder="Phone Number"
              />
              <p className="border-l md:text-sm text-xs cursor-pointer pl-2 w-[30%] text-primary">
                Send code
              </p>
            </fieldset>
            <fieldset className="border justify-between flex items-center w-full p-3 rounded-lg">
              <input
                className="w-full font-semibold h-full outline-none"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={4}
                placeholder="Code"
              />
            </fieldset>
          </form>

          <Button
            onClick={() => handleOtpVerification()}
            className="my-3 cursor-pointer"
          >
            Submit
          </Button>

          <ArrowLeft
            onClick={() => setOtp(false)}
            className="absolute md:top-0 top-4 md:left-1 left-8 hover:scale-95 transition-all cursor-pointer "
          />
        </div>
      ) : (
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
              className="md:w-[80%] w-full px-1 md:text-base text-sm mx-auto flex flex-col gap-6 items-center justify-center"
              action=""
              onSubmit={() => handleSubmit()}
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
                  placeholder="Confirm Password"
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

              <Button className="w-full cursor-pointer py-3 rounded-lg">
                Sign up
              </Button>

              <p className="text-gray-400">
                Already have an account?{" "}
                <Link className="text-primary" href={"/auth/signin"}>
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
