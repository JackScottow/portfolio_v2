import React, { useState, useEffect } from "react";
import { faAddressCard, faBars, faHouseChimney, faLaptopCode, faQuestion, faScroll, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@nextui-org/react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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

  // Animation variants
  const sidebarVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: -20, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const socialLinkVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const mobileDrawerVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.25,
        ease: "easeOut",
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const mobileNavItemVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const mobileButtonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, backgroundColor: "#5eead4", color: "#0f172a" },
    tap: { scale: 0.95 },
  };

  return (
    <div className="flex flex-col">
      {/* Desktop Sidebar */}
      <motion.aside className="sticky top-0 flex-col justify-between flex-shrink-0 hidden h-screen text-gray-300 border-r w-56 bg-slate-900/95 backdrop-blur-sm md:flex border-r-teal-300 shadow-xl" initial="hidden" animate="visible" variants={sidebarVariants}>
        {/* Logo/Brand Area */}
        <motion.div className="p-4 border-b border-slate-800" variants={navItemVariants}>
          <h1 className="text-xl font-bold text-teal-300">Jack Scottow</h1>
          <p className="text-xs text-gray-400 mt-1">Full Stack Developer</p>
        </motion.div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {navItems.map((item) => (
              <motion.li key={item.id} variants={navItemVariants} whileHover={{ x: 5 }}>
                <Link
                  href={item.href}
                  target={item.isExternal ? "_blank" : undefined}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 group
                    ${activeSection === item.id ? "bg-teal-300/20 text-teal-300 font-medium" : "hover:bg-slate-800 text-gray-300"}`}>
                  <motion.div
                    className={`w-8 h-8 flex items-center justify-center rounded-lg 
                    ${activeSection === item.id ? "bg-teal-300 text-slate-900" : " text-gray-300 group-hover:bg-slate-700"} 
                    transition-all duration-300`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}>
                    <FontAwesomeIcon icon={item.icon} className="text-sm" />
                  </motion.div>
                  <span className="text-base">{item.label}</span>
                  {activeSection === item.id && (
                    <motion.span
                      className="ml-auto w-1 h-5 bg-teal-300 rounded-full"
                      layoutId="activeIndicator"
                      transition={{
                        type: "tween",
                        duration: 0.2,
                        ease: "easeOut",
                      }}></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <motion.div className="p-4 border-t border-slate-800" variants={navItemVariants}>
          <div className="flex items-center justify-between">
            {socialLinks.map((link, index) => (
              <Tooltip key={index} content={<p className="text-xs rounded-md bg-slate-900">{link.label}</p>} delay={0} closeDelay={0} placement="top">
                <motion.div variants={socialLinkVariants} whileHover={{ scale: 1.2, backgroundColor: "#5eead4", color: "#0f172a" }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={link.href}
                    target="_blank"
                    className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-300 
                      transition-all duration-300 hover:bg-teal-300 hover:text-slate-900 hover:scale-105">
                    <FontAwesomeIcon icon={link.icon} className="text-sm" />
                  </Link>
                </motion.div>
              </Tooltip>
            ))}
          </div>
        </motion.div>
      </motion.aside>

      {/* Mobile Drawer */}
      <AnimatePresence mode="wait">
        {isMobileDrawerOpen && (
          <motion.div className="fixed inset-0 bg-slate-900/95 backdrop-blur-md z-40 md:hidden" initial="hidden" animate="visible" exit="exit" variants={mobileDrawerVariants}>
            <div className="flex flex-col h-full w-full">
              {/* Header with logo and close button */}
              <motion.div className="flex items-center justify-between p-4 border-b border-slate-800" variants={mobileNavItemVariants} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.1 } }}>
                <div>
                  <h1 className="text-xl font-bold text-teal-300">Jack Scottow</h1>
                  <p className="text-xs text-gray-400">Full Stack Developer</p>
                </div>
                <motion.button
                  onClick={closeMobileDrawer}
                  className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-300 
                    hover:bg-teal-300 hover:text-slate-900 transition-all duration-200"
                  aria-label="Close menu"
                  whileHover={{ scale: 1.1, backgroundColor: "#5eead4", color: "#0f172a" }}
                  whileTap={{ scale: 0.95 }}>
                  <FontAwesomeIcon icon={faXmark} size="lg" />
                </motion.button>
              </motion.div>

              {/* Navigation Links */}
              <nav className="flex-1 flex flex-col justify-center overflow-y-auto py-6">
                <motion.ul
                  className="space-y-2 px-4"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.2 },
                  }}>
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, y: -15, scale: 0.9 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                          delay: index * 0.05,
                          duration: 0.3,
                        },
                      }}
                      whileHover={{ x: 5 }}>
                      <Link
                        href={item.href}
                        target={item.isExternal ? "_blank" : undefined}
                        onClick={closeMobileDrawer}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300
                          ${activeSection === item.id ? "bg-teal-300/10 text-teal-300" : "hover:bg-slate-800 text-gray-300"}`}>
                        <motion.div
                          className={`w-9 h-9 flex items-center justify-center rounded-lg
                          ${activeSection === item.id ? "bg-teal-300 text-slate-900" : " text-gray-300"} 
                          transition-all duration-300`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}>
                          <FontAwesomeIcon icon={item.icon} className="text-base" />
                        </motion.div>
                        <span className="text-base font-normal">{item.label}</span>
                        {activeSection === item.id && (
                          <motion.span
                            className="ml-auto w-1 h-5 bg-teal-300 rounded-full"
                            layoutId="mobileActiveIndicator"
                            transition={{
                              type: "tween",
                              duration: 0.2,
                              ease: "easeOut",
                            }}></motion.span>
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>

              {/* Social Links */}
              <motion.div className="p-4 border-t border-slate-800" variants={mobileNavItemVariants}>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                          delay: index * 0.1 + 0.2,
                          duration: 0.3,
                        },
                      }}
                      whileHover={{ scale: 1.2, backgroundColor: "#5eead4", color: "#0f172a" }}
                      whileTap={{ scale: 0.95 }}>
                      <Link
                        href={link.href}
                        target="_blank"
                        className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-300 
                          transition-all duration-300 hover:bg-teal-300 hover:text-slate-900">
                        <FontAwesomeIcon icon={link.icon} className="text-base" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Toggle Button */}
      <div className={`fixed top-0 right-0 z-50 md:hidden ${isMobileDrawerOpen ? "pointer-events-none" : "pointer-events-auto"}`}>
        <motion.button
          className="m-4 w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800/90 backdrop-blur-sm 
            text-gray-300 hover:bg-teal-300 hover:text-slate-900 transition-all duration-200 shadow-lg"
          onClick={toggleMobileDrawer}
          aria-label="Open menu"
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          variants={mobileButtonVariants}
          animate={{
            opacity: isMobileDrawerOpen ? 0 : 1,
            scale: isMobileDrawerOpen ? 0.8 : 1,
            transition: { duration: 0.2 },
          }}>
          <FontAwesomeIcon icon={faBars} className="text-base" />
        </motion.button>
      </div>
    </div>
  );
};

export default Sidebar;
