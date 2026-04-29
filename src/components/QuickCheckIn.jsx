"use client";
import { KeenContext } from "@/context/Context";
import { MessageSquare, PhoneCall, Video } from "lucide-react";
import React, { useContext } from "react";
import { BsChatText } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { toast } from "react-toastify";

const QuickCheckIn = ({ friend }) => {
  const { timeline, setTimeline } = useContext(KeenContext);
  const handleAction = ({ type, name, icon, date }) => {
    setTimeline([...timeline, { type, name, icon, date }]);
    toast.success(`${type} is added to timeline!`);
  };

  return (
    <div className="flex flex-wrap gap-4">
      <button
        onClick={() =>
          handleAction({
            type: "Calls",
            name: friend.name,
            icon: <IoCall />,
            date: friend.next_due_date,
          })
        }
        className="flex-1 min-w-[100px] rounded-xl btn h-auto py-6 bg-slate-50 border-slate-100 hover:bg-emerald-50 hover:border-emerald-100 group transition-all"
      >
        <div className="text-sm font-bold text-slate-600 group-hover:text-emerald-700 flex flex-col items-center gap-2">
          <PhoneCall size={20} />
          <span>Call</span>
        </div>
      </button>
      <button
        onClick={() =>
          handleAction({
            type: "Text",
            name: friend.name,
            icon: <BsChatText />,
            date: friend.next_due_date,
          })
        }
        className="flex-1 min-w-[100px] rounded-xl btn h-auto py-6 bg-slate-50 border-slate-100 hover:bg-emerald-50 hover:border-emerald-100 group transition-all"
      >
        <div className="text-sm font-bold text-slate-600 group-hover:text-emerald-700 flex flex-col items-center gap-2">
          <MessageSquare size={20} />
          <span>Text</span>
        </div>
      </button>
      <button
        onClick={() =>
          handleAction({
            type: "Video",
            name: friend.name,
            icon: <FaVideo />,
            date: friend.next_due_date,
          })
        }
        className="flex-1 min-w-[100px] rounded-xl btn h-auto py-6 bg-slate-50 border-slate-100 hover:bg-emerald-50 hover:border-emerald-100 group transition-all"
      >
        <div className="text-sm font-bold text-slate-600 group-hover:text-emerald-700 flex flex-col items-center gap-2">
          <Video size={20} />
          <span>Video</span>
        </div>
      </button>
    </div>
  );
};

export default QuickCheckIn;
