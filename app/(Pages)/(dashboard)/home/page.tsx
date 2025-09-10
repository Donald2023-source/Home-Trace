"use client";
import { RootState } from "@/app/Redux/Store/store";
import React from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  console.log(user);
  return (
    <div>
   This is the home component
    </div>
  );
};

export default Page;
