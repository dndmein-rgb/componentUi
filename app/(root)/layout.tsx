import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '../globals.css';

import {ViewTransitions} from 'next-view-transitions';
import Footer from "@/components/layout/footer";
import {Header} from "@/components/landing/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title:{
        template:"ComponentsCafe = Open Source Components",
        default:"ComponentsCafe"
    }
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en"  className="h-full">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased h-full flex flex-col`}
        >
          <Header />
          <main className="relative w-full flex-1">{children}</main>
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}