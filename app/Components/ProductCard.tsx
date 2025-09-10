import React from "react";

import Image, { StaticImageData } from "next/image";
import { CreditCard, MapPin } from "lucide-react";
import verify from "@/public/material-symbols_verified.png";
import PriceFormatter from "./PriceFormatter";

interface Props {
  item: Array<{
    img: StaticImageData;
    name: string;
    location: string;
    price: number;
  }>;
}

const ProductCard = ({ item }: Props) => {
  return (
    <div
      className="
    flex flex-col items-center justify-center gap-5
    md:flex-row md:flex-wrap md:justify-start md:gap-14
    md:grid lg:grid-cols-3 md:grid-cols-2 lg:gap-10 lg:space-y-0
    mx-auto
  "
    >
      {item?.map((item, idx: number) => (
        <div
          className="lg:w-[23rem] md:w-[19rem] sm:w-[12rem] w-[19rem] lg:h-[23rem] md:h-[21rem]  hover:scale-95 transition-all cursor-pointer h-fit  shadow-lg rounded-lg my-5"
          key={idx}
        >
          <Image
            src={item?.img}
            alt="product"
            className=" h-auto mt-5 rounded-lg shadow-lg"
          />
          <div className="flex flex-col px-2 py-4 items-start gap-2 w-full">
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
