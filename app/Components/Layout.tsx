"use client";
import { Provider } from "react-redux";
import { store } from "@/app/Redux/Store/store";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";


export default function Layout({ children }: { children: React.ReactNode }) {
  const path = usePathname()
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <Navbar className={path.startsWith("/") ? "bg-transparent shadow text-black h-20 flex items-center" : ""} />
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
