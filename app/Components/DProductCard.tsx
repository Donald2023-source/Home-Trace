import React from "react";

import Image, { StaticImageData } from "next/image";
import { Bookmark, CreditCard, MapPin } from "lucide-react";
import verify from "@/public/material-symbols_verified.png";
import PriceFormatter from "./PriceFormatter";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "sonner";

interface Props {
  item: Array<{
    img: StaticImageData;
    name: string;
    location: string;
    price: number;
    soldOut: boolean;
    id: string;
  }>;
}

const DProductCard = ({ item }: Props) => {
  const AddToSaved = (name: string) => {
    toast.success(`Saved ${name}`);
  };
  return (
    <div
      className="
   grid md:grid-cols-3 place-content-center place-items-center
  "
    >
      {item?.map((item, idx: number) => (
        <div
          className="lg:w-[23rem] md:w-[19rem] sm:w-[12rem]  lg:h-[25rem] md:h-[22rem] transition-all h-fit  shadow-lg rounded-lg my-1"
          key={idx}
        >
          <div className="relative">
            <Image
              src={item?.img}
              alt="product"
              className=" h-auto mt-5 rounded-lg shadow-lg"
              priority
            />
            <span
              onClick={() => AddToSaved(item?.name)}
              className="absolute top-3 cursor-pointer right-3 text-[#321876] rounded-full bg-[#E1DDEC] p-2"
            >
              <Bookmark />
            </span>
          </div>

          <div className="flex flex-col px-2 py-4 items-start gap-2 w-full">
            <div className="flex w-full justify-between items-center">
              <h2 className="px-1 font-semibold">{item?.name}</h2>
              <Image src={verify} alt="verified" className="w-5 inline-block" />
            </div>
            <div className="flex items-center gap-2 px-1">
              <PriceFormatter
                className="text-[#321876]  text-lg"
                amount={item?.price}
              />
            </div>
            <div className="flex px-1 items-center w-full gap-2 text-sm text-gray-500">
              <MapPin className="h-4 w-4" />
              <p>{item?.location}</p>
            </div>
            <Link href={`/description/${item?.id}`}>
              <Button
                className={`w-full text-[#2C1669] hover:text-white cursor-pointer bg-[#E1DDEC] ${
                  item?.soldOut && "bg-[#D5D5D5] hover:bg-transparent"
                }`}
              >
                View Details
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DProductCard;
