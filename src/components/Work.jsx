import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    name: "Wordle Clone",
    tech: "React / TailwindCSS",
    imageUrl: "../project_images/wordle.png",
    description: "A wordle clone",
    githubUrl: "https://github.com/JackScottow/Wordle",
    liveUrl: "https://wordle.jackscottow.com",
  },
  {
    name: "UberServe",
    tech: "NextJS / TailwindCSS",
    imageUrl: "../project_images/uberserve.png",
    description: "A broadband provider landing page",
    githubUrl: "https://github.com/JackScottow/uberserve-nextjs-landing-page",
    liveUrl: "https://uberserve.jackscottow.com",
  },

  {
    name: "Rock Paper Scissors",
    tech: "React",
    imageUrl: "../project_images/rockpaperscissors.png",
    description: "A simple rock paper scissors game",
    githubUrl: "https://github.com/JackScottow/rock-paper-scissors",
    liveUrl: "https://rockpaperscissors.jackscottow.com/",
  },
  {
    name: "Portfolio",
    tech: "NextJS / TailwindCSS",
    imageUrl: "../project_images/portfolio.png",
    description: "This portfolio",
    githubUrl: "https://github.com/JackScottow/portfolio_v2",
    liveUrl: "https://jackscottow.com/",
  },
  {
    name: "DVDShop",
    tech: "React / Bootstrap / TMDB API",
    imageUrl: "../project_images/dvdshop.png",
    description: "An e-commerce front end",
    githubUrl: "https://github.com/JackScottow/dvd-shop-ecommerce",
    liveUrl: "https://dvdshop.jackscottow.com/",
  },
  {
    name: "Tic Tac Toe",
    tech: "HTML / JS / CSS",
    imageUrl: "../project_images/tictactoe.png",
    description: "A simple tic tac toe game",
    githubUrl: "https://github.com/JackScottow/Tic-Tac-Toe",
    liveUrl: "https://tictactoe.jackscottow.com/",
  },
  {
    name: "Dynamic Landing Page",
    tech: "HTML / JS / CSS",
    imageUrl: "../project_images/dynamiclandingpage.png",
    description: "A dynamic landing page",
    githubUrl: "https://github.com/JackScottow/Dynamic-Landing-Page",
    liveUrl: "https://dynamic-landing-page.jackscottow.com/",
  },
  {
    name: "Pro Tips",
    tech: "HTML / JS / CSS / AdviceSlip API",
    imageUrl: "../project_images/pro-tips.png",
    description: "A simple random quote generator",
    githubUrl: "https://github.com/JackScottow/Random-Quote-Generator",
    liveUrl: "https://pro-tips.jackscottow.com/",
  },
];

const Work = () => {
  return (
    <div className="min-h-screen" id="work">
      <div className="px-6 mx-auto my-auto max-w-7xl lg:px-8">
        <div className="">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="py-4 text-3xl font-medium tracking-tight sm:text-4xl">My Work</h2>
          </div>
          <ul role="list" className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
            {projects.map((project) => (
              <motion.div initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeIn", duration: 0.3 }} key={project.name}>
                <li className="min-h-full transition-transform duration-300 ease-in-out border border-gray-700 rounded-md lg:hover:scale-110 bg-slate-800">
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="object-cover border-b border-gray-700 rounded-t-md" src={project.imageUrl} alt={project.name} />
                    </div>
                    <div className="space-y-2">
                      <div className="px-3 space-y-1 font-medium leading-6 text-center">
                        <h3 className="text-2xl">{project.name}</h3>
                        <p className="text-sm text-gray-300 ">{project.tech}</p>
                        <p className="text-gray-300">{project.description}</p>
                      </div>
                      <ul role="list" className="flex justify-center p-4 ">
                        <li>
                          <Link href={project.githubUrl} target="_blank" className="px-4 text-gray-300 hover:text-teal-300" alt="github">
                            <span className="sr-only">GitHub</span>
                            <FontAwesomeIcon icon={faGithub} size="2xl" />
                          </Link>
                        </li>
                        <li>
                          <Link href={project.liveUrl} target="_blank" className="px-4 text-gray-300 hover:text-teal-300" alt="live">
                            <span className="sr-only">LinkedIn</span>
                            <FontAwesomeIcon icon={faUpRightFromSquare} size="2xl" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </motion.div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work;
