import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare, faTimes, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { projects } from "../data/projects";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);
  // Add your GitHub profile URL here
  const githubProfileUrl = "https://github.com/JackScottow/";

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scrolling when modal is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  // Close modal with escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [selectedProject]);

  const openProject = (project) => {
    setSelectedProject(project);
  };

  return (
    <section id="work" className="min-h-screen flex items-center px-4 py-10 sm:px-12 md:px-16 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.h2 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.2 }} viewport={{ once: true }} className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="text-teal-300">My Work</span>
        </motion.h2>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="h-full">
              <div onClick={() => openProject(project)} className="cursor-pointer bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden h-full">
                {/* Card Content */}
                <div className="flex flex-col h-full">
                  <div className="relative  overflow-hidden border-b border-gray-200 dark:border-gray-700">
                    <img className="h-full w-full object-cover transition-transform duration-500 hover:scale-110" src={project.imageUrl} alt={project.name} />
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300" />
                  </div>
                  <div className="flex flex-col flex-grow p-6">
                    <h3 className="mb-2 text-xl md:text-start text-center font-semibold text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors">{project.name}</h3>
                    <p className="hidden sm:block mb-2.5 text-sm font-medium text-teal-600 dark:text-teal-400">{project.tech}</p>
                    <p className="hidden sm:block mb-4 text-gray-600 dark:text-gray-300 line-clamp-3 text-sm md:text-base">{project.description}</p>
                    <div className="hidden sm:flex justify-center gap-3 md:gap-4 mt-auto">
                      {project.githubUrl === "closed" ? (
                        <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-gray-800 text-white rounded-lg cursor-not-allowed dark:bg-gray-700 text-xs md:text-sm w-36 md:w-40" onClick={(e) => e.stopPropagation()}>
                          <FontAwesomeIcon icon={faGithub} />
                          Closed Source
                        </div>
                      ) : (
                        <Link href={project.githubUrl} target="_blank" className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors dark:bg-gray-700 dark:hover:bg-gray-600 text-xs md:text-sm w-36 md:w-40" onClick={(e) => e.stopPropagation()}>
                          <FontAwesomeIcon icon={faGithub} />
                          View Source
                        </Link>
                      )}
                      <Link href={project.liveUrl} target="_blank" className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors dark:bg-teal-500 dark:hover:bg-teal-600 text-xs md:text-sm w-32 md:w-36" onClick={(e) => e.stopPropagation()}>
                        <FontAwesomeIcon icon={faUpRightFromSquare} />
                        Live Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* View More Projects Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: projects.length * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="h-full">
            <Link href={githubProfileUrl} target="_blank" className="block h-full">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden h-full group">
                <div className="flex flex-col h-full">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center">
                    <FontAwesomeIcon icon={faGithub} className="h-20 w-20 text-white opacity-75 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  </div>
                  <div className="flex flex-col flex-grow p-6 items-center justify-center text-center">
                    <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">View More Projects</h3>
                    <p className="mb-6 text-gray-600 dark:text-gray-300 text-sm md:text-base">Explore the rest of my work on GitHub</p>
                    <div className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-teal-600 text-white rounded-lg group-hover:bg-teal-700 transition-colors dark:bg-teal-500 dark:group-hover:bg-teal-600 text-base font-medium mt-auto">
                      <span>Visit GitHub</span>
                      <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Project Modal - Enhanced horizontal layout */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          {/* Close button */}
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center rounded-full 
              text-white transition-colors transform active:scale-90 bg-gray-800/80 hover:bg-gray-700">
            <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.25 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 300,
            }}
            ref={modalRef}
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 shadow-2xl max-w-4xl md:max-w-[90vw] w-full h-auto flex flex-col md:flex-row max-h-[95vh]">
            {/* Top/Left - Screenshot */}
            <div className="w-full md:flex-[2] overflow-hidden rounded-t-xl md:rounded-r-none md:rounded-xl border-b-2 md:border-r-2 md:border-b-0 border-gray-200  bg-gray-900 flex items-center justify-center">
              <img src={selectedProject.imageUrl} alt={selectedProject.name} className="max-w-full max-h-full object-contain" />
            </div>

            {/* Bottom/Right - Info Panel */}
            <div className="w-full md:flex-[1] flex flex-col rounded-b-xl md:rounded-b-none md:rounded-r-xl bg-white dark:bg-gray-800">
              {/* Header */}
              <div className="p-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">{selectedProject.name}</h2>
                <p className="text-base lg:text-lg font-medium text-teal-600 dark:text-teal-400">{selectedProject.tech}</p>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 overflow-y-auto">
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">{selectedProject.description}</p>
                  {selectedProject.longDescription && <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">{selectedProject.longDescription}</p>}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 space-y-3 border-t border-gray-200 dark:border-gray-700">
                {selectedProject.githubUrl === "closed" ? (
                  <div className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 text-white rounded-lg cursor-not-allowed dark:bg-gray-700 text-sm font-medium">
                    <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
                    Closed Source
                  </div>
                ) : (
                  <Link href={selectedProject.githubUrl} target="_blank" className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors dark:bg-gray-700 dark:hover:bg-gray-600 text-sm font-medium">
                    <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
                    View Source Code
                  </Link>
                )}
                <Link href={selectedProject.liveUrl} target="_blank" className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors dark:bg-teal-500 dark:hover:bg-teal-600 text-sm font-medium">
                  <FontAwesomeIcon icon={faUpRightFromSquare} className="w-4 h-4" />
                  View Live Demo
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Work;
