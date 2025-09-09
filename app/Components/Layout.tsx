"use client";
import { Provider } from "react-redux";
import { store } from "@/app/Redux/Store/store";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <Navbar />
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
