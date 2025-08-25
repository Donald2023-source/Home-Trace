import React from "react";
import img1 from "@/public/hugeicons_time-management-circle.png";
import img2 from "@/public/wi_time-1.png";
import img3 from "@/public/ph_money-wavy-light.png";
import img4 from "@/public/fluent_agents-16-regular.png";
import Image from "next/image";
const Why = () => {
  const items = [
    {
      title: "Exclusive Listing Management",
      text: "All listings are generated and managed by our in-house team for quality control.",
      icon: img1,
    },
    {
      title: "Real Time Lising Oversight",
      text: "Listings are continuously monitored and internally reviewed for accuracy and currency.",
      icon: img2,
    },
    {
      title: "Verified Agents and Properties",
      text: " We rigorously verify all agents and properties to prevent fraud and build trust.",
      icon: img3,
    },

    {
      title: "Customer-Centric Approach",
      text: "Our team is dedicated to providing personalized support and guidance throughout your property journey.",
      icon: img4,
    },
  ];
  return (
    <div>
      <h3 className="text-center text-2xl font-semibold my-10">
        Why HomeTrace?
      </h3>
      <div className="flex md:flex-row justify-center md:flex-wrap lg:flex-nowrap  md:px-0 px-10 flex-col items-center gap-12 md:gap-12">
        {items.map((item, idx) => (
          <div
            className="flex flex-col items-center justify-between h-fit md:h-56 py-2 md:w-[46%] text-center rounded-xl shadow-lg px-3"
            key={idx}
          >
            <Image
              src={item.icon}
              alt={item.title}
              className="w-16 bg-primary/10 p-5 my-2 rounded-full h-16"
            />
            <h4 className="font-semibold">{item?.title}</h4>
            <p className="text-sm leading-7 px-2 md:px-0 text-gray-500">
              {item?.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
