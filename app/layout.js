"use client";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import { usePathname } from "next/navigation";
import NextTopLoader from 'nextjs-toploader';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const showSidebar = pathname !== "/";

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {showSidebar ? <Sidebar>{children}</Sidebar> : children}
        <NextTopLoader />
      </body>
    </html>
  );
}
