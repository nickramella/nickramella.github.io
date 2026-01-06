import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";

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
    <html lang="en">
      <Script src="https://kit.fontawesome.com/489c5460ce.js" crossOrigin="anonymous"></Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-black text-white h-screen w-screen flex">
          <div className="w-60 h-screen float-left border-blue-500 border-r-2 px-2 anim-fade fixed">
            <SideNavItem href="/" header={true} text="Nicholas Ramella"/>
            <div className="flex justify-start">
              <a href="https://www.linkedin.com/in/nicholas-ramella-8b605618a" target="_blank"><i className="fa fa-linkedin-square text-2xl hover:text-blue-500"></i></a>
              <a href="https://github.com/nickramella" target="_blank"><i className="fa fa-github w-8 text-2xl hover:text-blue-500"></i></a>
            </div>
            <SideNavItem href="/work" header={false} text="Experience"/>
            <SideNavItem href="/demo" header={false} text="Demos"/>
            <SideNavItem href="/analytics" header={false} text="OSINT"/>
            <SideNavItem href="/personal" header={false} text="Personal"/>
          </div>
          <div className="py-10 flex justify-end ml-90 mr-20">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
