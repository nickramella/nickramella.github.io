"use client"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';

const CustomizedTimeline = () => {
  return (
    <Timeline position="right">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', width: "500px" }}>
          <h1 className="font-bold py-3">Software Engineer II</h1>
          <p className="italic">NBCUniversal July 2024-October 2025</p>
          <p>Contributed to full-stack development on HR platform (“The Now Portal”) for 50k+ employee users. Tested site accessibility for keyboard navigation, screen reader compatibility, and color contrast on both mobile and web versions of site across browsers and operating systems using tools such as BrowserStack, Lighthouse, Axe DevTools, and Evinced.</p>
        </TimelineContent>
      </TimelineItem>
            <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', width: "500px" }}>
          <h1 className="font-bold py-3">Media Tech Associate Class of 2024</h1>
          <p className="italic">NBCUniversal July 2022-July 2024</p>
          <p>Selected for 2-year rotational program in Operations & Technology to gain cross-functional experience in software engineering, data analysis, and DevOps. Contributed to initiatives with teams in Data Analytics, Content Delivery Services, and Corporate Technology while building foundational experience with React, Node.js, and AWS.</p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default CustomizedTimeline