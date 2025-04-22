import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { projects } from "../data/projects";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedHeight, setExpandedHeight] = useState(0);
  const expandedContentRef = useRef(null);
  const gridRef = useRef(null);
  const scrollPositionRef = useRef(0);

  // Measure the height of expanded content when a project is selected
  useEffect(() => {
    if (selectedProject && expandedContentRef.current) {
      setExpandedHeight(expandedContentRef.current.scrollHeight);
    } else {
      setExpandedHeight(0);
    }
  }, [selectedProject]);

  // Handle scroll position when opening/closing projects
  useEffect(() => {
    if (selectedProject) {
      // Save current scroll position when opening a project
      scrollPositionRef.current = window.scrollY;

      // Only scroll to the project if needed
      const expandedElement = document.getElementById(`project-${selectedProject.name.toLowerCase().replace(/\s+/g, "-")}`);
      if (expandedElement) {
        const rect = expandedElement.getBoundingClientRect();
        if (rect.top < 100 || rect.bottom > window.innerHeight) {
          expandedElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    } else if (scrollPositionRef.current > 0) {
      // Restore scroll position when closing a project
      setTimeout(() => {
        window.scrollTo({
          top: scrollPositionRef.current,
          behavior: "smooth",
        });
      }, 100);
    }
  }, [selectedProject]);

  const toggleProject = (project) => {
    if (selectedProject?.name === project.name) {
      setSelectedProject(null);
    } else {
      setSelectedProject(project);
    }
  };

  return (
    <section id="work" className="min-h-screen flex items-center px-6 py-10 sm:px-28">
      <div className="mx-auto max-w-7xl">
        <motion.h2 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.2 }} viewport={{ once: true }} className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="text-teal-300">My Work</span>
        </motion.h2>

        <div ref={gridRef} className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const isSelected = selectedProject?.name === project.name;

            return (
              <motion.div
                key={project.name}
                id={`project-${project.name.toLowerCase().replace(/\s+/g, "-")}`}
                layout
                transition={{
                  layout: { duration: 0.2, type: "tween" },
                }}
                className={`${isSelected ? "col-span-full" : ""}`}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="h-full">
                  <div onClick={() => toggleProject(project)} className="cursor-pointer bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden ">
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
