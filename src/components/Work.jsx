import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { projects } from "../data/projects";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

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
    <section id="work" className="min-h-screen flex items-center px-6 py-10 sm:px-28">
      <div className="mx-auto max-w-7xl">
        <motion.h2 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.2 }} viewport={{ once: true }} className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="text-teal-300">My Work</span>
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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
                  <div className="relative aspect-[16/9] overflow-hidden border-b border-gray-200 dark:border-gray-700">
                    <img className="h-full w-full object-cover transition-transform duration-500 hover:scale-110" src={project.imageUrl} alt={project.name} />
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300" />
                  </div>
                  <div className="flex flex-col flex-grow p-6">
                    <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors">{project.name}</h3>
                    <p className="mb-3 text-sm font-medium text-teal-600 dark:text-teal-400">{project.tech}</p>
                    <p className="mb-4 text-gray-600 dark:text-gray-300 line-clamp-3">{project.description}</p>
                    <div className="flex justify-center gap-4 mt-auto">
                      <Link href={project.githubUrl} target="_blank" className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors dark:bg-gray-700 dark:hover:bg-gray-600 text-sm w-36" onClick={(e) => e.stopPropagation()}>
                        <FontAwesomeIcon icon={faGithub} />
                        View Source
                      </Link>
                      <Link href={project.liveUrl} target="_blank" className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors dark:bg-teal-500 dark:hover:bg-teal-600 text-sm w-36" onClick={(e) => e.stopPropagation()}>
                        <FontAwesomeIcon icon={faUpRightFromSquare} />
                        Live Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal - No exit animation */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
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
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-7xl w-full h-auto flex flex-col max-h-[95vh]">
            {/* Top - Image */}
            <div className="w-full overflow-hidden rounded-t-xl bg-gray-900">
              <img src={selectedProject.imageUrl} alt={selectedProject.name} className="w-full object-contain max-h-[50vh] mx-auto" />
            </div>

            {/* Bottom - Content (scrollable) */}
            <div className="flex-1 p-8 md:p-12 overflow-y-auto">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{selectedProject.name}</h2>
                <p className="text-lg md:text-xl font-medium text-teal-600 dark:text-teal-400 mb-6">{selectedProject.tech}</p>

                <div className="prose lg:prose-xl dark:prose-invert max-w-none mb-10">
                  <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl">{selectedProject.description}</p>
                  {selectedProject.longDescription && <p className="text-gray-600 dark:text-gray-300 mt-5 text-lg md:text-xl">{selectedProject.longDescription}</p>}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 mt-6">
                <Link href={selectedProject.githubUrl} target="_blank" className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors dark:bg-gray-700 dark:hover:bg-gray-600 text-base font-medium">
                  <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                  View Source
                </Link>
                <Link href={selectedProject.liveUrl} target="_blank" className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors dark:bg-teal-500 dark:hover:bg-teal-600 text-base font-medium">
                  <FontAwesomeIcon icon={faUpRightFromSquare} className="w-5 h-5" />
                  Live Demo
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
