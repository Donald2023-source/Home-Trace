import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/store";
import Layout from "./Components/Layout";
import Navbar from "./Components/Navbar";
import NextTopLoader from "nextjs-toploader";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Home Trace",
  description: "Best place to find a favourite shelter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      <NextTopLoader />
      <Toaster position="top-right" />
      {children}
    </Layout>
  );
}
