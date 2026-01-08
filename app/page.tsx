'use client';
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectIsSmallScreen } from "@/lib/rootSlice";

export default function Home() {
  const isSmallScreen = useSelector(selectIsSmallScreen);

  return (
    <div className="py-22 h-screen mx-[10%]">
      <div className="w-full font-mono bg-[#1D1D1F] rounded-2xl anim-fade overflow-auto">
        <div className="w-full h-10 bg-[#353738] flex justify-center items-center">
          <i className="fa fa-folder text-blue-300" />
          <p className="pl-2">nicholasramella</p>
        </div>
        <div className={`p-6 ${!isSmallScreen && "flex"}`}>
          <div className={`${!isSmallScreen ? "w-[50%]" : "pb-3"}`}>
            <div className="flex justify-center items-center">
              <Image src="/ProfilePic.jpeg" className="rounded-full size-[20vw] min-w-40 min-h-40 max-w-80 max-h-80 border-2 border-white anim-fade" alt="profile" width={30} height={30}/>
            </div>
            <div className="flex justify-center py-3">
              <a href="https://www.linkedin.com/in/nicholas-ramella-8b605618a" target="_blank"><i className={`fa fa-linkedin-square ${isSmallScreen ? "text-[5vw]" : "text-[3vw]"} hover:text-blue-500`}></i></a>
              <a href="https://github.com/nickramella" target="_blank"><i className={`fa fa-github ${isSmallScreen ? "text-[5vw]" : "text-[3vw]"} hover:text-blue-500`}></i></a>
          </div>
          </div>
          <div className={`justify-end ${!isSmallScreen && "w-[50%]"}`}>
            <h1 className="text-center font-bold py-3">Full Stack Development | Data Analysis | OSINT</h1>
            <p className="fluid-text pb-5">
              <i className="fa fa-angle-right"/>Software engineer with a background in statistics and data analysis, specializing in full-stack development and cloud-based enterprise platforms. Experience modernizing legacy applications and business intelligence dashboards into scalable, secure, and ADA- and WCAG-compliant solutions. Experience spans front-end frameworks, and backend services while working in an Agile environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
