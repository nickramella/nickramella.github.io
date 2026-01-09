import React from "react"

interface BlogPostProps {
    title: string;
    date: string;
    children: React.ReactNode;
}

const BlogPost: React.FC<React.PropsWithChildren<BlogPostProps>> = ({title, date, children}: BlogPostProps) => {
  return (
    <div className="pl-6 mb-6 border-l border-gray-400">
        <h1 className="text-4xl font-extrabold">{title}</h1>
        <h2 className="text-[1rem] italic">Date Posted: {date}</h2>
        <div className="text-[1rem] pt-5">{children}</div>
    </div>
  )
}

export default BlogPost