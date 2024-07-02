"use client"

import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { IoMdArrowDropright, IoMdArrowDropdown, IoMdLock } from 'react-icons/io'
import { MdEdit } from 'react-icons/md';

interface CardProps {
    heading: string;
    ques: string;
    isLast?: boolean
}

const Card = ({ heading, ques, isLast }: CardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`flex flex-col gap-4 h-full w-full ${!isLast ? "border-b-2" : ""} p-4 cursor-pointer`} onClick={toggleExpand}>
      <div className="flex gap-2 items-center">
        <FaUser className="w-4 h-4 p-1 text-indigo-500 bg-gray-200 rounded-full"/>
        <p className="font-bold text-xs text-blue-950">
            {heading}
        </p>
      </div>
      <div className="flex gap-2 items-center">
        {isExpanded ? (
          <IoMdArrowDropdown className="w-5 h-5" />
        ) : (
          <IoMdArrowDropright className="w-5 h-5" />
        )}
        <div className="text-sm font-medium text-blue-950">
           {ques} 
        </div>
      </div>
      {isExpanded && (
        <div className="mt-1 ml-7">
          <p className="text-[12px] font-semibold text-slate-400">
            HOW WILL THIS BE SCORED?
          </p>
          <div className="border rounded-xl w-full mt-1">
            <div className="px-3 py-2">
              <div className="flex items-center gap-2">
                <p className="text-[12px] font-bold text-gray-400">
                  {ques}
                </p>
                
                <IoMdLock className="w-4 h-4"/>
                <div className="text-sm ml-auto border border-gray-300 flex text-center font-bold gap-1 text-indigo-600 bg-gray-200 px-2 py-[2px] rounded-lg cursor-pointer">
                  <MdEdit className="w-4 h-4 mt-[2px]"/>
                  Edit
                </div>
              </div>
              <div className="text-xs text-blue-950 mt-1">
                Did the PST member greet the customer and use call opening with good energetic tone? <br />
                Did the PST member use the right salutation and greeting on the email
              </div>
            </div>

              
          </div>
        </div>
      )}
    </div>
  )
}

export default Card
