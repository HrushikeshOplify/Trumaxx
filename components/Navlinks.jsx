"use client";
import Link from "next/link";
import { useState } from "react";
import { Linksdata } from "./Linksdata";

const Navlinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  const [active, setActive] = useState("");
  const [subactive, setsubActive] = useState("");

  const [Dropdownactive, setdropActive] = useState("");

  const [nevigate, setNevigate] = useState("");
  const [code, setCode] = useState("");

  return (
    <>
      {Linksdata.map((link, id) => (
        <div key={id} className="relative group">
          {/* Main Menu Item */}
          <div className="border-b-2 md:border-0  px-3">
            <Link
              href={link.link || "#"}
              className={`text-gray-800 hover:text-red-500 py-2 font-Poppins block transition ${
                active === id ? "text-red md:border-b-4 border-b-black " : ""
              }`}
              onClick={() => {
                setActive(id);
                setsubActive("");
                setNevigate("");
                setdropActive("");
                 if (link.submenu){
                heading !== link.name ? setHeading(link.name) : setHeading("")}
              }}
            >
              {link.name}
            </Link>

            {/* Dropdown Menu for Desktop */}
            {link.submenu && (
              <div className="absolute left-0 top-full hidden group-hover:md:block hover:md:block bg-white shadow-lg  min-w-[200px] z-50">
                <div className="py-2">
                  {link.sublinks.map((sublink, subId) => (
                    <div key={subId} className="relative group/sub">
                      <Link
                        href={sublink.link || "#"}
                        className={`block px-4 py-2 text-gray-700 hover:text-red-500 hover:bg-gray-100 transition
                          ${
                            Dropdownactive === subId && !sublink.submenu
                              ? "border-l-4 border-l-red-600 bg-gray-100"
                              : ""
                          }
                          `}
                        onClick={() => {
                          setdropActive(subId);
                          setActive("");
                          setNevigate("");
                        }}
                      >
                        {sublink.name}
                      </Link>
                      {/* Nested Submenu for Desktop */}
                      {sublink.submenu && sublink.sublink && (
                        <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-lg  min-w-[200px]  ">
                          {sublink.sublink.map((nestedLink, nestedId) => (
                            <Link
                              key={nestedId}
                              href={nestedLink.link}
                              className={`block px-4 py-2 text-gray-700 hover:text-red-500 hover:bg-gray-100 transition
                                ${
                                  nevigate === nestedId &&
                                  code === nestedLink.link
                                    ? "border-l-4 border-l-red-600 bg-gray-100"
                                    : ""
                                }
                                `}
                              onClick={() => {
                                setNevigate(nestedId);
                                setCode(nestedLink.link);
                                setdropActive("");
                                setActive("");
                              }}
                            >
                              {nestedLink.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`md:hidden ${
              heading === link.name ? "block" : "hidden"
            }`}
          >
            {link.sublinks.map((sublink, subId) => (
              <div key={subId}>
                <div className="border-b-2">
                  <Link
                    href={sublink.link || "#"}
                    className={`block py-2 pl-7 text-gray-700 hover:text-red-500 transition
                      ${subactive === subId ? "text-red-500" : ""}   `}
                    onClick={() => {
                      setsubActive(subId);
                      subHeading !== sublink.name
                        ? setSubHeading(sublink.name)
                        : setSubHeading("");
                    }}
                  >
                    {sublink.name}
                  </Link>
                  {/* Nested Submenu for Mobile */}
                  {sublink.submenu && sublink.sublink && (
                    <div
                      className={`pl-9 ${
                        subHeading === sublink.name ? "block" : "hidden"
                      }`}
                    >
                      {sublink.sublink.map((nestedLink, nestedId) => (
                        <Link
                          key={nestedId}
                          href={nestedLink.link}
                          className="block py-2 text-gray-700 hover:text-red-500 transition"
                        >
                          {nestedLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Navlinks;
