
import { ChartLine, Clock, House } from "lucide-react";
import Link from "next/link";
import React from "react";
import Mylink from "./Mylink";

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
              <Mylink
                key={link.id}
                href={link.href}
              >
                <Icon size={22} />
                <span>{link.name}</span>
              </Mylink>
            );
          })}
      </div>
    </div>
    </nav>
  );
};

export default navbar;
