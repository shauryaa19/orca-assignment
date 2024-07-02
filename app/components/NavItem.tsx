import React from 'react'

interface NavItemProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon: Icon, text }) => (
  <a href={href} className="flex items-center space-x-2 text-sm font-medium text-slate-400 ml-4">
    <Icon className="w-5 h-5" />
    <span>{text}</span>
  </a>
);

export default NavItem
