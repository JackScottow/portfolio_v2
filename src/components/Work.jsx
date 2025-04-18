import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export const projects = [
  {
    name: "StrongViz",
    tech: "NextJS / TailwindCSS / TypeScript / Recharts",
    imageUrl: "../project_images/strongviz.png",
    description: "Modern web app for visualizing Strong App workout data with interactive charts and exercise analytics",
    githubUrl: "https://github.com/JackScottow/strong-viz",
    liveUrl: "https://strongviz.jackscottow.com",
  },

  {
    name: "NextBook",
    tech: "NextJS / Typescript / TailwindCSS / PostgreSQL / Express / Prisma ",
    imageUrl: "../project_images/nextbook.png",
    description: "A modern social media app with user authentication, real-time chat, media uploads and a responsive UI",
    githubUrl: "https://github.com/JackScottow/nextjs-15-social-media-app",
    liveUrl: "https://nextbook.jackscottow.com",
  },

  {
    name: "CodeCache",
    tech: "NextJS / TypeScript / Prisma / TailwindCSS / Supabase",
    imageUrl: "../project_images/codecache.png",
    description: "A minimalist code and text sharing platform à la pastebin",
    githubUrl: "https://github.com/JackScottow/codecache",
    liveUrl: "https://codecache.jackscottow.com",
  },

  {
    name: "UberServe",
    tech: "NextJS / TailwindCSS",
    imageUrl: "../project_images/uberserve.png",
    description: "Modern ISP landing page with responsive design and interactive pricing calculator",
    githubUrl: "https://github.com/JackScottow/uberserve-nextjs-landing-page",
    liveUrl: "https://uberserve.jackscottow.com",
  },

  {
    name: "Wordle Clone",
    tech: "React / TailwindCSS",
    imageUrl: "../project_images/wordle.png",
    description: "Interactive word puzzle game with daily challenges and score tracking",
    githubUrl: "https://github.com/JackScottow/Wordle",
    liveUrl: "https://wordle.jackscottow.com",
  },

  {
    name: "QR Code Generator",
    tech: "NextJS / Typescript / TailwindCSS",
    imageUrl: "../project_images/qr-code-generator.png",
    description: "Generate and customize QR codes with instant preview and download options",
    githubUrl: "https://github.com/JackScottow/qr-code-generator",
    liveUrl: "https://qr.jackscottow.com",
  },

  {
    name: "Dynamic Landing Page",
    tech: "HTML / JS / CSS",
    imageUrl: "../project_images/dynamiclandingpage.png",
    description: "Personalized dashboard with time-based greetings and dynamic background themes",
    githubUrl: "https://github.com/JackScottow/Dynamic-Landing-Page",
    liveUrl: "https://dynamic-landing-page.jackscottow.com/",
  },

  {
    name: "Rock Paper Scissors",
    tech: "React",
    imageUrl: "../project_images/rockpaperscissors.png",
    description: "Classic game with animated interactions and score tracking system",
    githubUrl: "https://github.com/JackScottow/rock-paper-scissors",
    liveUrl: "https://rockpaperscissors.jackscottow.com/",
  },

  {
    name: "DVDShop",
    tech: "React / Bootstrap / TMDB API",
    imageUrl: "../project_images/dvdshop.png",
    description: "Movie e-commerce platform with TMDB integration and shopping cart functionality",
    githubUrl: "https://github.com/JackScottow/dvd-shop-ecommerce",
    liveUrl: "https://dvdshop.jackscottow.com/",
  },

  {
    name: "Tic Tac Toe",
    tech: "HTML / JS / CSS",
    imageUrl: "../project_images/tictactoe.png",
    description: "Interactive two-player game with win detection and score tracking",
    githubUrl: "https://github.com/JackScottow/Tic-Tac-Toe",
    liveUrl: "https://tictactoe.jackscottow.com/",
  },

  {
    name: "Portfolio",
    tech: "NextJS / TailwindCSS",
    imageUrl: "../project_images/portfolio.png",
    description: "Personal portfolio showcasing projects with responsive design",
    githubUrl: "https://github.com/JackScottow/portfolio_v2",
    liveUrl: "https://jackscottow.com/",
  },

  {
    name: "Wisdom Oracle",
    tech: "HTML / JS / CSS / AdviceSlip API",
    imageUrl: "../project_images/wisdomoracle.png",
    description: "Random advice generator with smooth animations and API integration",
    githubUrl: "https://github.com/JackScottow/Random-Quote-Generator",
    liveUrl: "https://wisdomoracle.jackscottow.com/",
  },
];

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
