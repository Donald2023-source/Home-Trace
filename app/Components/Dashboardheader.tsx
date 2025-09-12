import { ChevronDown, Search } from "lucide-react";
import React from "react";
import User from "@/public/Frame 44.png";
import Image from "next/image";
const Dashboardheader = () => {
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
        <h4 className="font-medium tracking-tight">Richard Ade</h4>
        <ChevronDown />
      </div>
    </div>
  );
};

export default Dashboardheader;
