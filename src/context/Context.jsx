"use client ";
import React, { createContext, useState } from "react";



export const KeenContext = createContext();

const KeenProvider = ({ children }) => {

  const [timeline, setTimeline] = useState([]);

  const [sortingType,setSortingType] = useState("all");

  const data = {
    timeline,
    setTimeline,
    sortingType,
    setSortingType,
  };

  return (
    <KeenContext.Provider value={data}>
        {children}
    </KeenContext.Provider>
  );
};

export default KeenProvider;
