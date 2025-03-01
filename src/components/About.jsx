import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faSquareJs, faNodeJs, faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faCode, faTable, faNetworkWired, faCodeBranch, faMobile, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const skills = [
  { name: "React/Next.js", icon: faReact },
  { name: "TypeScript", icon: faCode },
  { name: "JavaScript", icon: faSquareJs },
  { name: "Tailwind CSS", icon: faCss3 },
  { name: "Node.js", icon: faNodeJs },
  { name: "Prisma", icon: faDatabase },
  { name: "PostgreSQL", icon: faTable },
  { name: "RESTful APIs", icon: faNetworkWired },
  { name: "Git/GitHub", icon: faCodeBranch },
  { name: "Responsive Design", icon: faMobile },
];

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-10 sm:py-auto sm:px-28">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} viewport={{ once: true }} className="max-w-7xl mx-auto">
        <motion.h2 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.2 }} viewport={{ once: true }} className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="text-teal-300">About</span> Me
        </motion.h2>

        <div className="space-y-6 text-gray-300">
          <motion.p initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.3 }} viewport={{ once: true }} className="text-lg leading-relaxed">
            I&apos;m a full-stack developer specialising in building modern web applications with React, Next.js, and Node.js. My focus is on creating responsive, user-friendly interfaces with clean, maintainable code and robust backend solutions. I approach each project with an emphasis on scalability, performance, and exceptional user experience, leveraging modern frameworks and best practices to deliver applications that are both functional and future-proof.
          </motion.p>

          <div className="mt-8">
            <motion.h3 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.2 }} viewport={{ once: true }} className="mb-4 text-2xl font-semibold">
              What I Do
            </motion.h3>
            <div className="grid gap-4 md:grid-cols-2">
              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} viewport={{ once: true }} className="p-4 rounded-lg bg-gray-800/50">
                <h4 className="mb-2 text-xl font-medium text-teal-300">Frontend Development</h4>
                <p className="text-gray-400">Building responsive, interactive web applications with React, Next.js, and TypeScript. Focused on performance, clean UI design, and intuitive user experiences.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} viewport={{ once: true }} className="p-4 rounded-lg bg-gray-800/50">
                <h4 className="mb-2 text-xl font-medium text-teal-300">Backend Development</h4>
                <p className="text-gray-400">Creating robust server-side applications with Node.js, Express, and database technologies like PostgreSQL and Prisma ORM. Implementing secure, scalable APIs and efficient data management.</p>
              </motion.div>
            </div>
          </div>

          <motion.h3 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.2 }} viewport={{ once: true }} className="mt-12 mb-6 text-2xl font-semibold">
            Technologies I work with
          </motion.h3>

          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} viewport={{ once: true }} className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 mb-12">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center p-4 text-gray-300 gap-2">
                <FontAwesomeIcon icon={skill.icon} className="text-3xl mb-2 text-teal-300" />
                <span className="text-center">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
