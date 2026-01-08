"use client";
import BlogPost from "@/components/BlogPost";
import { selectIsSmallScreen } from "@/lib/rootSlice";
import { useSelector } from "react-redux";

const page = () => {
  const isSmallScreen = useSelector(selectIsSmallScreen);
  
  return (
    <div className="h-screen">
      <div className={`my-25 ${isSmallScreen ? "mx-10" : "mx-30"} anim-fade`}>
        <BlogPost
          title="Cold War Enemies CTF Challenge Solution"
          date="01/07/2025">
            <div>
              <p>This was my first CTF from HACKTORIA with the Cold War Enemies Contract. This was one of their easy level challenges, but was a fun practice in using OSINT and GEOINT. Here is my write-up on how I solved this geo puzzle.</p>
              <a
                className="text-blue-500"
                target="_blank"
                href="https://www.linkedin.com/posts/nicholas-ramella-8b605618a_hacktoria-cold-war-enemies-ctf-solution-activity-7413827449253224448-nZd5?utm_source=share&utm_medium=member_desktop&rcm=ACoAACyAYooBbdwksZPMbbQCPHzhuTHwVxVqVIE">
                LinkedIn Post
              </a>
            </div>
        </BlogPost>
      </div>
    </div>
  )
}

export default page