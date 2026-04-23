import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendCard = ({ friend }) => {
  const { id, name, picture, days_since_contact, status, tags } = friend;
  return (
    <Link href={`/FriendDetails/${[id]}`}>
      <div className="rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm hover:shadow-md">
        <Image
          src={picture}
          alt={name}
          width={96}
          height={96}
          className="mx-auto rounded-full object-cover"
        />

        <h3 className="mt-5 text-2xl font-bold text-slate-800">{name}</h3>

        <p className="mt-2 text-sm text-slate-500">{days_since_contact}d ago</p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium uppercase text-[#1F5C4A]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4">
          <span
            className={`rounded-full px-4 py-1.5 text-sm font-semibold text-white ${
              status === "Almost Due"
                ? "bg-[#EFAD44]"
                : status === "Overdue"
                  ? "bg-[#EF4444]"
                  : "bg-[#244D3F]"
            }`}
          >
            {status}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;
