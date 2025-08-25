import Image from "next/image";
import React from "react";
import star from "@/public/Star 4.png";
import user1 from "@/public/Ellipse 3.png";
import user2 from "@/public/Ellipse 2.png";
import user3 from "@/public/Ellipse 1.png";
const Testimonial = () => {
  const Testimonials = [
    {
      name: "Fridah Samuel",
      text: "Since I started using HomeTrace, managing listings and leads has been effortless. My sales have increased, and my clients are happier",
      img: user1,
    },
    {
      name: "Sophia Emma R.",
      text: "HomeTrace helps me spot great investment deals before the market moves. It’s like having a smart assistant working round the clock.",
      img: user2,
    },
    {
      name: "Daniel K",
      text: "I used to struggle with rent collection and tenant follow-up, but HomeTrace has automated everything. It saves me so much time!",
      img: user3,
    },
  ];
  return (
    <div className="w-full flex md:flex-row flex-col items-center justify-around gap-4 py-10">
      {Testimonials.map((item, idx) => (
        <div
          key={idx}
          className="md:w-[40%] flex flex-col gap-2 rounded-xl shadow p-6 mx-6 md:mx-0 md:p-4"
        >
          <div className="flex items-center justify-between ">
            <div className="flex items-center">
              <Image
                src={item?.img}
                alt={item?.name}
                className="w-10 inline-block mr-2"
              />
              <h2 className="font-semibold">{item?.name}</h2>
            </div>
            <span className="flex items-center gap-1">
              <Image src={star} alt="star" className="w-5 inline-block" />
              <Image src={star} alt="star" className="w-5 inline-block" />
              <Image src={star} alt="star" className="w-5 inline-block" />
              <Image src={star} alt="star" className="w-5 inline-block" />
            </span>
          </div>
          <div>
            <p className="text-sm text-gray-500 w-[80%] leading-6 font-light py-1">
              {item?.text}
            </p>
            <h4 className="text-sm font-semibold"> - {item?.name}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
