"use client";
import React, { useState } from "react";
import img from "@/public/Rectangle 3.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const About = () => {
  const [text, setText] = useState(false);

  return (
    <div className="flex md:flex-row flex-col md:px-1 px-4 items-center gap-10 justify-between py-10">
      <div className="flex flex-col gap-4 w-full md:w-[50%]">
        <h4 className="font-semibold text-lg">
          <span className="text-primary">Real Properties, </span>
          Backed By Trust
        </h4>
        <p
          className={`text-gray-500 py-1 leading-8 ${
            text ? "" : "line-clamp-7 transition-all"
          }`}
        >
          In a space crowded with false listings and unreliable deals, we’re
          here to change the standard. Every property on HomeTrace goes through
          a rigorous and comprehensive verification process: we meticulously
          confirm its details, thoroughly inspect all relevant documents, and
          ensure the authenticity of every listing before it ever appears on our
          site. Our dedicated team works tirelessly to validate ownership, check
          for legal compliance, and verify the physical condition of each
          property, so you can trust that what you see is exactly what you get.
          <br />
          <br />
          Whether you're buying or renting, HomeTrace is committed to helping
          you move forward with complete confidence. We believe that
          transparency and trust are the foundations of every successful real
          estate transaction. That’s why every listing you see has been
          carefully checked, not just posted. With HomeTrace, you can avoid the
          uncertainty and risk that often come with property searches, knowing
          that each opportunity has been vetted for your peace of mind.
          Experience a new era of real estate—where integrity, reliability, and
          your satisfaction come first.
        </p>
        <Button
          onClick={() => setText(!text)}
          className="bg-primary w-fit cursor-pointer"
        >
          {text ? "See Less" : "Read More"}
        </Button>
      </div>
      <Image priority src={img} alt="About img" className="mt-10 px-4 h-74" />
    </div>
  );
};

export default About;
