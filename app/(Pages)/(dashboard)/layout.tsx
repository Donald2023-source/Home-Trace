"use client";
import Dashboardheader from "@/app/Components/Dashboardheader";
import Sidebar from "@/app/Components/Sidebar";
import { usePathname } from "next/navigation";

export default function Dashboardlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  return (
    <div className="flex ">
      {path === "/home" && (
        <section className="w-[20%] h-82 border">
          <Sidebar />
        </section>
      )}
      <div className="flex-1">
        <section className="border p-3">
          <Dashboardheader />
        </section>
        <div>{children}</div>
      </div>
    </div>
  );
}
