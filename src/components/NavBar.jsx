import React, { useState, useEffect } from "react";
import { faAddressCard, faBars, faHouseChimney, faLaptopCode, faQuestion, faScroll, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@nextui-org/react";
import Link from "next/link";

const Sidebar = () => {
  const [isMobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Prevent body scrolling when mobile drawer is open
  useEffect(() => {
    if (isMobileDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileDrawerOpen]);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "work", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileDrawer = () => {
    setMobileDrawerOpen((prevState) => !prevState);
  };

  const closeMobileDrawer = () => {
    setMobileDrawerOpen(false);
  };

  const navItems = [
    { href: "#home", icon: faHouseChimney, label: "Home", id: "home" },
    { href: "#about", icon: faQuestion, label: "About", id: "about" },
    { href: "#work", icon: faLaptopCode, label: "Work", id: "work" },
    { href: "#contact", icon: faAddressCard, label: "Contact", id: "contact" },
    { href: "../jackscottow_cv.pdf", icon: faScroll, label: "CV", id: "cv", isExternal: true },
  ];

  const socialLinks = [
    { href: "https://github.com/JackScottow", icon: faGithub, label: "GitHub" },
    { href: "https://www.linkedin.com/in/jack-scottow/", icon: faLinkedin, label: "LinkedIn" },
    { href: "mailto:j.scottow@gmail.com", icon: faEnvelopeOpen, label: "Email" },
  ];

  return (
    <div className="flex flex-col">
      {/* Desktop Sidebar */}
      <aside className="sticky top-0 flex-col justify-between flex-shrink-0 hidden h-screen text-gray-300 border-r w-56 bg-slate-900/95 backdrop-blur-sm md:flex border-r-teal-300 shadow-xl">
        {/* Logo/Brand Area */}
        <div className="p-4 border-b border-slate-800">
          <h1 className="text-xl font-bold text-teal-300">Jack Scottow</h1>
          <p className="text-xs text-gray-400 mt-1">Full Stack Developer</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  target={item.isExternal ? "_blank" : undefined}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 group
                    ${activeSection === item.id ? "bg-teal-300/20 text-teal-300 font-medium" : "hover:bg-slate-800 text-gray-300"}`}>
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-lg 
                    ${activeSection === item.id ? "bg-teal-300 text-slate-900" : " text-gray-300 group-hover:bg-slate-700"} 
                    transition-all duration-300`}>
                    <FontAwesomeIcon icon={item.icon} className="text-sm" />
                  </div>
                  <span className="text-base">{item.label}</span>
                  {activeSection === item.id && <span className="ml-auto w-1 h-5 bg-teal-300 rounded-full"></span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center justify-between">
            {socialLinks.map((link, index) => (
              <Tooltip key={index} content={<p className="text-xs rounded-md bg-slate-900">{link.label}</p>} delay={0} closeDelay={0} placement="top">
                <Link
                  href={link.href}
                  target="_blank"
                  className="w-9 h-9 flex items-center justify-center rounded-lg  text-gray-300 
                    transition-all duration-300 hover:bg-teal-300 hover:text-slate-900 hover:scale-105">
                  <FontAwesomeIcon icon={link.icon} className="text-sm" />
                </Link>
              </Tooltip>
            ))}
          </div>
        </div>
      </aside>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-slate-900/95 backdrop-blur-md z-40 md:hidden transition-all duration-300 ease-in-out 
        ${isMobileDrawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div
          className={`flex flex-col h-full w-full transition-transform duration-300 ease-in-out 
          ${isMobileDrawerOpen ? "translate-y-0" : "-translate-y-8"}`}>
          {/* Header with logo and close button */}
          <div className="flex items-center justify-between p-4 border-b border-slate-800">
            <div>
              <h1 className="text-xl font-bold text-teal-300">Jack Scottow</h1>
              <p className="text-xs text-gray-400">Full Stack Developer</p>
            </div>
            <button
              onClick={closeMobileDrawer}
              className="w-10 h-10 flex items-center justify-center rounded-lg  text-gray-300 
                hover:bg-teal-300 hover:text-slate-900 transition-all duration-200"
              aria-label="Close menu">
              <FontAwesomeIcon icon={faXmark} size="lg" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col justify-center overflow-y-auto py-6">
            <ul className="space-y-2 px-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    onClick={closeMobileDrawer}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300
                      ${activeSection === item.id ? "bg-teal-300/10 text-teal-300" : "hover:bg-slate-800 text-gray-300"}`}>
                    <div
                      className={`w-9 h-9 flex items-center justify-center rounded-lg
                      ${activeSection === item.id ? "bg-teal-300 text-slate-900" : " text-gray-300"} 
                      transition-all duration-300`}>
                      <FontAwesomeIcon icon={item.icon} className="text-base" />
                    </div>
                    <span className="text-base font-normal">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="p-4 border-t border-slate-800">
            <div className="flex justify-center gap-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-lg  text-gray-300 
                    transition-all duration-300 hover:bg-teal-300 hover:text-slate-900">
                  <FontAwesomeIcon icon={link.icon} className="text-base" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Toggle Button */}
      <div
        className={`fixed top-0 right-0 z-50 md:hidden transition-opacity duration-300 
        ${isMobileDrawerOpen ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}`}>
        <button
          className="m-4 w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800/90 backdrop-blur-sm 
            text-gray-300 hover:bg-teal-300 hover:text-slate-900 transition-all duration-200 shadow-lg"
          onClick={toggleMobileDrawer}
          aria-label="Open menu">
          <FontAwesomeIcon icon={faBars} className="text-base" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
