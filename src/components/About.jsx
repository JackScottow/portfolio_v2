import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faSquareJs, faNodeJs, faCss3, faHtml5, faShopify, faBootstrap, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";

const skills = ["HTML/CSS/JS", "React/NextJS", "TypeScript", "SASS/SCSS", "NodeJS", "Git", "Shopify", "Tailwind", "Bootstrap", "RESTful APIs"];

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-auto sm:px-28">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
        <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="text-teal-300">About</span> Me
        </h2>

        <div className="space-y-6 text-gray-300">
          <p className="text-lg leading-relaxed"> With a strong foundation in modern web technologies, I specialize in building responsive, user-centric applications using React and Next.js. I&apos;m passionate about creating seamless user experiences and robust server-side solutions.</p>

          <p className="text-lg leading-relaxed">My journey in web development started with traditional HTML, CSS, and JavaScript, and has evolved to embrace modern frameworks and best practices. I enjoy tackling complex problems and turning ideas into reality through clean, efficient code.</p>

          <div className="mt-8">
            <h3 className="mb-4 text-2xl font-semibold">What I Do</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} viewport={{ once: true }} className="p-4 rounded-lg bg-gray-800/50">
                <h4 className="mb-2 text-xl font-medium text-teal-300">Frontend Development</h4>
                <p className="text-gray-400">Building responsive, interactive user interfaces with modern React, Next.js, and TypeScript. Focused on performance, accessibility, and user experience.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} viewport={{ once: true }} className="p-4 rounded-lg bg-gray-800/50">
                <h4 className="mb-2 text-xl font-medium text-teal-300">Backend Integration</h4>
                <p className="text-gray-400">Implementing server-side logic, API integrations, and database management using Node.js, Express, and various database technologies.</p>
              </motion.div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="mb-4 text-2xl font-semibold">Core Competencies</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <motion.ul initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} viewport={{ once: true }} className="space-y-2 text-gray-400">
                <li>✓ Responsive Web Design</li>
                <li>✓ Single Page Applications</li>
                <li>✓ RESTful API Development</li>
              </motion.ul>
              <motion.ul initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} viewport={{ once: true }} className="space-y-2 text-gray-400">
                <li>✓ State Management</li>
                <li>✓ Performance Optimization</li>
                <li>✓ Version Control (Git)</li>
              </motion.ul>
              <motion.ul initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }} viewport={{ once: true }} className="space-y-2 text-gray-400">
                <li>✓ UI/UX Best Practices</li>
                <li>✓ Testing & Debugging</li>
                <li>✓ Agile Development</li>
              </motion.ul>
            </div>
          </div>

          <h3 className="mt-12 mb-6 text-2xl font-semibold">Technologies I work with</h3>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.3 }} viewport={{ once: true }} className="grid grid-cols-3 gap-6 lg:grid-cols-6">
            {[
              { icon: faReact, label: "React" },
              { icon: faSquareJs, label: "JavaScript" },
              { icon: faNodeJs, label: "NodeJS" },
              { icon: faCss3, label: "CSS3" },
              { icon: faHtml5, label: "HTML5" },
              { icon: faShopify, label: "Shopify" },
            ].map((tech, index) => (
              <motion.div
                key={tech.label}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: index * 0.1,
                }}
                whileHover={{
                  scale: 1.2,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                className="flex justify-center col-span-1 px-8 py-8">
                <Tooltip content={<p className="px-2 py-1 text-gray-300 rounded-md text-md">{tech.label}</p>} delay={0} closeDelay={0}>
                  <FontAwesomeIcon icon={tech.icon} size="4x" className="cursor-help transition-colors duration-300 hover:text-teal-400" />
                </Tooltip>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
