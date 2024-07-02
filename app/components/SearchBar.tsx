import Image from 'next/image'
import React from 'react'
import { FaMoon, FaSearch } from 'react-icons/fa'
import { IoMdInformationCircleOutline, IoMdNotificationsOutline } from 'react-icons/io'

const SearchBar = () => {
  return (
    <div className="bg-white rounded-3xl flex items-center justify-between py-2 px-3 shadow w-full">
        <div className="flex items-center space-x-2 bg-gray-200 rounded-3xl p-2 w-1/2">
            <FaSearch className="text-slate-400"/>
            <input 
                type="text"
                placeholder="Search"
                className="bg-gray-200 text-slate-400 w-20"
            />
        </div>
        <IoMdNotificationsOutline className="w-5 h-5 text-slate-400" />
        <FaMoon className="w-4 h-4 text-slate-400" />
        <IoMdInformationCircleOutline className="w-5 h-5 text-slate-400" />
        <div className="w-8 h-8 relative">
            <Image 
                src="/avatar.png"
                alt="avatar"
                layout="fill"
                className="rounded-full"
            />
        </div>
      
    </div>
  )
}

export default SearchBar
