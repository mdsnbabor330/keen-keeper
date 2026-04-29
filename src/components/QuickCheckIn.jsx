"use client"
import { MessageSquare, PhoneCall, Video } from 'lucide-react';
import React from 'react';

const QuickCheckIn = ({friend}) => {
        const handleInteraction=(type)=>{
            console.log(type, friend);
        }

    return (
        <div className="flex gap-4">
           <button onClick={() => handleInteraction("call")} className="rounded-md btn w-fit bg-[#e9e9e989] px-24 py-10 text-center">
              <div className="text-sm font-semibold text-[#1F2937] flex flex-col items-center gap-3">
                <PhoneCall />
                Call
              </div>
            </button>
            <button onClick={()=>handleInteraction('Message')}  className="rounded-md btn w-fit bg-[#e9e9e989] p-10 text-center">
              <div  className="text-sm font-semibold text-[#1F2937] flex flex-col items-center gap-3">
                <MessageSquare />
                Days Since Contact
              </div>
            </button>
            <button onClick={()=>handleInteraction('Video')} className=" btn rounded-md w-fit bg-[#e9e9e989] p-10 text-center">
              <div  className="text-sm font-semibold text-[#1F2937] flex flex-col items-center gap-3">
                <Video></Video>
                Days Since Contact
              </div>
            </button>
          </div>
    );
};

export default QuickCheckIn;