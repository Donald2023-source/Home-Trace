"use client";
import Dashboardheader from "@/app/Components/Dashboardheader";
import Sidebar from "@/app/Components/Sidebar";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Dashboardlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex h-screen">
      {path === "/home" && (
        <section
          className={
            isVisible
              ? "bg-white w-[50%] h-full fixed shadow"
              : "lg:w-[18%] lg:block hidden bg-white w-[50%] h-full fixed shadow"
          }
        >
          <Sidebar />
        </section>
      )}

      <div className="lg:ml-[18%] w-full">
        <section className="p-3 mt-6 shadow-xs rounded md:block hidden">
          <Dashboardheader />
        </section>
        <div className="p-3 bg-[#e1ddec82]">{children}</div>
      </div>
    </div>
  );
}
