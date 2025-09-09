import PriceFormatter from "@/app/Components/PriceFormatter";
import { Button } from "@/components/ui/button";
import { Check, TriangleAlert } from "lucide-react";
import React from "react";

const Page = () => {
  const Plans = [
    {
      name: "Basic",
      description: "Free Plan for getting started",
      price: 0,
      isPopular: false,
      benefits: ["5 Active Listings"],
      notIncluded: "No Priority placements",
    },
    {
      name: "Standard",
      description: "Best for active agents",
      price: 4000,
      isPopular: false,
      benefits: ["Up to 20 active listings", "Priority in search results"],
    },
    {
      name: "Premium",
      description: "For top tier visibility",
      price: 10000,
      isPopular: true,
      benefits: ["Unlimited listings", "Priority in search results"],
    },
  ];

  const currentPlan = "Basic";
  return (
    <div className="bg-[#FAFAFA] flex flex-col py-3 items-center min-h-screen justify-center  w-full">
      <div className="flex flex-col items-center w-full  justify-center mx-auto">
        <div className="flex flex-col pb-6 gap-3 text-center">
          <h1 className="font-bold text-4xl">Plans and Pricing</h1>
          <p>Choose the plan that fits your property goals</p>
        </div>

        <div className="w-[80%] flex gap-10 md:flex-row flex-col items-center justify-center">
          {Plans.map((item, idx) => (
            <div
              key={idx}
              className="h-full my-4 flex flex-col w-full gap-10  bg-white rounded shadow-md px-3 py-8"
            >
              <div className="h-full px-3 py-5 flex justify-between items-center gap-4 flex-col">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-primary">
                    {item?.name}
                  </h2>
                  <p className="text-gray-400 py-1">{item?.description}</p>
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <PriceFormatter
                    className="text-3xl font-extrabold"
                    amount={item?.price}
                  />
                  <p className="text-gray-500">/month</p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col items-center gap-4">
                    {item?.benefits.map((b) => (
                      <span className="flex items-center gap-5">
                        <Check />
                        <p>{b}</p>
                      </span>
                    ))}
                  </div>
                  {item?.notIncluded && (
                    <span className="flex items-center gap-5">
                      <TriangleAlert />
                      <p>{item?.notIncluded}</p>
                    </span>
                  )}
                </div>
                <Button
                  className={`h-14 w-full border cursor-pointer hover:scale-95 transition-all ${
                    item?.name === currentPlan &&
                    "bg-transparent text-black cursor-default hover:scale-100 boder-gray-300 hover:bg-transparent"
                  }`} 
                >
                  Select Plan
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
