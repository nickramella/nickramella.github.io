'use client';

import { useEffect, useState } from "react";

export default function Home() {
  if (typeof window === 'undefined') return;

  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  function handleResize() {
    setWindowSize(window.innerWidth);
  }

  window.addEventListener('resize', handleResize);

  return (
    <div className="w-full bg-gray-700 rounded-2xl p-6 anim-fade">
      <h1 className="text-[4vw] font-extrabold">About Me...</h1>
      <div className={`${windowSize > 780 && "flex"} max-h-[80%]`}>
        <div className={`flex justify-center items-center ${windowSize > 780 ? "w-[50%]" : "py-5"}`}>
          <div className="bg-white rounded-full text-blue-500 flex items-center justify-center text-7xl size-[15vw] min-w-30 min-h-30 max-w-50 max-h-50 border border-blue-400 anim-fade">
            NR
          </div>
        </div>
        <div className={`justify-end ${windowSize > 780 && "w-[50%]"}`}>
          <p className="text-[1.8vw] pb-5">
            Software engineer with a background in statistics and data analysis, specializing in full-stack development and cloud-based enterprise platforms. Experience modernizing legacy applications and business intelligence dashboards into scalable, secure, and ADA- and WCAG-compliant solutions. Experience spans front-end frameworks, and backend services while working in an Agile environment.
          </p>
        </div>
      </div>
    </div>
  );
}
