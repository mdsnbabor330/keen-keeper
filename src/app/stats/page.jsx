"use client";
import { KeenContext } from "@/context/Context";
import { useEffect, useState, useContext } from "react";
import { Legend, Pie, PieChart, Tooltip, ResponsiveContainer, Cell } from "recharts";

const Stats = () => {
  const { timeline } = useContext(KeenContext);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const counts = (timeline || []).reduce((acc, item) => {
    const type = (item?.type || "").toLowerCase();
  
    if (type.includes("text")) acc["Text"] = (acc["Text"] || 0) + 1 ;
    else if  (type.includes("call")) acc["Calls"] = (acc["Calls"] || 0) + 1;
    else if (type.includes("video")) acc["Video"] = (acc["Video"] || 0) + 1; 
    return acc;
  }, {});

  const data = [
    { name: "Text", value: counts["Text"] || 0, fill: "#7E35E1" },
    { name: "Calls", value: counts["Calls"] || 0, fill: "#244D3F" },
    { name: "Video", value: counts["Video"] || 0, fill: "#37A163" },
  ];

  return (
    <div className=" max-w-290 mx-auto py-20 px-3">
      <h1 className="text-3xl font-bold py-4 text-[#244d3f]">
        Timeline entries
      </h1>
    <div className="card  shadow-sm border border-gray-300 p-5 rounded-3xl">
      <div className="w-full h-full" >
        <h2 className="font-semibold text-xl mb-10 ">
          Friendship Analytics
        </h2>

       
        {isMounted ? (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                innerRadius="70%"
                outerRadius="90%"
                cornerRadius={10}
                paddingAngle={5}
                dataKey="value"
                nameKey="name"
                isAnimationActive={true}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex items-center justify-center p15">
            <p>Loading Chart...</p>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default Stats;