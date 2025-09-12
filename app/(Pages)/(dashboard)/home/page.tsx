"use client";
import { RootState } from "@/app/Redux/Store/store";
import { Bookmark, Clock3, Eye, HousePlus } from "lucide-react";
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
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          Welcome back, {firstName}!
        </h2>
        <p className="text-sm text-gray-500 py-1">
          Discover your perfect home from thousands of verified listings across
          Nigeria.
        </p>
      </div>
      <div className="flex items-center">
        {cardItems.map((item) => (
          <div className="flex items-center m-2 p-3 gap-8 rounded w-[35%] h-28 justify-between bg-white">
            <div className="flex flex-col">
              <p className="font-medium">{item?.name}</p>
              <p className="text-xl font-bold">{item?.number}</p>
              <p className="text-xs">{item?.desc}</p>
            </div>
            <span className="p-2 h-10 flex items-center justify-center w-10 rounded-md" style={{backgroundColor: item?.color}}>{item?.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
