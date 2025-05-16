"use client";
import Link from "next/link";
import { useState } from "react";
import { Linksdata } from "./Linksdata";

const Navlinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  const [active, setActive] = useState("");

  return (
    <>
      {Linksdata.map((links, id) => (
        <div className="">
          <div className="px-3 text-left md:curser-pointer group ">
            <h1
              className="text-gray-700  py-2 text-lg "
              onClick={() =>
                heading !== links.name ? setHeading(links.name) : setHeading("")
              }
            >
              <Link
                href={links.link}
                onClick={() => setActive(id)}
                className={` hover:text-red-500 ${
                  active === id ? "text-red-500" : "text-gray-700"
                }`}
              >
                {links.name}
              </Link>
            </h1>
            {links.submenu && (
              <div>
                <div className="absolute top-10 hidden group-hover:md:block hover:md:block">
                  <div className="py-3"></div>
                  <div className="bg-white p-5  grid grid-cols-2 gap-5">
                    {links.sublinks.map((mysublink) => (
                      <div>
                        <h1 className="text-gray-700  hover:text-red-500  ">
                          <Link href={mysublink.link}>{mysublink.name}</Link>
                        </h1>
                        {mysublink.submenu && (
                          <div>
                            {mysublink.sublink.map((slink) => (
                              <li className="text-blue-600">
                                <Link
                                  href={slink.link}
                                  className="hover:text-green-600"
                                >
                                  {slink.name}
                                </Link>
                              </li>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/*mobile menu*/}
          <div
            className={`
              ${heading === links.name ? "md:hidden" : "hidden"}
              `}
          >
            {/*sublinks */}
            {links.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.name
                        ? setSubHeading(slinks.name)
                        : setSubHeading("")
                    }
                    className=" text-gray-700 hover:text-red-400 py-4 pl-7 md:pr-0 pr-5"
                  >
                    <Link href={slinks.link}>{slinks.name}</Link>
                  </h1>
                  {slinks.submenu && Array.isArray(slinks.sublink) && (
                    <div
                      className={`${
                        subHeading === slinks.name ? "md:hidden" : "hidden"
                      }`}
                    >
                      {slinks.sublink.map((slink) => (
                        <li
                          key={slink.name}
                          className="py-4 pl-9 text-gray-700 hover:text-blue-500"
                        >
                          <Link href={slink.link}>{slink.name}</Link>
                        </li>
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
