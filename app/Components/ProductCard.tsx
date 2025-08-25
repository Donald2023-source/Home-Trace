import React from "react";
import img1 from "@/public/Frame 18762 (2).png";
import Image from "next/image";
import { BadgeCheck, CreditCard, MapPin } from "lucide-react";
import verify from "@/public/material-symbols_verified.png";
import PriceFormatter from "./PriceFormatter";

interface Props {
  item: any;
}

const ProductCard = ({ item }: Props) => {
  return (
    <div className="flex md:flex-row lg:flex-nowrap mx-auto md:flex-wrap flex-col md:gap-7 gap-5 md:justify-start justify-center items-center ">
      {item?.map((item: any, idx: number) => (
        <div
          className="lg:w-[23rem] md:w-[16rem] sm:w-[17rem] lg:h-[23rem] md:h-[20rem]  hover:scale-95 transition-all cursor-pointer h-[23rem] shadow-lg rounded-lg my-5"
          key={idx}
        >
          <Image
            src={item?.img}
            alt="product"
            className=" h-auto mt-5 rounded-lg shadow-lg"
          />
          <div className="p-1 flex flex-col p-2 items-start gap-2 w-full">
            <div className="flex w-full justify-between items-center py-1">
              <h2 className="px-1 font-semibold">{item?.name}</h2>
              <Image src={verify} alt="verified" className="w-5 inline-block" />
            </div>
            <div className="flex px-1 items-center w-full gap-2 text-sm text-gray-500">
              <MapPin className="h-4 w-4" />
              <p>{item?.location}</p>
            </div>
            <div className="flex items-center gap-2 px-1">
              <CreditCard className="text-gray-500 text-sm h-4 w-4" />
              <PriceFormatter
                className="text-gray-500 py-1 text-sm"
                amount={item?.price}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
