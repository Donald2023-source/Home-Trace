"use client";
import Dashboardheader from "@/app/Components/Dashboardheader";
import Sidebar from "@/app/Components/Sidebar";
import { usePathname } from "next/navigation";
import {
  useState,
  ReactElement,
  cloneElement,
  isValidElement,
  ReactNode,
  
} from "react";
import React from "react";

interface ChildProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Dashboardlayout({
  children,
}: {
  children: ReactNode;
}) {
  const path = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  // Safely inject props into one or multiple children
  const enhancedChildren = React.Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child as ReactElement<ChildProps>, {
        isVisible,
        setIsVisible,
      });
    }
    return child;
  });

  return (
    <div className="flex h-screen">
      {path === "/home" && (
        <section
          className={
            isVisible
              ? "bg-white inset-0 w-[50%] block h-full fixed shadow"
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
        <div className="p-3 bg-[#FAFAFA]">{enhancedChildren}</div>
      </div>
    </div>
  );
}
