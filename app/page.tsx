'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectIsSmallScreen } from "@/lib/rootSlice";

export default function Home() {
  const isSmallScreen = useSelector(selectIsSmallScreen);

  return (
    <div className="w-full bg-gray-700 rounded-2xl p-6 anim-fade overflow-auto">
      <div className={`${!isSmallScreen && "flex"}`}>
        <div className={`flex justify-center items-center ${!isSmallScreen ? "w-[50%]" : "pb-5"}`}>
          <Image src="/ProfilePic.jpeg" className="rounded-full size-[20vw] min-w-40 min-h-40 max-w-80 max-h-80 border border-white anim-fade" alt="profile" width={30} height={30}/>
        </div>
        <div className={`justify-end ${!isSmallScreen && "w-[50%]"}`}>
          <p className="fluid-text pb-5">
            Software engineer with a background in statistics and data analysis, specializing in full-stack development and cloud-based enterprise platforms. Experience modernizing legacy applications and business intelligence dashboards into scalable, secure, and ADA- and WCAG-compliant solutions. Experience spans front-end frameworks, and backend services while working in an Agile environment.
          </p>
        </div>
      </div>
    </div>
  );
}
