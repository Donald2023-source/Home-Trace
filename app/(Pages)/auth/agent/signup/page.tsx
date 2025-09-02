"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import img1 from "@/public/Frame 18773.png";
import Image from "next/image";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/app/Redux/authSlice/authSlice";
import { RootState } from "@/app/Redux/Store/store";
import Loader from "@/app/Components/Loader";

const Page = () => {
  const [passwordToggle, setPasswordToggle] = useState({
    password: false,
  });
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordToggle, setConfirmPasswordToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [isOtp, setOtp] = useState(true);
  const [otpValue, setOtpValue] = useState("");
  const [NIN, setNIN] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const handlePasswordToggle = (field: "password") => {
    setPasswordToggle((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleUserInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (formData.password !== confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }

      const res = await fetch("/api/agent/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);
      if (res.ok) {
        toast.success("Signup successful. Check your email for OTP.");
        setOtp(true);
        setIsLoading(false);
      } else {
        toast.error(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Something went wrong", error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpVerification = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!otpValue) {
        toast.error("Please enter the OTP");
        return;
      }

      const res = await fetch("/api/verifyOtp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, otp: otpValue }),
      });

      const data = await res.json();
      console.log(data);

      if (data?.message === "Account verified successfully") {
        // router.push("/home");
        dispatch(setUser(data?.user));
      }
      if (res.ok) {
        toast.success("Account verified!(");
        setIsLoading(false);
      } else {
        toast.error(data.message || "Invalid OTP");
      }
    } catch (error) {
      console.error("Something went wrong", error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const user = useSelector((state: RootState) => state.auth.user);
  console.log("data", user);

  return (
    <div className="flex md:flex-row flex-col items-center">
      <div className="md:w-[45%] h-82 md:h-screen">
        <Image className="h-full object-cover" src={img1} alt="image" />
      </div>

      {isOtp ? (
        <div className="flex relative -top-16 rounded-2xl backdrop-blur-md bg-white/80 px-4 flex-col items-center justify-center mx-auto">
          <h1 className="py-6 font-bold text-primary text-xl md:text-3xl text-center">
            Verification
          </h1>
          <p className="text-gray-500 text-sm text-center pb-4">
            Please enter the following appropriately, check your email for OTP
          </p>

          <form
            onSubmit={handleOtpVerification}
            className="w-[90%] md:w-full flex flex-col gap-6"
          >
            <fieldset className="border flex items-center w-full p-3 rounded-lg">
              <input
                className="w-full font-semibold h-full outline-none"
                type="text"
                inputMode="numeric"
                maxLength={11}
                placeholder="NIN"
                value={otpValue}
                onChange={(e) => setNIN(e.target.value)}
              />
            </fieldset>

            <fieldset className="border flex items-center w-full p-3 rounded-lg">
              <input
                className="w-full font-semibold h-full outline-none"
                type="text"
                inputMode="numeric"
                maxLength={6}
                placeholder="Enter OTP"
                value={otpValue}
                onChange={(e) => setOtpValue(e.target.value)}
              />
            </fieldset>

            <div className="flex items-center gap-8">
              <input className="hidden" type="file" name="file" id="file" />
              <p className="md:text-base text-xs">
                Upload a valid NIESV Membership Certificate
              </p>
              <Button
                type="button"
                className="bg-transparent border-primary border text-black hover:bg-transparent hover:scale-95 cursor-pointer"
              >
                <label className="cursor-pointer" htmlFor="file">
                  Upload
                </label>
              </Button>
            </div>

            <Button className="my-3 w-full rounded-xl cursor-pointer h-10">
              {isLoading ? <Loader /> : "Verify"}
            </Button>
          </form>

          <ArrowLeft
            onClick={() => setOtp(false)}
            className="absolute top-4 md:left-1 left-8 hover:scale-95 cursor-pointer"
          />
        </div>
      ) : (
        <div className="md:p-10 p-5 w-[90%] shadow flex-1 -top-10 md:-top-0 md:shadow-none relative bg-white/80 backdrop-blur-md rounded-xl">
          <div className="md:w-[85%] w-[95%] mx-auto">
            <h1 className="py-6 font-bold text-primary text-xl md:text-3xl text-center">
              Agent Sign Up
            </h1>
            <p className="text-gray-500 text-sm text-center pb-4">
              Kindly enter your information to create your account
            </p>

            <form
              className="w-full flex flex-col gap-6"
              onSubmit={handleSubmit}
            >
              <fieldset className="border w-full p-3 rounded-lg">
                <input
                  className="w-full h-full outline-none"
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleUserInput}
                  required
                />
              </fieldset>

              <fieldset className="border w-full p-3 rounded-lg">
                <input
                  className="w-full h-full outline-none"
                  type="email"
                  placeholder="email@gmail.com"
                  name="email"
                  value={formData.email}
                  onChange={handleUserInput}
                  required
                />
              </fieldset>

              <fieldset className="border flex items-center w-full p-3 rounded-lg">
                <input
                  className="w-full h-full outline-none"
                  type={passwordToggle.password ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleUserInput}
                />
                {passwordToggle.password ? (
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
                  type={confirmPasswordToggle ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                {confirmPasswordToggle ? (
                  <Eye
                    onClick={() =>
                      setConfirmPasswordToggle(!confirmPasswordToggle)
                    }
                    className="text-gray-400 cursor-pointer"
                  />
                ) : (
                  <EyeOff
                    onClick={() =>
                      setConfirmPasswordToggle(!confirmPasswordToggle)
                    }
                    className="text-gray-400 cursor-pointer"
                  />
                )}
              </fieldset>

              <Button
                className={
                  isLoading
                    ? "h-12 cursor-not-allowed"
                    : "w-full h-12 cursor-pointer rounded-2xl"
                }
              >
                {isLoading ? <Loader /> : "Sign up"}
              </Button>

              <p className="text-gray-400 text-center">
                Already have an account?{" "}
                <Link className="text-primary" href={"/auth/signin"}>
                  Sign in
                </Link>
              </p>

              <p
                onClick={() => setOtp(true)}
                className="text-gray-400 cursor-pointer hover:text-primary text-center"
              >
                Already have an OTP?{" "}
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
