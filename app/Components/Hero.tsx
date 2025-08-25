import React from "react";
import Img from "@/public/Rectangle 1.png";
import Image from "next/image";
import { Search } from "lucide-react";
const Hero = () => {
  return (
    <div className="w-full relative h-[80vh]">
      <Image src={Img} alt="Hero img" fill className="object-cover" priority />

      <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center">
        <div className="text-white px-2 w-full font-bold text-center">
          <h2 className="text-center lg:w-[45%] md:w-[65%] mx-auto text-2xl md:text-3xl leading-12">
            We verify the agents. You just find your perfect home.
          </h2>

          <p className="md:text-base text-sm py-3 text-gray-200 font-light">
            Every home is checked by us , that’s the HomeTrace standard.
          </p>
          <fieldset className="bg-white flex items-center px-4 mx-auto my-7 py-2 md:w-[33%] w-[85%] rounded-full gap-10">
            <input
              className="outline-none text-base pl-4 text-black h-full text-sm w-full"
              placeholder="Address, Zip/postal Code, Local government"
              type="text"
              name=""
              id=""
            />
            <Search className="bg-black flex items-center justify-center text-white h-10 py-2 w-12 text-3xl rounded-full" />
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Hero;
