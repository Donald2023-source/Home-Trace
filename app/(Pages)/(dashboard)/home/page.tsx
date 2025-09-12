"use client";
import { RootState } from "@/app/Redux/Store/store";
import React from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const carItems = [
    { name: "Property viewed"}
  ]
  const user = useSelector((state: RootState) => state.auth.user);
  console.log(user);
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Welcome back, Richard!</h2>
        <p className="text-sm text-gray-500 py-1">
          Discover your perfect home from thousands of verified listings across
          Nigeria.
        </p>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Page;
