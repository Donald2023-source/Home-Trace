"use client";
import { RootState } from "@/app/Redux/Store/store";
import { useParams } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import logo from "@/public/logo.png";
import { ChevronDown, Search } from "lucide-react";
import img from "@/public/Vector (5).png";
const Page = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const firstName = user?.fullName?.trim().split(" ")[0] || "";
  console.log(user);
  const params = useParams();
  return (
    <div className="">
      <header className="flex items-center justify-between gap-2">
        <div className="md:px-4 flex items-center md:py-4 w-64">
          <div className="flex items-center gap-2">
            <Image
              className="h-10 w-10"
              src={logo}
              alt="Logo"
              width={50}
              height={50}
            />
            <p className="text-sm tracking-tighter font-bold">Home Trace</p>
          </div>
        </div>
        <div className="flex  items-center gap-8 py-3 w-full">
          <fieldset className=" flex items-center w-full bg-white border py-2 px-4 gap-4 rounded">
            <Search
              size={35}
              className=" h-7 text-gray-400 w-7 flex items-center justify-center rounded-full"
            />
            <input
              className="outline-none pl-4 text-black h-full text-sm w-full"
              placeholder="Search"
              type="text"
              name=""
              id=""
            />
          </fieldset>
        </div>

        <div className="flex items-center w-72 justify-between ">
          <Image className="h-10 w-auto" src={img} alt="img" />
          <h2>Richard Ade</h2>
          <ChevronDown />
        </div>
      </header>
    </div>
  );
};

export default Page;
