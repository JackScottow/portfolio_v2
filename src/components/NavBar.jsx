import React, { useState } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
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
      <aside className="sticky top-0 flex-col justify-between flex-shrink-0 hidden w-64 h-screen text-gray-300 border-r bg-slate-900 md:flex border-r-teal-300">
        {/* Sidebar content */}
        {/* Add your sidebar navigation links here */}
        <ul className="hidden text-center md:block">
          <Link href="#home" alt="home">
            <li className="px-10 py-5 text-xl font-normal transition-all duration-300 ease-in-out border-t-2 border-solid border-t-slate-800 hover:bg-teal-300 hover:text-slate-900 ">Home</li>
          </Link>

          <Link href="#about" alt="twitter">
            <li className="px-10 py-5 text-xl font-normal transition-all duration-300 ease-in border-t-2 border-solid border-t-slate-800 hover:bg-teal-300 hover:text-slate-900 ">About</li>
          </Link>

          <Link href="#work" alt="work">
            <li className="px-10 py-5 text-xl font-normal transition-all duration-300 ease-in border-t-2 border-solid border-t-slate-800 hover:bg-teal-300 hover:text-slate-900">Work</li>
          </Link>

          <Link href="#contact" alt="contact">
            <li className="px-10 py-5 text-xl font-normal transition-all duration-300 ease-in border-solid border-y-2 border-y-slate-800 hover:bg-teal-300 hover:text-slate-900 ">Contact</li>
          </Link>

          {/* Add more links as needed */}
        </ul>
        <div className="flex px-2 py-3 justify-evenly">
          <Tooltip title="GitHub" placement="top" disableInteractive TransitionComponent={Zoom} arrow enterTouchDelay={0}>
            <Link href="https://github.com/JackScottow" target="_blank" alt="github">
              <FontAwesomeIcon icon={faGithub} size="xl" className="transition duration-300 ease-in hover:text-teal-300 hover:scale-125" />
            </Link>
          </Tooltip>
          <Tooltip title="Twitter" placement="top" disableInteractive TransitionComponent={Zoom} arrow enterTouchDelay={0}>
            <Link href="https://twitter.com/jms__1991" target="_blank" alt="twitter">
              <FontAwesomeIcon icon={faTwitter} size="xl" className="transition duration-300 ease-in hover:text-teal-300 hover:scale-125" />
            </Link>
          </Tooltip>
          <Tooltip title="Instagram" placement="top" disableInteractive TransitionComponent={Zoom} arrow enterTouchDelay={0}>
            <Link href="https://www.instagram.com/jackms91" target="_blank" alt="instagram">
              <FontAwesomeIcon icon={faInstagram} size="xl" className="transition duration-300 ease-in hover:text-teal-300 hover:scale-125" />
            </Link>
          </Tooltip>
          <Tooltip title="LinkedIn" placement="top" disableInteractive TransitionComponent={Zoom} arrow enterTouchDelay={0}>
            <Link href="https://www.linkedin.com/in/jack-scottow/" target="_blank" alt="linkedin">
              <FontAwesomeIcon icon={faLinkedin} size="xl" className="transition duration-300 ease-in hover:text-teal-300 hover:scale-125" />
            </Link>
          </Tooltip>
          <Tooltip title="j.scottow@gmail.com" placement="top" disableInteractive TransitionComponent={Zoom} arrow enterTouchDelay={0}>
            <Link href="mailto:j.scottow@gmail.com" target="_blank" alt="email">
              <FontAwesomeIcon icon={faEnvelopeOpen} size="xl" className="transition duration-300 ease-in hover:text-teal-300 hover:scale-125" />
            </Link>
          </Tooltip>
        </div>
      </aside>

      {/* Mobile Drawer */}

      <div className={`${isMobileDrawerOpen ? "translate-y-0 top-0" : " -translate-y-full -top-full"} fixed  right-0 bg-slate-900 text-gray-100 h-fit w-full transition-transform duration-250 ease-in-out border-b border-teal-300 z-40`}>
        <ul className="pt-16 text-center ">
          <Link href="#home" onClick={closeMobileDrawer} alt="home">
            <li className="px-10 py-5 text-xl font-normal transition-all duration-300 ease-in border-t-2 border-solid border-t-slate-800 hover:bg-teal-300 hover:text-slate-900 ">Home</li>
          </Link>

          <Link href="#about" onClick={closeMobileDrawer} alt="about">
            <li className="px-10 py-5 text-xl font-normal transition-all duration-300 ease-in border-t-2 border-solid border-t-slate-800 hover:bg-teal-300 hover:text-slate-900 ">About</li>
          </Link>

          <Link href="#work" onClick={closeMobileDrawer} alt="work">
            <li className="px-10 py-5 text-xl font-normal transition-all duration-300 ease-in border-t-2 border-solid border-t-slate-800 hover:bg-teal-300 hover:text-slate-900">Work</li>
          </Link>

          <Link href="#contact" onClick={closeMobileDrawer} alt="contact">
            <li className="px-10 py-5 text-xl font-normal transition-all duration-300 ease-in border-solid border-y-2 border-y-slate-800 hover:bg-teal-300 hover:text-slate-900 ">Contact</li>
          </Link>

          {/* Add more links as needed */}
        </ul>
        <div className="flex px-2 py-6 justify-evenly">
          <Tooltip title="GitHub" placement="top" disableInteractive TransitionComponent={Zoom} arrow enterTouchDelay={0}>
            <Link href="https://github.com/JackScottow" target="_blank" alt="github">
              <FontAwesomeIcon icon={faGithub} size="xl" className="transition duration-300 ease-in hover:text-gray-500 hover:scale-125" />
            </Link>
          </Tooltip>
          <Tooltip title="Twitter" placement="top" disableInteractive TransitionComponent={Zoom} arrow enterTouchDelay={0} alt="twitter">
            <Link href="https://twitter.com/jms__1991" target="_blank" alt="twitter">
              <FontAwesomeIcon icon={faTwitter} size="xl" className="transition duration-300 ease-in hover:text-gray-500 hover:scale-125" />
            </Link>
          </Tooltip>
          <Tooltip title="Instagram" placement="top" disableInteractive TransitionComponent={Zoom} arrow enterTouchDelay={0}>
            <Link href="https://www.instagram.com/jackms91" target="_blank" alt="instagram">
              <FontAwesomeIcon icon={faInstagram} size="xl" className="transition duration-300 ease-in hover:text-gray-500 hover:scale-125" />
            </Link>
          </Tooltip>
          <Tooltip title="LinkedIn" placement="top" disableInteractive TransitionComponent={Zoom} arrow enterTouchDelay={0}>
            <Link href="https://www.linkedin.com/in/jack-scottow/" target="_blank" alt="linkedin">
              <FontAwesomeIcon icon={faLinkedin} size="xl" className="transition duration-300 ease-in hover:text-gray-500 hover:scale-125" />
            </Link>
          </Tooltip>
          <Tooltip title="j.scottow@gmail.com" placement="top" disableInteractive TransitionComponent={Zoom} arrow enterTouchDelay={0}>
            <Link href="mailto:j.scottow@gmail.com" target="_blank" alt="email">
              <FontAwesomeIcon icon={faEnvelopeOpen} size="xl" className="transition duration-300 ease-in hover:text-gray-500 hover:scale-125" />
            </Link>
          </Tooltip>
        </div>
      </div>

      {/* Mobile Toggle Button */}
      <div className="fixed top-0 right-0 z-50 w-full md:hidden">
        <div></div>
        <button className="fixed top-0 right-0 p-5 rounded-xl focus:outline-none" onClick={toggleMobileDrawer}>
          {isMobileDrawerOpen ? <FontAwesomeIcon icon={faXmark} size="xl" className="text-gray-300" /> : <FontAwesomeIcon icon={faBars} size="xl" className="text-gray-300" />}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
