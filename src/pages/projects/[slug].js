import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../../components/NavBar";
import { projects } from "../../components/Work";

export default function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;

  const project = projects?.find((p) => p.name.toLowerCase().replace(/\s+/g, "-") === slug);

  if (!project) {
    return (
      <main className="flex">
        <NavBar />
        <div className="grow min-h-screen flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Project not found</h1>
            <Link href="/#work" className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 inline-flex items-center gap-2">
              <FontAwesomeIcon icon={faArrowLeft} />
              Back to projects
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex">
      <NavBar />
      <div className="grow min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/#work" className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 inline-flex items-center gap-2 mb-8">
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to projects
          </Link>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{project.name}</h1>

            <p className="text-lg mb-6 text-teal-600 dark:text-teal-400">{project.tech}</p>

            <div className="relative mb-8 overflow-hidden rounded-lg shadow-lg bg-gray-100 dark:bg-gray-700">
              <img src={project.imageUrl} alt={project.name} className="w-full" />
            </div>

            <p className="text-lg mb-8 text-gray-700 dark:text-gray-200">{project.description}</p>

            <div className="flex gap-4">
              <Link href={project.githubUrl} target="_blank" className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors dark:bg-gray-700 dark:hover:bg-gray-600 w-36">
                <FontAwesomeIcon icon={faGithub} />
                View Source
              </Link>
              <Link href={project.liveUrl} target="_blank" className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors dark:bg-teal-500 dark:hover:bg-teal-600 w-36">
                <FontAwesomeIcon icon={faUpRightFromSquare} />
                Live Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
