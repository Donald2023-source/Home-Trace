"use client";
import { RootState } from "@/app/Redux/Store/store";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import logo from "@/public/logo.png";
import { Bath, Bed, ChevronDown, MapPin, Search } from "lucide-react";
import img from "@/public/Vector (5).png";
import { Products } from "@/app/data/Products";
import PriceFormatter from "@/app/Components/PriceFormatter";
import img2 from "@/public/material-symbols_verified.png";
import { Button } from "@/components/ui/button";
const Page = () => {
  const user = useSelector((state: RootState) => state?.auth.user);
  const firstName = user?.fullName?.trim().split(" ")[0] || "";
  console.log(user);
  const params = useParams();

  const matchProducts = Products?.find((item) => item?.id === params?.id);
  console.log(matchProducts);
  const [current, setCurrent] = useState("Buy");
  const [tab, setTab] = useState("Overview");
  return (
    <div className=" bg-[#FAFAFA] ">
      <header className="flex shadow bg-white items-center justify-between gap-2">
        <div className="flex items-center max-w-7xl mx-auto gap-3  justify-between w-full">
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
        </div>
      </header>

      <div className="max-w-7xl mx-auto my-6">
        <div className="px-4  md:py-4 w-full">
          <div>
            <Image
              className="w-full object-fit md:h-[37rem] rounded-xl object-cover"
              src={matchProducts?.img ?? ""}
              alt="product"
            />
            <div>
              <div className="flex items-center justify-between md:w-full lg:px-1 mx-auto md:px-6">
                <div className="flex gap-2 items-center bg-[#D9D9D9] justify-between mt-4 h-13 md:text-base text-sm md:h-15 p-2 rounded-full w-42 md:w-46">
                  <span
                    onClick={() => setCurrent("Buy")}
                    className={`h-full cursor-pointer font-semibold tracking-tight flex items-center rounded-full justify-center w-1/2 ${
                      current === "Buy" && "bg-white"
                    }`}
                  >
                    <h2>Buy</h2>
                  </span>
                  <span
                    onClick={() => setCurrent("Rent")}
                    className={`h-full cursor-pointer font-semibold tracking-tight flex items-center rounded-full justify-center w-1/2 ${
                      current === "Rent" ? "bg-white" : ""
                    }`}
                  >
                    <h2>Rent</h2>
                  </span>
                </div>
                <PriceFormatter
                  amount={matchProducts?.price ?? 0}
                  className="md:text-2xl text-lg font-bold mt-4"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="md:px-4  md:py-4 w-full">
            <div className="flex items-center gap-10">
              <p
                onClick={() => setTab("Overview")}
                className={`border-b cursor-pointer md:w-2/3 w-1/2 py-1 text-center font-semibold ${
                  tab === "Overview" && "border-b-2  border-[#2C1669]"
                }`}
              >
                Overview
              </p>
              <p
                onClick={() => setTab("Video Tour")}
                className={`border-b cursor-pointer  flex-1 py-1 text-center font-semibold ${
                  tab === "Video Tour" && "border-b-2  border-[#2C1669]"
                }`}
              >
                Video Tour
              </p>
            </div>
          </div>

          <div className="md:w-2/3 w-full px-3  py-4">
            {tab === "Overview" && (
              <div className="w-[70%] px-3 flex flex-col gap-2">
                <span className="flex items-center md:w-[40%] justify-between">
                  <h2 className="font-semibold">{matchProducts?.name}</h2>
                  <Image
                    src={img2}
                    alt="verified"
                    className="w-5 inline-block"
                  />
                </span>

                <div className=" md:w-[50%] flex flex-col gap-4 my-2">
                  <span className="flex items-center gap-2">
                    <MapPin />
                    <p>{matchProducts?.location}</p>
                  </span>
                  <div className="flex items-center  px-1  justify-between">
                    <span className="flex items-center gap-2">
                      <Bed />
                      <p className="text-black/50 text-sm">
                        {matchProducts?.bedrooms} Bedrooms
                      </p>
                    </span>
                    <span className="flex items-center gap-2">
                      <Bath />
                      <p className="text-black/50 text-sm">
                        {matchProducts?.bathrooms} Bathrooms
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between md:flex-row flex-col gap-4 px-3  md:py-4 w-full">
            <div className="md:w-2/3">
              <p className="py-2 px-3 md:text-base text-sm text-black/50 md:w-[90%] leading-7">
                {matchProducts?.desc}
              </p>
              <span className="flex h-fit flex-col ml-3 mt-1 rounded-xl w-2/3 gap-1 p-2 bg-[#EBE8F3]">
                <p className="text-sm">Build Cost</p>
                <PriceFormatter
                  className="md:text-xl text-lg"
                  amount={matchProducts?.buildCost ?? 0}  
                />
              </span>
            </div>

            <div className="flex-1  w-full mx-auto flex items-center ">
              <div className="py-3 w-full">
                {matchProducts?.agent?.map((item, idx) => (
                  <div className="flex flex-col w-full p-5 md:w-72 items-center rounded shadow gap-2 ">
                    <Image src={item?.profileImg} alt="agent" />
                    <div className="flex items-center gap-2 py-1">
                      <h2 className="font-semibold">{item?.name}</h2>
                      <Image
                        src={img2}
                        alt="verified"
                        className="w-5 inline-block"
                      />
                    </div>
                    <Button className="bg-[#C1B8D9] w-full text-[#2C1669]">
                      Contact Agent
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="px-3 ">
            <h2 className="font-semibold text-xl py-3">Amenities</h2>
            <div className="text-black flex text-sm md:text-base flex-col gap-4">
              {matchProducts?.amenities?.map((item, idx) => (
                <div
                  className="flex items-center bg-[#EBE8F3] px-3 gap-2 py-5 rounded-lg"
                  key={idx}
                >
                  <span>{item?.icon && React.createElement(item.icon)}</span>
                  <p className="font-semibold">{item?.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="my-8 px-4">
            <h2 className="font-semibold text-xl py-3">Near By Services</h2>
            <div className="text-black flex flex-col gap-4">
              {matchProducts?.services?.map((item, idx) => (
                <div
                  className="flex text-sm md:text-base items-center bg-[#EBE8F3] px-3 gap-2 py-5 rounded-lg"
                  key={idx}
                >
                  <span>{item?.icon && React.createElement(item.icon)}</span>
                  <p className="font-semibold">{item?.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="px-4 mb-10 w-full">
            <Button className="w-full rounded-2xl h-14 cursor-pointer">
              Purchase Now!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
