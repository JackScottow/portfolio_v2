import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="container flex items-center justify-center h-screen text-gray-300 px-6 sm:px-28" id="home">
      <header className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            staggerChildren: 0.2,
          }}>
          <motion.h1 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="py-2 text-lg font-medium tracking-wider text-teal-300">
            <Typewriter words={["Hi, my name is"]} typeSpeed={50} />
          </motion.h1>
          <motion.h2 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="py-3 text-5xl font-bold tracking-tight sm:text-7xl">
            <Typewriter words={["", "Jack Scottow"]} typeSpeed={80} delaySpeed={1500} />
          </motion.h2>
          <motion.p initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="py-4 text-xl leading-relaxed text-gray-400 sm:text-2xl">
            <Typewriter words={["", "I'm a full-stack web developer passionate about building beautifully functional websites and robust, scalable applications. From sleek front-end designs to powerful back-end solutions, I craft seamless digital experiences that bring ideas to life"]} typeSpeed={20} delaySpeed={3000} />
          </motion.p>
        </motion.div>
      </header>
    </div>
  );
};

export default Landing;
