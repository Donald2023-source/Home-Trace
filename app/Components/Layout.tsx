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
        <Navbar
          className={
            path.startsWith("/Search")
              ? "shadow bg-transparent text-black md:h-20 flex items-center"
              : "h-20 bg-black/20 flex items-center"
          }
        />
        <div>
          <Provider store={store}>{children}</Provider>
        </div>
      </body>
    </html>
  );
}
