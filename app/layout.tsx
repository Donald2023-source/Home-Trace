import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

// Load Roboto for body text
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // adjust weights as needed
});

// Load Poppins for headings
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    <html suppressHydrationWarning lang="en">
      <Toaster position="top-right" />
      <body className={`${roboto.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
