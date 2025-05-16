"use client";
import Image from "next/image";
import Link from "next/link";
import Navlinks from "./Navlinks";

import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // const toggleMenu = ()=>{
  //   setISOpen(!isOpen)
  // }

  return (
    <nav className="bg-white  ">
      <div className="flex items-center font-medium justify-between">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Image src="/trumaxx-logo.webp" alt="Logo" width={120} height={40} />
          <div
            className="text-3xl text-red-500 md:hidden"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden items-center gap-6 font-[Poppins]">
          <li></li>
          <Navlinks />
        </ul>
        <div className="md:flex hidden h-full w-fit bg-red-500  items-center ">
          <span className="font-[Poppins]  p-3">Get in Touch</span>
        </div>

        {/* mobile nav */}
        <ul
          className={`md:hidden bg-white fixed w-full h-[50vh] top-15 overflow-y-auto py-24 pl-4
          duration-500 ${open ? "left-0" : "left-[-100%]"}
          `}
        >
          <li></li>
          <Navlinks />
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
