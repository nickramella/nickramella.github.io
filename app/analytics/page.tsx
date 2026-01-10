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
          title="Nightmare Fuel CTF Challenge Solution And Thoughts"
          date="01/08/2025">
            <div>
              <p>{`The solution for this one was honestly a little disappointing for me. The setup story seemed to indicate that we would need to find something in the video itself that would help the investigation of the missing people. I started by screenshotting frames of the provided clip and increasing the brightness while trying to look at the door the woman in white passes through as well as the door frames since the story mentions that the architecture is out of place compared to the building plans. However, it became pretty obvious that there was no string of characters hidden anywhere to act as the flag to capture. The second lead to work with from the story is that the audio was missing from the video. I decided to look on metadata2go to see what information I could find that might be related to the audio missing. Since we are looking for a string of characters the metadata of the video makes sense as a place to look for the challenge’s flag. Scrolling through the metadata I came across a comment that was a random string of characters under the comment field that stood out. Using these characters to unlock the zip file works and the badge is of completion is now obtained. While I wish I could of felt more proud of completing this challenge, it felt too easy once you decide to check the videos metadata and once you see the flag it doesn’t feel like you solved anything that would help the investigation that was set up beforehand. It was an interesting idea to try to fake people out with the video footage and elaborate supernatural setup but at the end it just felt a bit cheap for me.`}</p>
            </div>
        </BlogPost>
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