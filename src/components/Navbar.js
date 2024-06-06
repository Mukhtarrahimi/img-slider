import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ];

  return (
    <div className="navbar flex px-8 md:px-12 shadow bg-white lg:px-16 items-center justify-between py-4">
      <div className="flex items-center gap-8">
        <h1 className="font-Dancing font-black text-4xl text-blue-700">
          Logo
        </h1>
        <ul className={`flex md:items-center gap-14 md:gap-12 lg:gap-16 flex-col md:flex-row absolute md:relative bg-gray-700 md:bg-transparent w-72 md:w-auto top-0 -z-20 md:z-auto left-0 md:left-auto ps-8 pt-24 md:p-0 h-full md:h-auto text-white md:text-gray-900 duration-700 ${isOpen ? 'left-0': 'left-[-800px]'}`}>
          {links.map((link) => (
            <li key={link.name}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <Link className="px-8 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-600 duration-500 text-white">
          Login
        </Link>
        {isOpen ? (
          <FaTimes
            onClick={() => setIsOpen(false)}
            className="text-4xl bg-slate-100 p-2 rounded-md cursor-pointer md:hidden"
          />
        ) : (
          <FaBars
            onClick={() => setIsOpen(true)}
            className="text-4xl bg-slate-100 p-2 rounded-md cursor-pointer md:hidden"
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;
