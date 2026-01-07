import React from 'react'
import LaptopMacIcon from '@mui/icons-material/LaptopMac';

interface WorkExperienceProps {
    title: string;
    subheader: string;
    summary: string;
}

const WorkExperience = ({title, subheader, summary}: WorkExperienceProps) => {
  return (
    <div className="border-l border-gray-400 px-5 relative">
    <div className="absolute bg-black -top-10.5 -left-5.5 border border-gray-400 rounded-full p-2">
        <LaptopMacIcon />
    </div>
    <h1 className="font-bold py-3">{title}</h1>
    <p className="italic">{subheader}</p>
    <p>{summary}</p>
    </div>
  )
}

export default WorkExperience