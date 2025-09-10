"use client";
import { ChevronDown, ChevronLeft, Search } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const params = useParams();
  const [toggleFilter, setToggleFilter] = useState(false);
  const proertyTypeFilter = [
    "Bungalow",
    "Townhouse",
    "Apartment",
    "Condo",
    "Tiny House",
  ];
  return (
    <div
      onClick={() => setToggleFilter(false)}
      className="lg:mt-[7%] max-w-6xl border mx-auto flex w-full items-center   mt-[18%]"
    >
      <div className="w-full flex items-center ">
        <ChevronLeft />
        <div className="w-full flex items-center">
          <fieldset className="bg-white flex border  justify-end w-[70%] items-center px-4 mx-auto my-7 py-2 rounded-full gap-10">
            <input
              className="outline-none pl-4 text-black h-full text-sm w-full"
              placeholder="Address, Zip/postal Code, Local government"
              type="text"
              name=""
              id=""
            />
            <Search className="bg-black flex items-center justify-center text-white h-10 py-2 w-12 text-3xl rounded-full" />
          </fieldset>

          <div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 border p-2 rounded-lg cursor-pointer">
                <p>Price</p>
                <ChevronDown />
              </span>
              <span
                onClick={() => setToggleFilter(!toggleFilter)}
                className="flex relative items-center gap-2 border p-2 rounded-lg cursor-pointer"
              >
                <p>Property Type</p>
                <ChevronDown />
                {toggleFilter && (
                  <div className="absolute top-20 shadow w-36 rounded-xl px-1">
                    {proertyTypeFilter.map((item, idx) => (
                      <span
                        className="py-2 flex flex-col transition-all hover:bg-primary/40 px-1 hover:text-white rounded hover:border-r-4 border-primary"
                        key={idx}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
