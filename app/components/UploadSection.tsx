import Image from 'next/image'
import React from 'react'
import { MdOutlineCloudUpload } from 'react-icons/md'

const UploadSection = () => {
  return (
    <div className="flex flex-col gap-3 bg-white h-[60vh] w-full rounded-3xl px-6 py-4 border shadow overflow-hidden">
      <h2 className="text-blue-950 font-bold">
        Upload Videos, Audio or Transcripts
      </h2>
      <div className="flex items-center bg-gray-200 rounded-md w-full h-18 px-3 py-1 cursor-pointer text-sm font-medium">
        <Image 
            src="/drive.png"
            alt="drive-logo"
            width={40}
            height={40}
            className="rounded-full"
        />
        <p className="text-blue-950">
          Upload files from Drive
        </p>
        
      </div>
      <div className="flex items-center gap-3 text-sm bg-gray-200 rounded-md w-full h-18 px-5 py-[6px] cursor-pointer font-medium">
        <MdOutlineCloudUpload className="h-8 w-8 text-indigo-600"/>
        <p className="text-blue-950">
          Upload files from this computer
        </p>
      </div>
      <h2 className="text-blue-950 font-bold mt-3">
        Data Integrations
      </h2>
      <div>
        <div className="text-xl text-blue-950 font-bold flex items-center gap-2">
          <Image 
            src="/hubspot.svg"
            alt="hubspot"
            width={25}
            height={25}
          />
          Hubspot
          <div className="bg-gray-200 text-slate-400 rounded-xl text-xs px-2 py-1 ml-auto">
            CRM
          </div>
        </div>
        <div className="flex flex-col gap-1 p-4">
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1"/>
            <p className="text-xs font-semibold text-blue-950">
              Some data integration I have to ask about
            </p>
          </div>
          
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-[2px]"/>
            <p className="text-xs font-semibold text-blue-950">
              Some data integration
            </p>
          </div>
        </div>
      </div>
      
    
    </div>
  )
}

export default UploadSection
