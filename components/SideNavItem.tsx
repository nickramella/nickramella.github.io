import Link from 'next/link';
import React from 'react'

interface SideNavItemProps {
  href: string;
  text: string;
  header: boolean;
}

const SideNavItem = ({href, text, header}: SideNavItemProps) => {
  return (
    <div className="w-full py-2">
      <Link href={href} className={`${header && "text-2xl font-bold"} hover:text-blue-500`}>{text}</Link>
    </div>
  )
}

export default SideNavItem