"use client";
import { ChevronDown, ChevronLeft, Search } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const params = useParams();
  const [toggleFilter, setToggleFilter] = useState(false);
  const [activeFilter, setActiveFilter] = useState("");
  const proertyTypeFilter = [
    "Bungalow",
    "Townhouse",
    "Apartment",
    "Condo",
    "Tiny House",
  ];

  const handleActiveFilter = (filter: string) => {
    setActiveFilter(filter);
  };

  useEffect(() => {
    if (activeFilter) {
      console.log("Active filter changed:", activeFilter);
      toast.success(activeFilter);
    }
  }, [activeFilter]);

  return (
    <div className="lg:mt-[7%] max-w-6xl mx-auto flex w-full items-center   mt-[18%]">
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
              <span className="flex text-sm items-center gap-4 border p-2 rounded-lg cursor-pointer">
                <p>Price</p>
                <ChevronDown />
              </span>
              <span
                onClick={() => setToggleFilter(!toggleFilter)}
                className="flex text-sm relative items-center gap-4 border p-2 rounded-lg cursor-pointer"
              >
                <p>{activeFilter ? activeFilter : "Property Type"}</p>
                <ChevronDown />
                {toggleFilter && (
                  <div className="absolute top-16 shadow w-36 rounded-xl px-1">
                    {proertyTypeFilter.map((item, idx) => (
                      <span
                        onClick={() => handleActiveFilter(item)}
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

      <div>
        
      </div>
    </div>
  );
};

export default Page;
