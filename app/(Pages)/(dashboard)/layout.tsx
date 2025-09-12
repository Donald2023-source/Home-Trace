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
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="flex h-screen">
      {path === "/home" && (
        <section className="lg:w-[18%] bg-white w-[50%] h-full fixed shadow">
          <Sidebar />
        </section>
      )}

      <div className="lg:ml-[18%] w-full">
        <section className="border p-3">
          <Dashboardheader />
        </section>
        <div className="p-3">{children}</div>
      </div>
    </div>
  );
}
