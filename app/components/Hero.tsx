import React from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { FiArrowLeft } from 'react-icons/fi'
import Card from './Card'

const Hero = () => {
  return (
    <main className="flex-1 p-6 bg-gray-100 w-[45vw]">
        <div className="flex items-center gap-4">
          <button className="flex items-center space-x-1 text-slate-400 bg-gray-200 p-[6px] rounded-2xl text-sm">
            <FiArrowLeft className="h-4 w-4" />
            <span className="font-semibold pt-[1px] pr-1">Back</span>
          </button>
          <div className="text-sm font-semibold text-slate-400">
            Templates / Sales Effectiveness / BANT
          </div>
        </div>
        <div className="mt-4">
          <h1 className="text-3xl font-bold text-blue-950">Analyse the calls for Soft Skills Coaching</h1>
          <div className="mt-6 space-y-3">
            <div className="flex items-center space-x-2">
              <FaCaretDown className="w-5 h-5" />
              <span className="text-normal font-semibold text-blue-950">How does it work?</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCaretDown className="w-5 h-5" />
              <span className="text-normal font-semibold text-blue-950">When should you use this?</span>
            </div>
          </div>
          <div className="bg-white h-[60vh] w-full rounded-3xl mt-5 border shadow overflow-auto custom-scrollbar">
            <div className="ml-4 mt-2 p-5">
              <div className="flex space-x-4 text-xs font-semibold">
                <p className="text-blue-950 underline underline-offset-8 decoration-indigo-500 decoration-4 cursor-pointer">
                  Setup
                </p>
                <p className="text-slate-400 cursor-pointer">
                  Sample Output
                </p>
              </div>
              <div className="flex flex-col border mt-8 h-full rounded-3xl">
                <Card 
                  heading="Call Opening"
                  ques="Was the purpose of the call stated in the beginning?"
                />
                <Card 
                  heading="Greeting"
                  ques="Did the salesperson use an appropriate opening greeting?"
                />
                <Card 
                  heading="Call Closing"
                  ques="Did the salesperson summarize the key points discussed during the call?"
                />
                <Card 
                  heading="Confidence"
                  ques="Did the sales person appear confident and knowledgeable about the product?"
                  isLast
                />
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}

export default Hero
