import PriceFormatter from "@/app/Components/PriceFormatter";
import { Button } from "@/components/ui/button";
import { Check, TriangleAlert } from "lucide-react";
import React from "react";

const Page = () => {
  const Plans = [
    { name: "Basic", description: "Free Plan for getting started", price: 0, isPopular: false, benefits: ["5 Active Listings"], notIncluded: "No Priority placements"},
    { name: "Basic", description: "Free Plan for getting started", price: 0, isPopular: false, benefits: ["5 Active Listings"], notIncluded: "No Priority placements"},
    { name: "Standatd", description: "Best for active agents", price: 4000, isPopular: true, benefits: ["u Active Listings"], notIncluded: "No Priority placements"},
  ]
  return (
    <div className="bg-[#FAFAFA] h-screen w-screen">
      <div className="flex flex-col items-center h-full justify-center  max-w-5xl mx-auto">
        <div className="flex flex-col pb-6 gap-3 text-center">
          <h1 className="font-bold text-4xl">Plans and Pricing</h1>
          <p>Choose the plan that fits your property goals</p>
        </div>

       <div>
        {
           <div className="h-[60%] my-4 w-full">
          <div className="h-full w-1/3 bg-white rounded shadow-md px-3 py-5 flex justify-between items-center flex-col">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-primary">Basic</h2>
              <p>Free Plan for getting started</p>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <PriceFormatter className="text-3xl font-extrabold" amount={0} />
              <p className="text-gray-500">/month</p>
            </div>

            <div className="flex flex-col gap-4">
              <span className="flex items-center gap-5">
                <Check />
                <p>5 active listings</p>
              </span>
              <span className="flex items-center gap-5">
                <TriangleAlert />
                <p>No Priority placements</p>
              </span>
            </div>
            <Button className="h-14 w-full">Select Plan</Button>
          </div>
        </div>
        }
       </div>
      </div>
    </div>
  );
};

export default Page;
