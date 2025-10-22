"use client";
import { ChevronDown, Search } from "lucide-react";
import React from "react";
import User from "@/public/Frame 44.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store/store";
const Dashboardheader = () => {
  const user = useSelector((state: RootState) => state?.auth);
  console.log(user);
  return (
    <div className="w-full flex items-center justify-between">
      <div className="w-[70%]">
        <fieldset className=" flex items-center border py-2 px-4 gap-4 rounded">
          <Search color="gray" />
          <input
            className="outline-none pl-4 text-black h-full text-sm w-full"
            placeholder="Search"
            type="text"
            name=""
            id=""
          />
        </fieldset>
      </div>
      <div className="flex items-center gap-3 cursor-pointer">
        <Image className="" src={User} alt="profile" />
        <h4 className="font-medium tracking-tight">{user?.user?.fullName}</h4>
        <ChevronDown />
    
      </div>
    </div>
  );
};

export default Dashboardheader;
