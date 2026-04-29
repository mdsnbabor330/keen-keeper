import React from "react";
import friends from "@/data/friends.json";
import { Archive, BellRing, Trash2 } from "lucide-react";
import Image from "next/image";
import QuickCheckIn from "@/components/QuickCheckIn";
import RecentIneraction from "@/UI/RecentIneraction";

const FriendDetails = async ({ params }) => {
  const { id } = await params;
  const friend = friends.find((friend) => friend.id == id);
  console.log(friend);
  return (
    <main className="my-24 max-w-6xl mx-auto px-4 md:px-8">
      <div className="flex flex-col lg:flex-row justify-between gap-8">

        {/* Left Column: Profile Card & Actions */}
        <div className="w-full lg:w-1/3 space-y-6">
          <div className="card bg-white border border-slate-100 shadow-sm p-6 rounded-2xl">
            <figure className="mb-4">
              <Image
                src={friend.picture}
                alt={friend.name}
                width={120}
                height={120}
                className="rounded-full overflow-hidden object-cover mx-auto ring-4 ring-slate-50"
              />
            </figure>
            <div className="flex flex-col items-center text-center gap-3">
              <h2 className="text-3xl font-bold text-slate-800">{friend.name}</h2>
              <span
                className={`rounded-full px-4 py-1.5 text-sm font-semibold text-white ${
                  friend.status === "Almost Due"
                    ? "bg-[#EFAD44]"
                    : friend.status === "Overdue"
                      ? "bg-[#EF4444]"
                      : "bg-[#244D3F]"
                }`}
              >
                {friend.status}
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {friend.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold uppercase text-[#1F5C4A]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-base italic text-slate-500 mt-2">{friend.bio}</p>
              <p className="text-sm text-slate-400 font-medium">{friend.email}</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button className="btn btn-md md:btn-lg rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50">
              <BellRing size={20} />
              Snooze 2 Weeks
            </button>

            <button className="btn btn-md md:btn-lg rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50">
              <Archive size={20} />
              Archive
            </button>

            <button className="btn btn-md md:btn-lg rounded-xl border-none bg-red-50 text-red-600 hover:bg-red-100">
              <Trash2 size={20} />
              Delete Friend
            </button>
          </div>
        </div>


        {/* Right Column: Stats & Interactions */}
        <div className="w-full lg:w-2/3 space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-white border border-slate-50 p-6 text-center shadow-sm">
              <h3 className="text-4xl font-black text-[#1F5C4A]">
                {friend.days_since_contact}
              </h3>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                Days Since Contact
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-slate-50 p-6 text-center shadow-sm">
              <h3 className="text-4xl font-black text-[#1F5C4A]">
                {friend.goal}
              </h3>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                Goal (Days)
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-slate-50 p-6 text-center shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-[#1F5C4A] pt-2">
                {new Date(friend.next_due_date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </h3>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                Next Due
              </p>
            </div>
          </div>


          {/* Relationship Goal */}
          <div className="rounded-2xl bg-[#F8FAFC] border border-slate-100 p-6 shadow-sm space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-[#244D3F]">
                Relationship Goal
              </h3>
              <button className="btn btn-sm btn-ghost text-[#1F5C4A] font-bold">Edit</button>
            </div>
            <p className="text-xl font-medium text-slate-600">
              Connect every{" "}
              <span className="text-[#1F5C4A] font-bold">
                {friend.goal} days
              </span>
            </p>
          </div>


          {/* Quick Check-In */}
          <div className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm">
             <h3 className="text-lg font-bold text-[#244D3F] mb-6">
                Quick Check-In
              </h3>
            <QuickCheckIn friend={friend} />
          </div>

          {/* Recent Interactions */}
          <div className="mt-4">
            <RecentIneraction />
          </div>
        </div>
      </div>
    </main>
  );
};

export default FriendDetails;
