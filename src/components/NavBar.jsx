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
        {/* Add your sidebar navigation links here */}
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

          {/* Add more links as needed */}
        </ul>
        <div className="flex flex-col py-10 mx-auto align-bottom">
          <Tooltip content={<p className="text-sm rounded-md bg-slate-900">GitHub</p>} delay={0} closeDelay={0} placement="right" containerPadding={0} offset={0}>
            <Link href="https://github.com/JackScottow" target="_blank" alt="github">
              <FontAwesomeIcon icon={faGithub} size="2xl" className="py-2 transition duration-200 hover:text-teal-300 hover:scale-125" />
            </Link>
          </Tooltip>
          <Tooltip content={<p className="text-sm rounded-md bg-slate-900">Twitter</p>} delay={0} closeDelay={0} placement="right" containerPadding={0} offset={0}>
            <Link href="https://twitter.com/jms__1991" target="_blank" alt="twitter">
              <FontAwesomeIcon icon={faTwitter} size="2xl" className="py-2 transition duration-200 hover:text-teal-300 hover:scale-125" />
            </Link>
          </Tooltip>
          <Tooltip content={<p className="text-sm rounded-md bg-slate-900">Instagram</p>} delay={0} closeDelay={0} placement="right" containerPadding={0} offset={0}>
            <Link href="https://www.instagram.com/jackms91" target="_blank" alt="instagram" className="py-2 transition duration-200 hover:text-teal-300 hover:scale-125">
              <FontAwesomeIcon icon={faInstagram} size="2xl" />
            </Link>
          </Tooltip>
          <Tooltip content={<p className="text-sm rounded-md bg-slate-900">LinkedIn</p>} delay={0} closeDelay={0} placement="right" containerPadding={0} offset={0}>
            <Link href="https://www.linkedin.com/in/jack-scottow/" target="_blank" alt="linkedin">
              <FontAwesomeIcon icon={faLinkedin} size="2xl" className="py-2 transition duration-200 hover:text-teal-300 hover:scale-125" />
            </Link>
          </Tooltip>
          <Tooltip content={<p className="text-sm rounded-md bg-slate-900">Email</p>} delay={0} closeDelay={0} placement="right" containerPadding={0} offset={0}>
            <Link href="mailto:j.scottow@gmail.com" target="_blank" alt="email">
              <FontAwesomeIcon icon={faEnvelopeOpen} size="2xl" className="py-2 transition duration-200 hover:text-teal-300 hover:scale-125" />
            </Link>
          </Tooltip>
        </div>
      </aside>

      {/* Mobile Drawer */}

      <div className={`${isMobileDrawerOpen ? "translate-y-0 top-0" : " -translate-y-full -top-full"} fixed  right-0 bg-slate-900 text-gray-100 h-fit w-full transition-transform duration-250 ease-in-out border-b border-teal-300 z-40`}>
        <ul className="pt-16 text-center">
          <Link href="#home" onClick={closeMobileDrawer} alt="home">
            <li className="py-5 text-xl font-medium transition-all duration-300 ease-in border-t-2 border-solid border-t-slate-800 hover:bg-teal-300 hover:text-slate-900">
              <FontAwesomeIcon icon={faHouseChimney} size={"1x"} /> Home
            </li>
          </Link>

          <Link href="#about" onClick={closeMobileDrawer} alt="about">
            <li className="px-10 py-5 text-xl font-medium transition-all duration-300 ease-in border-t-2 border-solid border-t-slate-800 hover:bg-teal-300 hover:text-slate-900 ">
              <FontAwesomeIcon icon={faQuestion} size={"1x"} /> About
            </li>
          </Link>

          <Link href="#work" onClick={closeMobileDrawer} alt="work">
            <li className="px-10 py-5 text-xl font-medium transition-all duration-300 ease-in border-t-2 border-solid border-t-slate-800 hover:bg-teal-300 hover:text-slate-900">
              <FontAwesomeIcon icon={faLaptopCode} size={"1x"} /> Work
            </li>
          </Link>

          <Link href="#contact" onClick={closeMobileDrawer} alt="contact">
            <li className="px-10 py-5 text-xl font-medium transition-all duration-300 ease-in border-t-2 border-solid border-t-slate-800 hover:bg-teal-300 hover:text-slate-900 ">
              <FontAwesomeIcon icon={faAddressCard} size={"1x"} /> Contact
            </li>
          </Link>

          <Link href="../jackscottow_cv.pdf" target="_blank" alt="CV" onClick={closeMobileDrawer}>
            <li className="px-10 py-5 text-xl font-medium transition-all duration-300 ease-in border-solid border-y-2 border-y-slate-800 hover:bg-teal-300 hover:text-slate-900 ">
              <FontAwesomeIcon icon={faScroll} size={"1x"} /> CV
            </li>
          </Link>

          {/* Add more links as needed */}
        </ul>
        <div className="flex px-2 py-6 justify-evenly">
          <Link href="https://github.com/JackScottow" target="_blank" alt="github">
            <FontAwesomeIcon icon={faGithub} size="xl" className="transition duration-300 ease-in hover:text-gray-500 hover:scale-125" />
          </Link>

          <Link href="https://twitter.com/jms__1991" target="_blank" alt="twitter">
            <FontAwesomeIcon icon={faTwitter} size="xl" className="transition duration-300 ease-in hover:text-gray-500 hover:scale-125" />
          </Link>

          <Link href="https://www.instagram.com/jackms91" target="_blank" alt="instagram">
            <FontAwesomeIcon icon={faInstagram} size="xl" className="transition duration-300 ease-in hover:text-gray-500 hover:scale-125" />
          </Link>

          <Link href="https://www.linkedin.com/in/jack-scottow/" target="_blank" alt="linkedin">
            <FontAwesomeIcon icon={faLinkedin} size="xl" className="transition duration-300 ease-in hover:text-gray-500 hover:scale-125" />
          </Link>

          <Link href="mailto:j.scottow@gmail.com" target="_blank" alt="email">
            <FontAwesomeIcon icon={faEnvelopeOpen} size="xl" className="transition duration-300 ease-in hover:text-gray-500 hover:scale-125" />
          </Link>
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
