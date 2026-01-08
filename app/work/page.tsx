"use client"
import WorkExperience from '@/components/WorkExperience';
import { selectIsSmallScreen } from '@/lib/rootSlice';
import { useSelector } from 'react-redux';

const page = () => {
  const isSmallScreen = useSelector(selectIsSmallScreen);

  return (
    <div className={`my-25 ${isSmallScreen ? "mx-10" : "mx-30"} anim-fade flex justify-center items-center overflow-visible`}>
      <div className="space-y-12">
        <h1 className="text-4xl font-bold relative -left-5">Work Experience</h1>
        <WorkExperience
          title="Software Engineer II"
          subheader="NBCUniversal, July 2024-October 2025"
          summary="Contributed to full-stack development on HR platform (“The Now Portal”) for 50k+ employee users. Tested site accessibility for keyboard navigation, screen reader compatibility, and color contrast on both mobile and web versions of site across browsers and operating systems using tools such as BrowserStack, Lighthouse, Axe DevTools, and Evinced."
        />
        <WorkExperience
          title="Media Tech Associate Class of 2024"
          subheader="NBCUniversal, July 2022-July 2024"
          summary="Selected for 2-year rotational program in Operations & Technology to gain cross-functional experience in software engineering, data analysis, and DevOps. Contributed to initiatives with teams in Data Analytics, Content Delivery Services, and Corporate Technology while building foundational experience with React, Node.js, and AWS."
        />
        <WorkExperience
          title="Research Assistant"
          subheader="NJIT BioDatanamics Lab, July 2020-September 2020"
          summary="Applied MATLAB to analyze complex neuronal firing patterns, producing visualizations that supported ongoing computational neuroscience research."
        />
        <WorkExperience
          title="Independent Researcher"
          subheader="Public Research Project, September 2018-May 2019"
          summary="Developed interactive dashboards in Excel and Jupyter Notebooks to identify statistical patterns and data integrity issues in large-scale CSV files."
        />
        <div>
          <h1 className="text-4xl font-bold relative -left-5 pb-3">Technical Skills</h1>
          <div className="text-[1rem] relative -left-5">
            <strong>Languages:</strong> JavaScript (ES6+), TypeScript, Python, HTML5, CSS3, SQL<br/>
            <strong>Frameworks & Libraries:</strong> React, Redux, Node.js, Angular, Radix UI, Tailwind CSS<br/>
            <strong>Cloud & DevOps:</strong> AWS (EC2, Lambda, CloudWatch, S3), SAP BTP, GitHub Actions, CI/CD Pipelines<br/>
            <strong>Testing & Accessibility:</strong> Jest, Lighthouse, Axe DevTools, Evinced, BrowserStack<br/>
            <strong>Tools & Platforms:</strong>Tools & Platforms: Git, GitHub, Jira, Visual Studio Code, Snyk<br/>
            <strong>Data & Visualization:</strong> Pandas, Matplotlib, Excel, MATLAB<br/>
            <strong>Methodologies:</strong> Agile Scrum, Code Review, Accessibility (WCAG 2.1), Secure Coding Practices<br/>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold relative -left-5">Education</h1>
          <h2 className="text-lg font-bold relative -left-5">New Jersey Institute of Technology</h2>
          <h3 className="text-[1rem] font-bold relative -left-5">Bachelor of Science in Mathematics <br/>Concentration: Statistics and Data Analysis</h3>
        </div>
      </div>
    </div>
  )
}

export default page