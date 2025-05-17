"use client";
import Image from "next/image";
import Link from "next/link";
import Navlinks from "./Navlinks";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white w-full fixed top-0 left-0 z-50 shadow-md">
      <div className="flex items-center justify-between h-14 px-4 md:px-8">
        {/* Logo and Mobile Menu  */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/">
            <Image
              src="/trumaxx-logo.webp"
              alt="Logo"
              width={120}
              height={40}
            />
          </Link>
          <div
            className="text-3xl text-red-500 md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-Poppins">
          <Navlinks />
        </div>

        {/* Get in Touch Button */}
        <div className="hidden md:flex h-full items-center">
          <Link
            href="/contact-us"
            className="bg-red-500 text-white font-Poppins px-4 py-2 hover:bg-red-600 transition"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`md:hidden bg-white fixed w-full top-14 left-0 h-[50vh] overflow-y-auto py-6 px-4 transition-all duration-500 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <Navlinks />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
