import React from "react";
import Image from "next/image";
import img from "@/public/Frame 18773.png";
const Page = () => {
  return (
    <div className="flex md:flex-row flex-col items-center">
      <div className="md:w-[45%] h-82 md:h-screen">
        <Image className="h-full object-cover" src={img} alt="image" />
      </div>
    </div>
  );
};

export default Page;
