import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Landing = () => {
  const [showFirstCursor, setShowFirstCursor] = useState(true);
  const [showSecondCursor, setShowSecondCursor] = useState(true);

  useEffect(() => {
    // Hide cursor for first typewriter after it completes
    const firstTimer = setTimeout(() => {
      setShowFirstCursor(false);
    }, 2000); //

    // Hide cursor for second typewriter after it completes
    const secondTimer = setTimeout(() => {
      setShowSecondCursor(false);
    }, 2000); //

    return () => {
      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
    };
  }, []);

  return (
    <div className="container flex items-center justify-center h-screen text-gray-300 px-6 sm:px-28" id="home">
      <header className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="flex flex-col">
          <motion.h1 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.2 }} className="py-2 text-lg font-medium tracking-wider text-teal-300">
            <Typewriter words={["Hi, my name is"]} cursor={showFirstCursor} cursorStyle="|" cursorBlinking typeSpeed={90} className="typewriter-text" />
          </motion.h1>
          <motion.h2 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.4 }} className="py-3 text-5xl font-bold tracking-tight sm:text-7xl">
            <Typewriter words={["Jack Scottow"]} cursor={showSecondCursor} cursorStyle="|" cursorBlinking typeSpeed={120} delaySpeed={1200} className="typewriter-text" />
          </motion.h2>
          <motion.p initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.6 }} className="py-4 text-xl leading-relaxed text-gray-400 sm:text-2xl">
            <span className="typewriter-text">Full stack web developer passionate about </span>
            <span className="inline-block min-w-[24rem] sm:min-w-[24rem] md:min-w-[24rem]">
              <Typewriter words={["building beautifully functional websites.", "creating robust, scalable applications.", "crafting seamless digital experiences.", "bringing ideas to life through code."]} loop={false} cursor cursorStyle="|" cursorBlinking typeSpeed={40} deleteSpeed={20} delaySpeed={800} className="typewriter-text" />
            </span>
          </motion.p>
        </motion.div>
      </header>
    </div>
  );
};

export default Landing;
