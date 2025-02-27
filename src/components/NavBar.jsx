import React, { useState } from "react";
import { faAddressCard, faBars, faHouseChimney, faLaptopCode, faQuestion, faScroll, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@nextui-org/react";

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
      <aside className="sticky top-0 flex-col justify-between flex-shrink-0 hidden h-screen text-gray-300 border-r w-52 bg-slate-900 md:flex border-r-teal-300">
        {/* Sidebar content */}
        <ul className="hidden md:block">
          <Link href="#home" alt="home">
            <li className="grid grid-cols-2 py-5 text-xl font-medium transition-all duration-300 ease-in-out border-t-2 border-solid border-t-slate-800 hover:bg-teal-300 hover:text-slate-900 ">
              <FontAwesomeIcon icon={faHouseChimney} size={"1x"} className="m-auto" />
              <p> Home</p>
            </li>
          </Link>

          <Link href="#about" alt="twitter">
            <li className="grid grid-cols-2 py-5 text-xl font-medium transition-all duration-300 ease-in-out border-t-2 border-solid border-t-slate-800 hover:bg-teal-300 hover:text-slate-900 ">
              <FontAwesomeIcon icon={faQuestion} size={"1x"} className="m-auto" /> <p>About</p>
            </li>
          </Link>

          <Link href="#work" alt="work">
            <li className="grid grid-cols-2 py-5 text-xl font-medium transition-all duration-300 ease-in-out border-t-2 border-solid border-t-slate-800 hover:bg-teal-300 hover:text-slate-900 ">
              <FontAwesomeIcon icon={faLaptopCode} size={"1x"} className="m-auto" /> Work
            </li>
          </Link>

          <Link href="#contact" alt="contact">
            <li className="grid grid-cols-2 py-5 text-xl font-medium transition-all duration-300 ease-in-out border-t-2 border-solid border-t-slate-800 hover:bg-teal-300 hover:text-slate-900 ">
              <FontAwesomeIcon icon={faAddressCard} size={"1x"} className="m-auto" /> Contact
            </li>
          </Link>

          <Link href="../jackscottow_cv.pdf" alt="CV" target="_blank">
            <li className="grid grid-cols-2 py-5 text-xl font-medium transition-all duration-300 ease-in-out border-solid border-y-2 border-y-slate-800 hover:bg-teal-300 hover:text-slate-900 ">
              <FontAwesomeIcon icon={faScroll} size={"1x"} className="m-auto" /> CV
            </li>
          </Link>
        </ul>
        <div className="flex flex-col items-center py-10">
          <Tooltip content={<p className="text-sm rounded-md bg-slate-900">GitHub</p>} delay={0} closeDelay={0} placement="right" containerPadding={0} offset={0}>
            <Link href="https://github.com/JackScottow" target="_blank" alt="github" className="py-2 w-fit transition duration-200 hover:text-teal-300 hover:scale-110">
              <FontAwesomeIcon icon={faGithub} size="2xl" />
            </Link>
          </Tooltip>
          <Tooltip content={<p className="text-sm rounded-md bg-slate-900">LinkedIn</p>} delay={0} closeDelay={0} placement="right" containerPadding={0} offset={0}>
            <Link href="https://www.linkedin.com/in/jack-scottow/" target="_blank" alt="linkedin" className="py-2 w-fit transition duration-200 hover:text-teal-300 hover:scale-110">
              <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            </Link>
          </Tooltip>
          <Tooltip content={<p className="text-sm rounded-md bg-slate-900">Email</p>} delay={0} closeDelay={0} placement="right" containerPadding={0} offset={0}>
            <Link href="mailto:j.scottow@gmail.com" target="_blank" alt="email" className="py-2 w-fit transition duration-200 hover:text-teal-300 hover:scale-110">
              <FontAwesomeIcon icon={faEnvelopeOpen} size="2xl" />
            </Link>
          </Tooltip>
        </div>
      </aside>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 bg-slate-900/95 backdrop-blur-sm z-40 md:hidden transition-all duration-300 ease-in-out ${isMobileDrawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className={`flex flex-col h-full w-full transition-transform duration-300 ease-in-out ${isMobileDrawerOpen ? "translate-y-0" : "-translate-y-8"}`}>
          {/* Close button */}
          <div className="flex justify-end p-6">
            <button onClick={closeMobileDrawer} className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 text-gray-300 hover:bg-teal-300 hover:text-slate-900 transition-all duration-200" aria-label="Close menu">
              <FontAwesomeIcon icon={faXmark} size="lg" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col justify-center">
            <ul className="space-y-2 px-8">
              <li>
                <Link href="#home" onClick={closeMobileDrawer} className="flex items-center gap-4 p-4 text-xl font-medium rounded-lg transition-all duration-200 hover:bg-teal-300 hover:text-slate-900">
                  <FontAwesomeIcon icon={faHouseChimney} className="w-6" />
                  <span>Home</span>
                </Link>
              </li>

              <li>
                <Link href="#about" onClick={closeMobileDrawer} className="flex items-center gap-4 p-4 text-xl font-medium rounded-lg transition-all duration-200 hover:bg-teal-300 hover:text-slate-900">
                  <FontAwesomeIcon icon={faQuestion} className="w-6" />
                  <span>About</span>
                </Link>
              </li>

              <li>
                <Link href="#work" onClick={closeMobileDrawer} className="flex items-center gap-4 p-4 text-xl font-medium rounded-lg transition-all duration-200 hover:bg-teal-300 hover:text-slate-900">
                  <FontAwesomeIcon icon={faLaptopCode} className="w-6" />
                  <span>Work</span>
                </Link>
              </li>

              <li>
                <Link href="#contact" onClick={closeMobileDrawer} className="flex items-center gap-4 p-4 text-xl font-medium rounded-lg transition-all duration-200 hover:bg-teal-300 hover:text-slate-900">
                  <FontAwesomeIcon icon={faAddressCard} className="w-6" />
                  <span>Contact</span>
                </Link>
              </li>

              <li>
                <Link href="../jackscottow_cv.pdf" target="_blank" onClick={closeMobileDrawer} className="flex items-center gap-4 p-4 text-xl font-medium rounded-lg transition-all duration-200 hover:bg-teal-300 hover:text-slate-900">
                  <FontAwesomeIcon icon={faScroll} className="w-6" />
                  <span>CV</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social Links */}
          <div className="p-8">
            <div className="flex justify-center gap-8 py-4 border-t border-slate-800">
              <Link href="https://github.com/JackScottow" target="_blank" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 text-gray-300 transition-all duration-200 hover:bg-teal-300 hover:text-slate-900 hover:scale-110">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </Link>

              <Link href="https://www.linkedin.com/in/jack-scottow/" target="_blank" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 text-gray-300 transition-all duration-200 hover:bg-teal-300 hover:text-slate-900 hover:scale-110">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </Link>

              <Link href="mailto:j.scottow@gmail.com" target="_blank" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 text-gray-300 transition-all duration-200 hover:bg-teal-300 hover:text-slate-900 hover:scale-110">
                <FontAwesomeIcon icon={faEnvelopeOpen} size="lg" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Toggle Button */}
      <div className={`fixed top-0 right-0 z-50 md:hidden transition-opacity duration-300 ${isMobileDrawerOpen ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}`}>
        <button className="m-6 w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 text-gray-300 hover:bg-teal-300 hover:text-slate-900 transition-all duration-200 shadow-lg" onClick={toggleMobileDrawer} aria-label="Open menu">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
