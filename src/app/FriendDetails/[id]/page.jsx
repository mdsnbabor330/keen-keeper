import React from "react";
import friends from "@/data/friends.json";
import { Archive, BellRing, Contact, MessageCircle, MessageSquare, PhoneCall, Trash2, Video } from "lucide-react";
import Image from "next/image";

const FriendDetails = async ({ params }) => {
  const { id } = await params;
  const friend = friends.find((friend) => friend.id == id);
  console.log(friend);
  return (
    <main className="my-25 max-w-300 mx-auto px-3">
      <div className="flex justify-between gap-5">

        <div className="space-y-4">
          <div className="card bg-base-100 w-96 shadow-sm p-4 -z-10">
            <figure>
              <Image
                src={friend.picture}
                alt={friend.name}
                width={96}
                height={96}
                className="rounded-full overflow-hidden object-contain mx-auto"
              />
            </figure>
            <div className="flex flex-col items-center gap-3">
              <h2 className="card-title text-3xl font-bold">{friend.name}</h2>
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
                    className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium uppercase text-[#1F5C4A]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-lg italic text-slate-500">{friend.bio}</p>
              <p className="text-base text-slate-500">{friend.email}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <button className="btn rounded-md border border-slate-200 bg-white  py-6 text-slate-700 ">
              <BellRing size={20} />
              Snooze 2 Weeks
            </button>

            <button className="btn rounded-md border border-slate-200 bg-white  py-6 text-slate-700">
              <Archive size={20} />
              Archive
            </button>

            <button className="btn rounded-md border border-slate-200 bg-white  py-6  text-red-500 ">
              <Trash2 size={20} />
              Delete
            </button>
          </div>
        </div>


        <div className="space-y-6">


          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            <div className="rounded-md bg-white p-4 text-center shadow-sm">
              <h3 className="text-[30px]  font-black text-[#1F5C4A]">
                {friend.days_since_contact}
              </h3>
              <p className="mt-4 text-sm font-bold uppercase tracking-widest text-slate-400">
                Days Since Contact
              </p>
            </div>
            <div className="rounded-md  bg-white p-4 text-center shadow-sm">
              <h3 className="text-[30px]  font-black text-[#1F5C4A]">
                {friend.goal}
              </h3>
              <p className="mt-4 text-sm font-bold uppercase tracking-widest text-slate-400">
                Goal (Days)
              </p>
            </div>
            <div className="rounded-md  bg-white p-4 text-center shadow-sm">
              <h3 className="text-[30px] font-black text-[#1F5C4A]">
                {new Date(friend.next_due_date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </h3>
              <p className="mt-4 text-sm font-bold uppercase tracking-widest text-slate-400">
                Next Due
              </p>
            </div>
          </div>


          <div className="rounded-md bg-white p-4 shadow-sm space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-[20px] font-medium text-[#244D3F]">
                Relationship Goal
              </h3>
              <div className="btn">Edit</div>
            </div>
            <p className="text-[18px] font-semibold text-[#64748B]">
              Connect every{" "}
              <span className="text-[#1F5C4A] font-bold">
                {friend.goal} days
              </span>
            </p>
          </div>


          <div className="rounded-md bg-white p-4 shadow-sm ">
             <h3 className="text-[20px] font-medium text-[#244D3F] mb-4">
                Quick Check-In
              </h3>
            <div className="flex gap-5">
           <div className="rounded-md w-full bg-[#e9e9e989] p-5 text-center">
              <p className="text-sm font-semibold text-[#1F2937] flex flex-col items-center gap-3">
                <PhoneCall />
                Days Since Contact
              </p>
            </div>
            <div className="rounded-md w-full bg-[#e9e9e989] p-5 text-center">
              <p className="text-sm font-semibold text-[#1F2937] flex flex-col items-center gap-3">
                <MessageSquare />
                Days Since Contact
              </p>
            </div>
            <div className="rounded-md w-full bg-[#e9e9e989] p-5 text-center">
              <p className="text-sm font-semibold text-[#1F2937] flex flex-col items-center gap-3">
                <Video></Video>
                Days Since Contact
              </p>
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </main>
  );
};

export default FriendDetails;
