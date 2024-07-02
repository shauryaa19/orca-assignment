import React from 'react'
import { IoIosCopy, IoMdHome } from 'react-icons/io'
import { RiLayoutMasonryFill, RiPieChart2Fill } from 'react-icons/ri'
import NavItem from './NavItem'
import Image from 'next/image'

const LeftSidebar = () => {
  return (
    <aside className="w-1/5 p-6 bg-gray-100 border-solid">
      <div className="bg-white h-full w-full rounded-3xl border shadow">
        <div className="flex flex-col h-full">
          <h1 className="p-8 text-2xl font-bold text-center border-b-2 text-blue-950">
            ORCA AI
          </h1>
          <nav className="flex-1 space-y-4 mt-8 ">
            <NavItem href="#" icon={IoMdHome} text="Home" />
            <NavItem href="#" icon={RiLayoutMasonryFill} text="Templates" />
            <NavItem href="#" icon={IoIosCopy} text="Reports" />
            <NavItem href="#" icon={RiPieChart2Fill} text="Sales Performance" />
          </nav>
          <div className="flex items-center space-x-2 m-6">
            <div className="w-10 h-10 relative">
              <Image 
                src="/avatar.png"
                alt="avatar"
                layout="fill"
                className="rounded-full"
              />
            </div>
              
            <div>
              <p className="text-sm font-semibold">Adela Parkson</p>
              <p className="text-xs text-slate-400">Manager</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default LeftSidebar
