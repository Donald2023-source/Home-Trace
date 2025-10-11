"use client";
import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import properties from "@/public/Group (1).png";

import activity from "@/public/mdi_timeline-clock-outline.png";
import saved from "@/public/stash_save-ribbon-solid.png";
import profile from "@/public/iconamoon_profile.png";
import Link from "next/link";
import home from "@/public/Vector (8).png";
import { usePathname } from "next/navigation";
const Sidebar = () => {
  const sideNavItems = [
    { name: "Home", icon: home, href: "/home" },
    { name: "Properties", icon: properties, href: "/properties" },
    { name: "Activity", icon: activity, href: "/activity" },
    { name: "Saved Listings", icon: saved, href: "/properties" },
    { name: "Profile", icon: profile, href: "/profile" },
  ];
  const path = usePathname();

  return (
    <div>
      <div className="flex flex-col h-full py-3 w-full mt-6  px-8 rounded">
        <div className="flex items-center gap-4">
          <Image className="h-10 w-auto" src={logo} alt="logo" />
          <h4 className="font-bold">Home Trace</h4>
        </div>
        <div className="flex flex-col gap-8 py-6 ">
          {sideNavItems.map((item, idx) => (
            <Link
              key={idx}
              className={`flex items-center gap-3 ${
                item.href === path
                  ? "px-4 py-2 bg-primary/10 text-primary font-medium rounded-md border-r-4 border-primary "
                  : "hover:px-4 hover:py-2 hover:bg-primary/10 transition-all hover:text-primary hover:font-medium hover:rounded-md hover:border-r-4 hover:border-primary "
              }`}
              href={item?.href}
            >
              <Image className="h-6 w-auto" src={item?.icon} alt="icon" />
              {item?.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
