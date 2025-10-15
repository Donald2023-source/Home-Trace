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

        <div>
          <div className="md:px-4  md:py-4 w-full">
            <div className="flex items-center gap-10">
              <p
                className={`border-b cursor-pointer w-2/3 py-1 text-center font-semibold ${
                  tab === "Overview" && "border-b-2  border-[#2C1669]"
                }`}
              >
                Overview
              </p>
              <p className="flex-1 border-b cursor-pointer py-1 text-center font-semibold">
                Video Tour
              </p>
            </div>
          </div>

          <div className="w-2/3 px-4">
            {tab === "Overview" && (
              <div>
                <span className="flex items-center p w-[40%] justify-between">
                  <h2 className="font-semibold">{matchProducts?.name}</h2>
                  <Image
                    src={img2}
                    alt="verified"
                    className="w-5 inline-block"
                  />
                </span>

                <div className=" w-[40%] flex flex-col gap-4 my-4">
                  <span className="flex items-center gap-2">
                    <MapPin />
                    <p>{matchProducts?.location}</p>
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Bed />
                      <p>{matchProducts?.bedrooms} Bedrooms</p>
                    </span>
                    <span className="flex items-center gap-2">
                      <Bath />
                      <p>{matchProducts?.bathrooms} Bathrooms</p>
                    </span>
                  </div>
                </div>

                <p className="py-2 text-black/50 w-[90%] leading-7">
                  {matchProducts?.desc}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
