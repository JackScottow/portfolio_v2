import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faSquareJs, faNodeJs, faCss3, faHtml5, faShopify, faBootstrap, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Tooltip } from "@nextui-org/react";

const About = () => {
  return (
    <div className="flex min-h-screen" id="about">
      <div className="px-10 mx-auto my-auto max-w-7xl lg:py-auto lg:px-auto">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
            <p className="max-w-3xl mt-3 text-lg text-gray-300">Hi there! I&apos;m Jack, a front-end developer based near London specialising in React. I have expertise in a wide range of web technologies and I&apos;m passionate about creating amazing user experiences. Feel free to check out some of my work! </p>
            <ul className="grid grid-cols-2 mt-5 text-left list-disc list-inside gap-x-12 gap-y-1">
              <li>HTML/CSS/JS</li>
              <li>React/NextJS</li>
              <li>TypeScript</li>
              <li>SASS/SCSS</li>
              <li>NodeJS</li>
              <li>Git</li>
              <li>Shopify</li>
              <li>Tailwind</li>
              <li>Bootstrap</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
          <div className=" grid grid-cols-3 gap-0.5 lg:mt-0 py-5 lg:grid-cols-2">
            <div className="flex justify-center col-span-1 px-8 py-8 ">
              <Tooltip showArrow={true} content={<p className="px-2 py-1 text-gray-300 rounded-md text-md">React</p>} delay={0} closeDelay={0}>
                <FontAwesomeIcon icon={faReact} size="4x" className="cursor-help" />
              </Tooltip>
            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 ">
              <Tooltip showArrow={true} content={<p className="px-2 py-1 text-gray-300 rounded-md text-md">JavaScript</p>} delay={0} closeDelay={0}>
                <FontAwesomeIcon icon={faSquareJs} size="4x" className="cursor-help" />
              </Tooltip>
            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 ">
              <Tooltip showArrow={true} content={<p className="px-2 py-1 text-gray-300 rounded-md text-md">NodeJS</p>} delay={0} closeDelay={0}>
                <FontAwesomeIcon icon={faNodeJs} size="4x" className="cursor-help" />
              </Tooltip>
            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 ">
              <Tooltip showArrow={true} content={<p className="px-2 py-1 text-gray-300 rounded-md text-md">CSS3</p>} delay={0} closeDelay={0}>
                <FontAwesomeIcon icon={faCss3} size="4x" className="cursor-help" />
              </Tooltip>
            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 ">
              <Tooltip showArrow={true} content={<p className="px-2 py-1 text-gray-300 rounded-md text-md">HTML5</p>} delay={0} closeDelay={0}>
                <FontAwesomeIcon icon={faHtml5} size="4x" className="cursor-help" />
              </Tooltip>
            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 ">
              <Tooltip showArrow={true} content={<p className="px-2 py-1 text-gray-300 rounded-md text-md">Shopify</p>} delay={0} closeDelay={0}>
                <FontAwesomeIcon icon={faShopify} size="4x" className="cursor-help" />
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
