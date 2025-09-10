"use client";
import React from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Why from "./Components/Why";
import img1 from "@/public/Frame 18762.png";
import img2 from "@/public/Frame 18762 (2).png";
import img3 from "@/public/Frame 18762 (1).png";
import ProductCard from "./Components/ProductCard";
import Link from "next/link";
import Testimonial from "./Components/Testimonial";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import { motion } from "framer-motion";
const page = () => {
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
      name: "Self Contain Apartment",
      location: "Rayfield Resort Road, Plateau state",
      price: 75000000,
      img: img3,
    },
  ];
  return (
    <div className="w-full mx-auto">
        
      <Hero />

      <div className="max-w-6xl md:px-2 lg:px-1 mx-auto mt-10">
        <About />
        <Why />

        <div className="my-20 w-full flex flex-col gap-4">
          <h2 className="font-bold md:px-4 lg:px-0 text-center md:text-left text-xl tracking-wide">
            Explore Our{" "}
            <span className="text-primary/70">Verified Properties</span>
          </h2>
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
          >
            Explore More Properties
          </Link>
        </div>

        <Testimonial />
        <Faq />
      </div>
      <Footer />
    </div>
  );
};

export default page;
