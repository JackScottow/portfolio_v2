import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faSquareJs, faNodeJs, faCss3, faHtml5, faShopify } from "@fortawesome/free-brands-svg-icons";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { Tooltip, Zoom } from "@mui/material";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex min-h-screen" id="about">
      <div className="px-10 mx-auto my-auto max-w-7xl lg:py-auto lg:px-auto">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
            <p className="max-w-3xl mt-3 text-lg text-gray-300">Hi there! I&apos;m Jack, a front-end developer based near London specialising in React. I have expertise in a wide range of web technologies and I&apos;m passionate about creating beautiful and functional websites. Feel free to check out some of my work! </p>
            <ul className="grid grid-cols-2 pl-5 mt-5 text-justify list-disc gap-y-2">
              <li>HTML/CSS/JS</li>
              <li>React/NextJS</li>
              <li>SASS</li>
              <li>NodeJS</li>
              <li>Git</li>
              <li>Shopify</li>
              <li>Tailwind</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className=" grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <div className="flex justify-center col-span-1 px-8 py-8 ">
              <Tooltip title="React" placement="top" disableInteractive TransitionComponent={Zoom} arrow enterTouchDelay={0}>
                <FontAwesomeIcon icon={faReact} size="4x" />
              </Tooltip>
            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 ">
              <Tooltip title="JavaScript" placement="top" disableInteractive TransitionComponent={Zoom} arrow enterTouchDelay={0}>
                <FontAwesomeIcon icon={faSquareJs} size="4x" />{" "}
              </Tooltip>
            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 ">
              <Tooltip title="NodeJS" placement="top" disableInteractive TransitionComponent={Zoom} arrow enterTouchDelay={0}>
                <FontAwesomeIcon icon={faNodeJs} size="4x" />{" "}
              </Tooltip>
            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 ">
              <Tooltip title="CSS3" placement="top" disableInteractive TransitionComponent={Zoom} arrow enterTouchDelay={0}>
                <FontAwesomeIcon icon={faCss3} size="4x" />{" "}
              </Tooltip>
            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 ">
              <Tooltip title="HTML5" placement="top" disableInteractive TransitionComponent={Zoom} arrow enterTouchDelay={0}>
                <FontAwesomeIcon icon={faHtml5} size="4x" />{" "}
              </Tooltip>
            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 ">
              <Tooltip title="Shopify" placement="top" disableInteractive TransitionComponent={Zoom} arrow enterTouchDelay={0}>
                <FontAwesomeIcon icon={faShopify} size="4x" />{" "}
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
