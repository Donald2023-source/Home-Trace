"use client";
import { RootState } from "@/app/Redux/Store/store";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  console.log(user);
  return <div>Hi there, welcome home!</div>;
};

export default page;
