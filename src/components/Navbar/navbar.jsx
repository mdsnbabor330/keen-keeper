import { ChartLine, Clock, House } from "lucide-react";
import Link from "next/link";
import React from "react";
import Mylink from "./Mylink";

const Navbar = () => {
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
    <nav className=" flex justify-center w-full">
      <div className="navbar fixed max-w-300 mx-auto bg-base-100 px-4 z-1 ">
        <div className="flex-1">
          <p className="text-[28px]">
            <span className="font-extrabold text-[#1F2937]">Keen</span>
            <span className="font-bold text-[#244d3f]">Keeper</span>
          </p>
        </div>
        <div className="dropdown dropdown-left">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Mylink key={link.id} href={link.href}>
                  <Icon size={22} />
                  <span>{link.name}</span>
                </Mylink>
              );
            })}
          </ul>
        </div>

        <div className="navbar-end items-center gap-3  hidden md:flex">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Mylink key={link.id} href={link.href}>
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

export default Navbar;
