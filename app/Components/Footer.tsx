import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import { Facebook, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-primary text-white/80 ">
      <div className="flex md:flex-row flex-col justify-center items-center max-w-6xl mx-auto w-full md:justify-between py-18 ">
        <div className="flex flex-col items-center md:items-start gap-4 w-64">
          <Image
            className="h-12 w-12"
            src={logo}
            alt="Home Trace Logo"
            width={100}
            height={50}
          />
          <p className="md:text-sm md:text-left text-center text-xs">Welcome to HomeTrace Verified homes. Real peace of mind.</p>
        </div>
        <div className="flex md:flex-row flex-col items-center gap-4">
          <h4>Contact</h4>
          <div className="flex flex-col gap-3">
            <p className="md:block hidden">(234) 9483920192</p>
            <p className="md:block hidden">hometrace@gmail.com</p>
            <span className="flex items-center gap-4">
              <Link href={"www.facebook.com"}>
                <Facebook />
              </Link>
              <Link href={"www.x.com"}>
                <Twitter />
              </Link>
              <Link href={"www.youtube.com"}>
                <Youtube />
              </Link>
            </span>
          </div>
        </div>

        <div className="hidden md:flex flex-col gap-3">
          <Link href={"#about"}>About</Link>
          <Link href={"#faq"}>FAQ</Link>
          <Link href={"#explore"}>Explore</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
