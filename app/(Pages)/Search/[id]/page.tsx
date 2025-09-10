"use client";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const params = useParams();

  return (
    <div className="lg:mt-[7%] max-w-6xl border mx-auto flex w-full items-center   mt-[18%]">
      {params.id}
      this
    </div>
  );
};

export default Page;
