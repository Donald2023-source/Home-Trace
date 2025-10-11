"use client";
import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

const Navbar = ({ className }: { className?: string }) => {
  const isAuthenticated = false;
  const navItems = [
    { name: "Home", href: "" },
    { name: "About", href: "#about" },
    { name: "Explore", href: "/search" },
    { name: "FAQ's", href: "#faqs" },
  ];

  const path = usePathname();
  const [nav, setNav] = useState(false);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href?.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };
  return (
    <div
      className={twMerge(
        "absolute inset-0   backdrop-blur-xl h-fit p-3 md:p-2 text-white z-20",
        className
      )}
    >
      <nav className="flex justify-between items-center max-w-6xl mx-auto w-full">
        <Link href={"/"}>
          <Image
            className="h-10 w-10"
            src={logo}
            alt="Logo"
            width={50}
            height={50}
          />
        </Link>

        <div className="hidden md:flex items-center space-x-5">
          {navItems.map((item, idx) => (
            <Link
              onClick={(e) => handleScroll(e, item?.href)}
              className="px-4 hover:text-gray-500 transition-all"
              key={idx}
              href={item?.href}
            >
              {item?.name}
            </Link>
          ))}
        </div>
        {!isAuthenticated && (
          <div className="hidden md:flex items-center space-x-4">
            <Button
              className={`bg-myPrimary hover:text-white ${
                path.startsWith("/") ? "text-white border" : ""
              } py-2  cursor-pointer`}
            >
              <Link href={"/auth"}>Sign up</Link>
            </Button>
            <Button className="text-white cursor-pointer px-4 py-2">
              <Link href={"/auth"}>Sign in</Link>
            </Button>
          </div>
        )}
        <Menu
          onClick={() => setNav(true)}
          className="md:hidden cursor-pointer hover:scale-90 transition-all"
        />

        <div
          className={`${
            nav
              ? "md:hidden flex flex-col h-screen justify-center to-[60%] bg-white backdrop-xl text-black items-center absolute top-0 left-0 right-0  translate-x-0 transition-all duration-300 ease-in-out z-30"
              : "md:hidden flex flex-col h-screen justify-center to-[60%] bg-black backdrop-xl s-center absolute top-0 left-0 right-0 text-white -translate-x-full transition-all duration-300 ease-in-out z-30"
          }`}
        >
          {navItems.map((item, idx) => (
            <Link
              onClick={(e) => {
                handleScroll(e, item?.href);
                setNav(false);
              }}
              className="py-7 hover:text-gray-500 transition-all font-semibold"
              key={idx}
              href={item?.href}
            >
              {item?.name}
            </Link>
          ))}
          <h2
            onClick={() => setNav(false)}
            className="absolute top-10 right-10 font-bold text-lg hover:scale-90 transition-all cursor-pointer"
          >
            X
          </h2>
          {isAuthenticated && (
            <div className="flex items-center gap-8">
              <Button className="bg-myPrimary  text-black my-3 border-gray-500 px-4 py-2  cursor-pointer">
                <Link href={"/auth"}>Sign up</Link>
              </Button>
              <Button className="text-white cursor-pointer px-4 py-2">
                <Link href={"/auth"}>Sign in</Link>
              </Button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
