import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const projects = [
  {
    name: "Wordle Clone",
    tech: "React / Tailwind",
    imageUrl: "../project_images/wordle.png",
    description: "A wordle clone built with React",
    githubUrl: "https://github.com/JackScottow/Wordle",
    liveUrl: "https://wordle.jackscottow.com",
  },
  {
    name: "Wordle Clone",
    tech: "React / Tailwind",
    imageUrl: "../project_images/wordle.png",
    description: "A wordle clone built with React",
    githubUrl: "https://github.com/JackScottow/Wordle",
    liveUrl: "https://wordle.jackscottow.com",
  },
  {
    name: "Wordle Clone",
    tech: "React / Tailwind",
    imageUrl: "../project_images/wordle.png",
    description: "A wordle clone built with React",
    githubUrl: "https://github.com/JackScottow/Wordle",
    liveUrl: "https://wordle.jackscottow.com",
  },
  {
    name: "Wordle Clone",
    tech: "React / Tailwind",
    imageUrl: "../project_images/wordle.png",
    description: "A wordle clone built with React",
    githubUrl: "https://github.com/JackScottow/Wordle",
    liveUrl: "https://wordle.jackscottow.com",
  },
  {
    name: "Wordle Clone",
    tech: "React / Tailwind",
    imageUrl: "../project_images/wordle.png",
    description: "A wordle clone built with React",
    githubUrl: "https://github.com/JackScottow/Wordle",
    liveUrl: "https://wordle.jackscottow.com",
  },
];

const Work = () => {
  return (
    <div className="min-h-screen" id="work">
      <div className="px-6 py-5 mx-auto my-auto max-w-7xl lg:px-8">
        <div className="">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Work</h2>
          </div>
          <ul role="list" className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
            {projects.map((project) => (
              <li key={project.name} className="p-r transition-transform duration-200 rounded hover:scale-105 hover:shadow-md hover:shadow-slate-800 bg-slate-800">
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <img className="object-cover rounded shadow-2xl" src={project.imageUrl} alt="" />
                  </div>
                  <div className="space-y-2">
                    <div className="px-3 space-y-1 font-medium leading-6 text-center">
                      <h3 className="text-2xl">{project.name}</h3>
                      <p className="text-sm text-gray-300 ">{project.tech}</p>
                      <p className="text-gray-300">{project.description}</p>
                    </div>
                    <ul role="list" className="flex justify-center ">
                      <li>
                        <a href={project.githubUrl} className="px-5 text-gray-300 hover:text-teal-300">
                          <span className="sr-only">GitHub</span>
                          <FontAwesomeIcon icon={faGithub} size="2xl" />
                        </a>
                      </li>
                      <li>
                        <a href={project.liveUrl} className="px-5 text-gray-300 hover:text-teal-300">
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
