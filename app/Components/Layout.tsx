"use client";
import { Provider } from "react-redux";
import { store } from "@/app/Redux/Store/store";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <html suppressHydrationWarning lang="en">
      <body>
       
        <div>
          <Provider store={store}>{children}</Provider>
        </div>
      </body>
    </html>
  );
}
