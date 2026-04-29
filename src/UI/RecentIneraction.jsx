import React from 'react';
import { BsChatText } from 'react-icons/bs';
import { FaVideo } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';
import { LuHistory } from 'react-icons/lu';

const RecentIneraction = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-emerald-900">
                  Recent Interactions
                </h3>
                <button className="flex items-center gap-1 text-xs text-slate-500 bg-gray-50 px-2 py-1.5 rounded-md border border-gray-200 hover:bg-gray-100 transition-colors">
                  <LuHistory className="w-3.5 h-3.5" />
                  Full History
                </button>
              </div>

              <div className="space-y-6">
                {[
                  {
                    type: "Text",
                    date: "Jan 28, 2026",
                    note: "Asked for career advice",
                    icon: <BsChatText />,
                  },
                  {
                    type: "Meetup",
                    date: "Jan 28, 2026",
                    note: "Industry conference meetup",
                    icon: <IoCall />,
                  },
                  {
                    type: "Video",
                    date: "Jan 28, 2026",
                    note: "Asked for career advice",
                    icon: <FaVideo />,
                  },
                  {
                    type: "Text",
                    date: "Jan 28, 2026",
                    note: "Asked for career advice",
                    icon: <IoCall />,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-slate-600 border border-gray-100 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-bold text-slate-800">
                          {item.type}
                        </div>
                        <div className="text-sm text-slate-500">
                          {item.note}
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-slate-400 font-medium">
                      {item.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>
    );
};

export default RecentIneraction;