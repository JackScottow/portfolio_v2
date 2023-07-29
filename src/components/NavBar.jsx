import React, { useState } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Tooltip, Zoom } from "@mui/material";

import Link from "next/link";
const Sidebar = () => {
  const [isMobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleMobileDrawer = () => {
    setMobileDrawerOpen((prevState) => !prevState);
  };

  const closeMobileDrawer = () => {
    setMobileDrawerOpen(false);
  };

  return (
    <div className="flex flex-col">
      {/* Desktop Sidebar */}
      <aside className="sticky top-0 flex-col justify-between flex-shrink-0 hidden w-64 h-screen text-gray-300 border-r-2 bg-slate-900 md:flex border-r-teal-100">
        {/* Sidebar content */}
        {/* Add your sidebar navigation links here */}
        <ul className="hidden pt-10 text-center md:block">
          <Link href="#home">
            <li className="px-10 py-5 text-xl font-normal transition-all duration-300 ease-in-out hover:bg-teal-300 hover:text-slate-900">Home</li>
          </Link>
          <Link href="#about">
            <li className="px-10 py-5 text-xl font-normal transition-all duration-300 ease-in hover:bg-teal-300 hover:text-slate-900 ">About</li>
          </Link>
          <Link href="#work">
            <li className="px-10 py-5 text-xl font-normal transition-all duration-300 ease-in hover:bg-teal-300 hover:text-slate-900 ">Work</li>
          </Link>
          <Link href="#contact">
            <li className="px-10 py-5 text-xl font-normal transition-all duration-300 ease-in hover:bg-teal-300 hover:text-slate-900 ">Contact</li>
          </Link>
          {/* Add more links as needed */}
        </ul>
        <div className="flex px-2 py-3 justify-evenly">
          <Tooltip title="GitHub" placement="top" disableInteractive TransitionComponent={Zoom} arrow>
            <Link href="https://www.jackscottow.github.com">
              <FontAwesomeIcon icon={faGithub} size="xl" className="transition duration-300 ease-in hover:text-teal-300 hover:scale-125" />
            </Link>
          </Tooltip>
          <Tooltip title="Twitter" placement="top" disableInteractive TransitionComponent={Zoom} arrow>
            <Link href="https://www.twitter.com">
              <FontAwesomeIcon icon={faTwitter} size="xl" className="transition duration-300 ease-in hover:text-teal-300 hover:scale-125" />
            </Link>
          </Tooltip>
          <Tooltip title="Instagram" placement="top" disableInteractive TransitionComponent={Zoom} arrow>
            <Link href="https://www.instagram.com">
              <FontAwesomeIcon icon={faInstagram} size="xl" className="transition duration-300 ease-in hover:text-teal-300 hover:scale-125" />
            </Link>
          </Tooltip>
          <Tooltip title="LinkedIn" placement="top" disableInteractive TransitionComponent={Zoom} arrow>
            <Link href="https://www.LinkedIn.com">
              <FontAwesomeIcon icon={faLinkedin} size="xl" className="transition duration-300 ease-in hover:text-teal-300 hover:scale-125" />
            </Link>
          </Tooltip>
        </div>
      </aside>

      {/* Mobile Drawer */}

      <div className={`${isMobileDrawerOpen ? "translate-y-0 top-0" : " -translate-y-full -top-full"} fixed  right-0 bg-slate-900 text-gray-100 h-fit w-full transition-transform duration-250 ease-in-out z-40`}>
        <ul className="pt-16 text-center ">
          <Link href="#home" onClick={closeMobileDrawer}>
            <li className="px-10 py-5 text-xl font-normal transition-all duration-300 ease-in hover:bg-teal-300 hover:text-slate-900 ">Home</li>
          </Link>
          <Link href="#about" onClick={closeMobileDrawer}>
            <li className="px-10 py-5 text-xl font-normal transition-all duration-300 ease-in hover:bg-teal-300 hover:text-slate-900 ">About</li>
          </Link>
          <Link href="#work" onClick={closeMobileDrawer}>
            <li className="px-10 py-5 text-xl font-normal transition-all duration-300 ease-in hover:bg-teal-300 hover:text-slate-900 ">Work</li>
          </Link>
          <Link href="#contact" onClick={closeMobileDrawer}>
            <li className="px-10 py-5 text-xl font-normal transition-all duration-300 ease-in hover:bg-teal-300 hover:text-slate-900 ">Contact</li>
          </Link>
          {/* Add more links as needed */}
        </ul>
        <div className="flex px-2 py-3 justify-evenly">
          <Tooltip title="GitHub" placement="top" disableInteractive TransitionComponent={Zoom} arrow>
            <Link href="https://www.jackscottow.github.com">
              <FontAwesomeIcon icon={faGithub} size="xl" className="transition duration-300 ease-in hover:text-gray-500 hover:scale-125" />
            </Link>
          </Tooltip>
          <Tooltip title="Twitter" placement="top" disableInteractive TransitionComponent={Zoom} arrow>
            <Link href="https://www.twitter.com">
              <FontAwesomeIcon icon={faTwitter} size="xl" className="transition duration-300 ease-in hover:text-gray-500 hover:scale-125" />
            </Link>
          </Tooltip>
          <Tooltip title="Instagram" placement="top" disableInteractive TransitionComponent={Zoom} arrow>
            <Link href="https://www.instagram.com">
              <FontAwesomeIcon icon={faInstagram} size="xl" className="transition duration-300 ease-in hover:text-gray-500 hover:scale-125" />
            </Link>
          </Tooltip>
          <Tooltip title="LinkedIn" placement="top" disableInteractive TransitionComponent={Zoom} arrow>
            <Link href="https://www.LinkedIn.com">
              <FontAwesomeIcon icon={faLinkedin} size="xl" className="transition duration-300 ease-in hover:text-gray-500 hover:scale-125" />
            </Link>
          </Tooltip>
        </div>
      </div>

      {/* Mobile Toggle Button */}
      <div className="fixed top-0 right-0 w-full p-2 md:hidden z-50">
        <div></div>
        <button className="fixed top-0 right-0 p-5 text-white focus:outline-none" onClick={toggleMobileDrawer}>
          {isMobileDrawerOpen ? <FontAwesomeIcon icon={faXmark} size="xl" /> : <FontAwesomeIcon icon={faBars} size="xl" />}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
