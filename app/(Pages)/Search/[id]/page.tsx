"use client";
import { ChevronDown, ChevronLeft, Search } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import img1 from "@/public/Frame 18762.png";
import img2 from "@/public/Frame 18762 (2).png";
import img3 from "@/public/Frame 18762 (1).png";
import { motion } from "framer-motion";
import ProductCard from "@/app/Components/ProductCard";
import Link from "next/link";
import Navbar from "@/app/Components/Navbar";

const Page = () => {
  const params = useParams();
  const [toggleFilter, setToggleFilter] = useState(false);
  const [activeFilter, setActiveFilter] = useState("");
  const proertyTypeFilter = [
    "Bungalow",
    "Townhouse",
    "Apartment",
    "Condo",
    "Tiny House",
  ];

  const handleActiveFilter = (filter: string) => {
    setActiveFilter(filter);
  };

  useEffect(() => {
    if (activeFilter) {
      console.log("Active filter changed:", activeFilter);
      toast.success(activeFilter);
    }
  }, [activeFilter]);

  const Products = [
    {
      name: "4-Bedroom Duplex",
      location: "Rayfield Resort Road, Plateau state",
      price: 2500000,
      img: img1,
    },
    {
      name: "3-plot of Land",
      location: "Gugurat Junction, Plateau state",
      price: 320000000,
      img: img2,
    },
    {
      name: "4-Bedroom Duplex",
      location: "Rayfield Resort Road, Plateau state",
      price: 2500000,
      img: img1,
    },
    {
      name: "3-plot of Land",
      location: "Gugurat Junction, Plateau state",
      price: 320000000,
      img: img2,
    },
    {
      name: "4-Bedroom Duplex",
      location: "Rayfield Resort Road, Plateau state",
      price: 2500000,
      img: img1,
    },
    {
      name: "3-plot of Land",
      location: "Gugurat Junction, Plateau state",
      price: 320000000,
      img: img2,
    },
    {
      name: "Self Contain Apartment",
      location: "Rayfield Resort Road, Plateau state",
      price: 75000000,
      img: img3,
    },
    {
      name: "3-plot of Land",
      location: "Gugurat Junction, Plateau state",
      price: 320000000,
      img: img2,
    },
    {
      name: "Self Contain Apartment",
      location: "Rayfield Resort Road, Plateau state",
      price: 75000000,
      img: img3,
    },
    {
      name: "4-Bedroom Duplex",
      location: "Rayfield Resort Road, Plateau state",
      price: 2500000,
      img: img1,
    },
    {
      name: "3-plot of Land",
      location: "Gugurat Junction, Plateau state",
      price: 320000000,
      img: img2,
    },
    {
      name: "4-Bedroom Duplex",
      location: "Rayfield Resort Road, Plateau state",
      price: 2500000,
      img: img1,
    },
    {
      name: "3-plot of Land",
      location: "Gugurat Junction, Plateau state",
      price: 320000000,
      img: img2,
    },
    {
      name: "4-Bedroom Duplex",
      location: "Rayfield Resort Road, Plateau state",
      price: 2500000,
      img: img1,
    },
    {
      name: "3-plot of Land",
      location: "Gugurat Junction, Plateau state",
      price: 320000000,
      img: img2,
    },
    {
      name: "Self Contain Apartment",
      location: "Rayfield Resort Road, Plateau state",
      price: 75000000,
      img: img3,
    },
    {
      name: "3-plot of Land",
      location: "Gugurat Junction, Plateau state",
      price: 320000000,
      img: img2,
    },
    {
      name: "Self Contain Apartment",
      location: "Rayfield Resort Road, Plateau state",
      price: 75000000,
      img: img3,
    },
  ];

  return (
   <div>
    <Navbar className="text-black" />
     <div className="lg:mt-[7%] max-w-6xl mx-auto flex flex-col w-full items-center mt-[18%]">
      <div className="w-full flex items-center md:px-4 px-4 lg:px-0">
        <ChevronLeft className="md:block hidden" />
        <div className="w-full flex items-center md:flex-col flex-col lg:flex-row">
          <fieldset className="bg-white flex border  justify-end md:w-[70%] w-full items-center px-4 mx-auto my-7 py-2 rounded-full gap-10">
            <input
              className="outline-none pl-4 text-black h-full text-sm w-full"
              placeholder="Address, Zip/postal Code, Local government"
              type="text"
              name=""
              id=""
            />
            <Search className="bg-black flex items-center justify-center text-white h-10 py-2 w-12 text-3xl rounded-full" />
          </fieldset>

          <div>
            <div className="flex items-center lg:flex-row md:flex-row md:items-start gap-4">
              <span className="flex text-sm items-center gap-4 border p-2 rounded-lg cursor-pointer">
                <p>Price</p>
                <ChevronDown />
              </span>
              <span
                onClick={() => setToggleFilter(!toggleFilter)}
                className="flex text-sm relative items-center gap-4 border p-2 rounded-lg cursor-pointer"
              >
                <p>{activeFilter ? activeFilter : "Property Type"}</p>
                <ChevronDown />
                {toggleFilter && (
                  <div className="absolute bg-white top-16 shadow w-36 rounded-xl px-1">
                    {proertyTypeFilter.map((item, idx) => (
                      <span
                        onClick={() => handleActiveFilter(item)}
                        className="py-2 flex flex-col transition-all hover:bg-primary/40 px-1 hover:text-white rounded hover:border-r-4 border-primary"
                        key={idx}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full flex flex-col gap-4">
        <motion.div
          initial={{ x: 30, opacity: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex "
        >
          <ProductCard item={Products} />
        </motion.div>
        <Link
          className="text-primary p-3 hover:scale-95 transition-all ml-auto md:mr-1 mr-10 border border-primary rounded-lg"
          href="/properties"
        ></Link>
      </div>
    </div>
   </div>
  );
};

export default Page;
