import img1 from "@/public/Frame 18762.png";
import img2 from "@/public/Frame 18762 (2).png";
import img3 from "@/public/Frame 18762 (1).png";
import img4 from "@/public/Rectangle 190.png";
export const Products = [
  {
    name: "4-Bedroom Duplex",
    location: "Rayfield Resort Road, Plateau state",
    price: 2500000,
    id: "shb4",
    img: img1,
    desc: "This is a modern, multi-level white house with clean lines, large windows, and a rooftop terrace. It's surrounded by palm trees and lush landscaping, with a luxury car in the paved driveway, conveying an upscale, contemporary feel.",
    buildCost: 13000000,
    agent: [{ profileImg: img4, name: "Mr Samuel Idowu", id: "ag1" }],
    soldOut: false,
    bedrooms: 3,
    bathrooms: 4,
  },
  {
    name: "3-plot of Land",
    location: "Gugurat Junction, Plateau state",
    price: 320000000,
    img: img2,
    id: "shb5",
    desc: "This is a modern, multi-level white house with clean lines, large windows, and a rooftop terrace. It's surrounded by palm trees and lush landscaping, with a luxury car in the paved driveway, conveying an upscale, contemporary feel.",
    buildCost: 13000000,
    agent: [{ profileImg: img4, name: "Mr Samuel Idowu", id: "ag1" }],
    soldOut: false,
    bedrooms: 4,
    bathrooms: 5,
  },
  {
    name: "Self Contain Apartment",
    location: "Rayfield Resort Road, Plateau state",
    price: 75000000,
    img: img3,
    desc: "This is a modern, multi-level white house with clean lines, large windows, and a rooftop terrace. It's surrounded by palm trees and lush landscaping, with a luxury car in the paved driveway, conveying an upscale, contemporary feel.",
    buildCost: 13000000,
    agent: [{ profileImg: img4, name: "Mr Samuel Idowu", id: "ag1" }],
    id: "shb8",
    soldOut: true,
    bedrooms: 7,
    bathrooms: 8,
  },
];
