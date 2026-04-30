"use client";
import { KeenContext } from "@/context/Context";
import TimeLineCard from "@/UI/TimeLineCard";
import { useContext } from "react";

const TimelinePage = () => {
  const { timeline,sortingType, setSortingType } = useContext(KeenContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setSortingType(value);
  };

  return (
    <div className="py-24 px-4">
      <div className="max-w-290 mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold py-4 text-[#244D3F]">Timeline</h1>
        <div className="py-4">
          <select
            value={sortingType}
            onChange={handleChange}
            className="select select-bordered outline-0"
          >
            <option value="all">Filter Timeline</option>
            <option value="Calls">Calls</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>
        </div>
        <TimeLineCard></TimeLineCard>
      </div>
    </div>
  );
};

export default TimelinePage;
