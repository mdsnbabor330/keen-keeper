
import { ChartLine, Clock, House } from "lucide-react";
import Link from "next/link";
import React from "react";

const navbar = () => {

  const navLinks = [
    {
      id: 1,
      name: "Home",
      href: "/",
      icon: House,
    },
    {
      id: 2,
      name: "Timeline",
      href: "/timeline",
      icon: Clock,
    },
    {
      id: 3,
      name: "Stats",
      href: "/stats",
      icon: ChartLine,
    },
  ];
  return (
    <nav className=" flex justify-center">
      <div className="navbar fixed max-w-350 mx-auto bg-base-100">
      <div className="flex-1">
        <p className="text-[24px]">
          <span className="font-extrabold text-[#1F2937]">Keen</span>
          <span className="font-bold text-[#244d3f]">Keeper</span>
        </p>
      </div>
      <div className="flex items-center gap-3">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.id}
                href={link.href}
                className={` btn btn-ghost rounded-md text-[#64748B]`}
              >
                {/* ${
                  isActive
                    ? "bg-[#1F5C4A] text-white"
                    : "text-slate-500"
                } */}
                <Icon size={22} />
                <span>{link.name}</span>
              </Link>
            );
          })}
      </div>
    </div>
    </nav>
  );
};

export default navbar;
