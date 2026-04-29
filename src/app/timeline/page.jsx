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
    <div className="py-24">
      <div className="max-w-300 mx-auto px-10">
        <h1 className="text-3xl font-bold py-4">Timeline</h1>
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
