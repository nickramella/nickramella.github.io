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
        <div className="bg-black text-white h-screen w-screen overflow-hidden">
          <div className="w-full h-20 flex justify-center items-center space-x-50 border-blue-500 border-b-2">
            <Link href="/" className="text-2xl font-bold hover:text-blue-500">Nicholas Ramella</Link>
            <div className="space-x-4">
              <Link href="/work" className="hover:text-blue-500">Experience</Link>
              <Link href="/demo" className="hover:text-blue-500">Demos</Link>
              <Link href="/analytics" className="hover:text-blue-500">OSINT & Data</Link>
              <Link href="/personal" className="hover:text-blue-500">Personal</Link>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/nicholas-ramella-8b605618a" target="_blank"><i className="fa fa-linkedin-square text-2xl hover:text-blue-500"></i></a>
              <a href="https://github.com/nickramella" target="_blank"><i className="fa fa-github text-2xl hover:text-blue-500"></i></a>
            </div>
          </div>
          <div className="w-full h-full flex justify-center py-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
