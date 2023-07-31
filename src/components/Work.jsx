import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

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
    liveUrl: "https://portfoliov2.jackscottow.com/",
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
    description: 'A dynamic landing page inspired by the chrome extension "Moment"',
    githubUrl: "https://github.com/JackScottow/Dynamic-Landing-Page",
    liveUrl: "https://dynamic-landing-page.jackscottow.com/",
  },
];

const Work = () => {
  return (
    <div className="min-h-screen" id="work">
      <div className="px-6 mx-auto my-auto max-w-7xl lg:px-8">
        <div className="">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="py-4 text-3xl font-bold tracking-tight sm:text-4xl">My Work</h2>
          </div>
          <ul role="list" className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
            {projects.map((project) => (
              <li key={project.name} className="p-4 transition-transform duration-200 rounded hover:scale-105 bg-slate-800">
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <img className="object-cover rounded shadow-2xl" src={project.imageUrl} alt={project.name} />
                  </div>
                  <div className="space-y-2">
                    <div className="px-3 space-y-1 font-medium leading-6 text-center">
                      <h3 className="text-2xl">{project.name}</h3>
                      <p className="text-sm text-gray-300 ">{project.tech}</p>
                      <p className="text-gray-300">{project.description}</p>
                    </div>
                    <ul role="list" className="flex justify-center p-4 ">
                      <li>
                        <a href={project.githubUrl} className="px-4 text-gray-300 hover:text-teal-300">
                          <span className="sr-only">GitHub</span>
                          <FontAwesomeIcon icon={faGithub} size="2xl" />
                        </a>
                      </li>
                      <li>
                        <a href={project.liveUrl} className="px-4 text-gray-300 hover:text-teal-300">
                          <span className="sr-only">LinkedIn</span>
                          <FontAwesomeIcon icon={faUpRightFromSquare} size="2xl" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work;
