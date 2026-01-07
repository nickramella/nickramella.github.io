import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";
import ReduxProvider from "../lib/store/provider";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import MenuBar from "@/components/MenuBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nicholas Ramella",
  description: "Portfolio Website",
};

interface SideNavItemProps {
  href: string;
  text: string;
  header: boolean;
}

const SideNavItem = ({href, text, header}: SideNavItemProps) => {
  return (
    <div className="w-full py-2">
      <Link href={href} className={`${header && "text-2xl font-bold"} hover:text-blue-500`}>{text}</Link>
    </div>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html lang="en">
        <Script src="https://kit.fontawesome.com/489c5460ce.js" crossOrigin="anonymous"></Script>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <AppRouterCacheProvider>
            <div className="bg-black text-white h-screen w-screen flex">
              <MenuBar />
              {children}
            </div>
          </AppRouterCacheProvider>
        </body>
      </html>
    </ReduxProvider>
  );
}
