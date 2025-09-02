import PriceFormatter from "@/app/Components/PriceFormatter";
import React from "react";

const Page = () => {
  return (
    <div className="bg-[#FAFAFA] h-screen w-screen">
      <div className="flex flex-col items-center h-full justify-center  max-w-5xl mx-auto">
        <div className="flex flex-col gap-3 text-center">
          <h1 className="font-bold text-4xl">Plans and Pricing</h1>
          <p>Choose the plan that fits your property goals</p>
        </div>

        <div>
            <div>
                <h2>Basic</h2>
                <p>Free Plan for getting started</p>
                <PriceFormatter amount={0} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
