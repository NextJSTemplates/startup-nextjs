"use client";
import { Providers } from "./providers";
import { Footer } from "@/components/ui/large-name-footer";
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/Header";
import { Inter, Poppins } from "next/font/google";
import "../styles/index.css";
import Navbar from "@/components/Common/Navbar";

const poppins = Poppins({
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />

      <body className={`${poppins.variable}`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

