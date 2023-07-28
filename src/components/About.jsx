import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faSquareJs, faNodeJs, faCss3 } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div className="flex h-screen" id="about">
      <div className="px-10 mx-auto my-auto max-w-7xl lg:py-auto lg:px-auto">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
            <p className="max-w-3xl mt-3 text-lg text-gray-300">Hi there! I&apos;m Jack, a front-end web developer based near London, specialising in React. I have expertise in a range of Front End technologies and I&apos;m passionate about creating engaging and functional websites. Whether you&apos;re looking for a website revamp or a brand new build, I offer the necessary skills to meet your needs. Feel free to check out my some of my work!.</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <div className="flex justify-center col-span-1 px-8 py-8 ">
              <FontAwesomeIcon icon={faReact} size="4x" />
            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 ">
              <FontAwesomeIcon icon={faSquareJs} size="4x" />
            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 ">
              <FontAwesomeIcon icon={faNodeJs} size="4x" />
            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 ">
              <FontAwesomeIcon icon={faCss3} size="4x" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
