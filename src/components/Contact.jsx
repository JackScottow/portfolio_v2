import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="flex min-h-screen" id="contact">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          staggerChildren: 0.2,
        }}
        viewport={{ once: true }}
        className="relative mx-auto my-auto lg:grid lg:grid-cols-5">
        <div className="px-10 py-8 lg:col-span-2 lg:px-auto lg:py-auto ">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Get in touch!</h2>
            <p className="max-w-3xl mt-5 text-lg text-gray-300">Contact me on my socials or leave a message!</p>
            <div className="flex justify-center gap-8 pt-8">
              <Tooltip placement={"bottom"} showArrow={true} content={<p className="px-2 py-1 text-gray-300 rounded-md text-md">Email</p>} delay={0} closeDelay={0}>
                <Link href="mailto:j.scottow@gmail.com" target="_blank" alt="email" className="text-white transition duration-200 hover:text-teal-300 hover:scale-110">
                  <FontAwesomeIcon icon={faEnvelopeOpen} size="3x" />
                </Link>
              </Tooltip>
              <Tooltip placement={"bottom"} showArrow={true} content={<p className="px-2 py-1 text-gray-300 rounded-md text-md">GitHub</p>} delay={0} closeDelay={0}>
                <Link href="https://www.github.com/jackscottow/" target="_blank" alt="github" className="text-white transition duration-200 hover:text-teal-300 hover:scale-110">
                  <FontAwesomeIcon icon={faGithub} size="3x" />
                </Link>
              </Tooltip>
              <Tooltip placement={"bottom"} showArrow={true} content={<p className="px-2 py-1 text-gray-300 rounded-md text-md">LinkedIn</p>} delay={0} closeDelay={0}>
                <Link href="https://www.linkedin.com/in/jack-scottow/" target="_blank" alt="linkedin" className="text-white transition duration-200 hover:text-teal-300 hover:scale-110">
                  <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </Link>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="px-6 py-8 text-black lg:col-span-3 lg:py-auto lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form name="contact" action="/success" method="POST" className="grid grid-cols-1 gap-y-2" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input type="text" name="name" id="name" autoComplete="name" className="box-border block w-full px-4 py-3 placeholder-gray-400 border-2 border-teal-300 rounded shadow-sm " placeholder="Name" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input id="email" name="email" type="email" autoComplete="email" className="box-border block w-full px-4 py-3 placeholder-gray-400 border-2 border-teal-300 rounded shadow-sm " placeholder="Email" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea id="message" name="message" rows={4} className="box-border block w-full px-4 py-3 placeholder-gray-400 border-2 border-teal-300 rounded shadow-sm resize-none" placeholder="Message" />
              </div>
              <div className="flex">
                <button type="submit" className="inline-flex justify-center px-6 py-3 mx-auto font-medium bg-teal-300 border border-transparent rounded shadow-sm text-slate-900 hover:scale-105 focus:outline-none active:scale-100">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
