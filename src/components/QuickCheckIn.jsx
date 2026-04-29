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
    <div className="flex gap-4">
      <button
        onClick={() =>
          handleAction({
            type: "Calls",
            name: friend.name,
            icon: <IoCall />,
            date: friend.next_due_date,
          })
        }
        className="rounded-md btn w-fit bg-[#e9e9e989] px-24 py-10 text-center"
      >
        <div className="text-sm font-semibold text-[#1F2937] flex flex-col items-center gap-3">
          <PhoneCall />
          Call
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
        className="rounded-md btn w-fit bg-[#e9e9e989] p-10 text-center"
      >
        <div className="text-sm font-semibold text-[#1F2937] flex flex-col items-center gap-3">
          <MessageSquare />
          Days Since Contact
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
        className=" btn rounded-md w-fit bg-[#e9e9e989] p-10 text-center"
      >
        <div className="text-sm font-semibold text-[#1F2937] flex flex-col items-center gap-3">
          <Video></Video>
          Days Since Contact
        </div>
      </button>
    </div>
  );
};

export default QuickCheckIn;
