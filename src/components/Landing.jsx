import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="container flex items-center justify-center h-screen text-gray-300 px-14 sm:px-28" id="home">
      <header>
        <motion.div initial={{ y: 200 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }}>
          <h1 className="py-2 text-xl">
            <Typewriter words={["Hi, my name is"]} typeSpeed={50} />
          </h1>
          <h2 className="py-2 text-6xl font-medium text-teal-300">
            <Typewriter words={["", "Jack Scottow"]} typeSpeed={80} delaySpeed={1500} />
          </h2>
          <p className="py-2 text-xl">
            <Typewriter words={["", "I'm a front-end web developer who is passionate about creating beautifully functional websites"]} typeSpeed={20} delaySpeed={3000} />
          </p>
        </motion.div>
      </header>
    </div>
  );
};

export default Landing;
