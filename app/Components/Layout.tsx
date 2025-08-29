"use client";
import { Provider } from "react-redux";
import { store } from "@/app/Redux/Store/store";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
