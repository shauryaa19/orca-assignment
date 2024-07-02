import React from 'react'
import SearchBar from './SearchBar'
import UploadSection from './UploadSection'

const RightSidebar = () => {
  return (
    <div className="bg-gray-100 w-[25vw]">
      <div className="mt-10 m-2">
        <SearchBar />
      </div>
      <div className="ml-2 mr-6 mt-8">
        <UploadSection />
      </div>
      <div className="ml-2 mr-6 mt-8">
        <button className="w-full h-12 bg-indigo-700 text-white rounded-xl">Generate Report</button>
      </div>
      
    </div>
  )
}

export default RightSidebar
