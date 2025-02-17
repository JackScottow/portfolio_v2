import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faSquareJs, faNodeJs, faCss3, faHtml5, faShopify, faBootstrap, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";

const skills = ["HTML/CSS/JS", "React/NextJS", "TypeScript", "SASS/SCSS", "NodeJS", "Git", "Shopify", "Tailwind", "Bootstrap", "RESTful APIs"];

const About = () => {
  return (
    <section id="about" className="min-h-screen px-6 py-20 sm:px-28">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
        <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="text-teal-300">About</span> Me
        </h2>

        <div className="space-y-6 text-gray-300">
          <p className="text-lg leading-relaxed">Hi there! I&apos;m Jack, a front-end developer based near London specialising in React. I have expertise in a wide range of web technologies and I&apos;m passionate about creating amazing user experiences. Feel free to check out some of my work!</p>

          <h3 className="mt-12 mb-6 text-2xl font-semibold">Technologies I work with</h3>

          <motion.div initial={{ x: -350 }} whileInView={{ x: 0 }} transition={{ duration: 0.25 }} viewport={{ once: true }} className="grid grid-cols-3 gap-6 lg:grid-cols-6">
            <div className="flex justify-center col-span-1 px-8 py-8 ">
              <Tooltip content={<p className="px-2 py-1 text-gray-300 rounded-md text-md">React</p>} delay={0} closeDelay={0}>
                <FontAwesomeIcon icon={faReact} size="4x" className="cursor-help" />
              </Tooltip>
            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 ">
              <Tooltip content={<p className="px-2 py-1 text-gray-300 rounded-md text-md">JavaScript</p>} delay={0} closeDelay={0}>
                <FontAwesomeIcon icon={faSquareJs} size="4x" className="cursor-help" />
              </Tooltip>
            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 ">
              <Tooltip content={<p className="px-2 py-1 text-gray-300 rounded-md text-md">NodeJS</p>} delay={0} closeDelay={0}>
                <FontAwesomeIcon icon={faNodeJs} size="4x" className="cursor-help" />
              </Tooltip>
            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 ">
              <Tooltip content={<p className="px-2 py-1 text-gray-300 rounded-md text-md">CSS3</p>} delay={0} closeDelay={0}>
                <FontAwesomeIcon icon={faCss3} size="4x" className="cursor-help" />
              </Tooltip>
            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 ">
              <Tooltip content={<p className="px-2 py-1 text-gray-300 rounded-md text-md">HTML5</p>} delay={0} closeDelay={0}>
                <FontAwesomeIcon icon={faHtml5} size="4x" className="cursor-help" />
              </Tooltip>
            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 ">
              <Tooltip content={<p className="px-2 py-1 text-gray-300 rounded-md text-md">Shopify</p>} delay={0} closeDelay={0}>
                <FontAwesomeIcon icon={faShopify} size="4x" className="cursor-help" />
              </Tooltip>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
