"use client";
import { KeenContext } from "@/context/Context";
import TimeLineCard from "@/UI/TimeLineCard";
import { useContext } from "react";

const TimelinePage = () => {
  const { timeline } = useContext(KeenContext);

  console.log(timeline, " timeline text");

  return (
    <div className="py-24">
      <div className="max-w-300 mx-auto px-10">
        <h1 className="text-3xl font-bold py-4">Timeline</h1>
        <TimeLineCard></TimeLineCard>
      </div>
    </div>
  );
};

export default TimelinePage;
