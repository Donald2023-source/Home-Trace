"use client";
import { RootState } from "@/app/Redux/Store/store";
import { Bookmark, Clock3, Eye, HousePlus, Menu, Search } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const cardItems = [
    {
      name: "Property viewed",
      icon: <Eye size={20} color="white" />,
      number: 200,
      desc: "Recently viewed properties",
      color: "#2C1669",
    },
    {
      name: "Saved Properties",
      icon: <Bookmark size={20} color="white" />,
      number: 10,
      desc: "Recently saved properties",
      color: "#1D2F82",
    },
    {
      name: "New Listings",
      icon: <HousePlus size={20} color="white" />,
      number: 40,
      desc: "Best the first to explore",
      color: "#00964E",
    },
    {
      name: "Recently Active",
      icon: <Clock3 size={20} color="white" />,
      number: "10:13",
      desc: "Last Login",
      color: "#13092E",
    },
  ];
  const user = useSelector((state: RootState) => state.auth.user);
  const firstName = user?.fullName?.trim().split(" ")[0] || "";
  console.log(user);
  return (
    <div>
      <div className="md:px-4 md:py-4 w-full">
        <h2 className="text-2xl font-bold tracking-tight">
          Welcome back, {firstName}!
        </h2>
        <p className="text-xs md:text-sm border text-gray-500 py-1">
          Discover your perfect home from thousands of verified listings across
          Nigeria.
        </p>
      </div>
      <div className="flex md:hidden  items-center gap-8 py-3 w-full">
        <fieldset className=" flex items-center bg-white w-[93%] border py-1 px-4 gap-4 rounded-full">
          <input
            className="outline-none pl-4 text-black h-full text-sm w-full"
            placeholder="Search"
            type="text"
            name=""
            id=""
          />
          <Search
            size={35}
            className="bg-black p-2 h-8 w-8 flex items-center justify-center rounded-full"
            color="white"
          />
        </fieldset>

        <Menu />
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 place-content-center place-items-center">
        {cardItems.map((item, idx) => (
          <div
            key={idx}
            className="flex md:text-base shadow-md shadow-black/10 text-xs items-center m-2 p-3 rounded-xl w-full h-28 md:justify-between bg-white"
          >
            <div className="flex flex-col w-full">
              <p className="font-medium">{item?.name}</p>
              <p className="text-xl font-bold">{item?.number}</p>
              <p className="text-xs">{item?.desc}</p>
            </div>
            <span
              className="p-2 md:h-10 h-7  flex items-center justify-center w-7 md:w-10 rounded-md"
              style={{ backgroundColor: item?.color }}
            >
              {item?.icon}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
