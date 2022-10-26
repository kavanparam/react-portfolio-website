import * as React from "react";
import { useEffect, useRef, useState } from "react";
import type { HeadFC } from "gatsby";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import UpcomingBuild from "../components/UpcomingBuild";
import Projects from "../components/Projects";
import GitHubActivity from "../components/GitHubActivity";
// import { Link, animateScroll as scroll } from "react-scroll";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

type WindowProps = {
  x: undefined | Number;
  y: undefined | Number;
};

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState<WindowProps>();
  const [isDarkMode, setIsDarkMode] = useState(false);
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 0.15, 1], ["0%", "30%", "0%"]);

  const updateSize = () =>
    setSize({
      x: window.innerWidth,
      y: window.innerHeight,
    });

  /* fixme: mobile menu is clickable only when page is resized
    - only used for the navbar & can be removed 
    - find a better way to implement this, maybe w tw breakpoints
  */
  useEffect(() => {
    window.onload = updateSize;
    window.onresize = updateSize;
  }, []);

  useEffect(() => {
    isDarkMode
      ? document.body.classList.add("bg-zinc-900")
      : document.body.classList.remove("bg-zinc-900");
  }, [isDarkMode]);

  // console.log("isOpen", isOpen);
  console.log("isDarkMode state:", isDarkMode);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className={`font-main overflow-x-hidden ${isDarkMode && "dark"}`}
      data-theme="bumblebee"
    >
      {/* Extract to Header component — need to deal w props and window sizes */}
      <header>
        <button
          className={`z-50 fixed right-0 flex flex-col gap-1 p-5 mr-2 sm:hidden`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-1 h-1 bg-black rounded-md dark:bg-white"></div>
          <div className="w-1 h-1 bg-black rounded-md dark:bg-white"></div>
          <div className="w-1 h-1 bg-black rounded-md dark:bg-white"></div>
        </button>
        <nav
          className={`z-50 sm:block sm:w-full fixed sm:right-0 font-main ${
            isOpen && size?.x && size.x < 640 ? "right-0 bottom-0" : "hidden"
          }`}
        >
          <ul className="z-50 p-6 mb-32 font-mono text-4xl font-bold uppercase justify-right word-spacing-tight sm:gap-12 sm:flex sm:text-sm sm:mb-0 sm:mr-0">
            <li className="mr-auto uppercase dark:text-white">
              <a
                className="cursor-pointer"
                // onClick={() => ref.current.scrollTo(0)}
              >
                Kavan Paramathasan
              </a>
            </li>
            <li className="block sm:fixed sm:-rotate-90 sm:bottom-12 dark:text-white">
              <a href="/about">about</a>
            </li>
            <li className="block sm:fixed sm:right-4 sm:top-12 sm:rotate-90 dark:text-white">
              contact
            </li>
            <li className="block sm:fixed sm:right-4 sm:top-24">
              <button
                className="btn btn-square dark:text-white"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                Toggle Dark Mode
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Dark Mode colours:
      - background: rgba(20, 21, 23, 1)
      - divs: rgba(34, 35, 38, 1)
      - shadowed text inside: rgba(57, 59, 59, 1) */}

      <main>
        {/* Welcome Page */}
        <motion.section
          style={{ y }}
          className="z-0 h-screen w-full p-[10%] bg-zinc-50 dark:bg-zinc-800 rounded-3xl sm:-mb-48 -mb-44 flex flex-col items-start justify-center gap-2"
        >
          <h1 className="text-6xl font-bold sm:text-7xl drop-shadow-md">
            Hi 👋🏼, I'm <span className="text-amber-500">Kavan</span>
          </h1>
          <ul className="flex gap-2 font-mono">
            <li>
              <a
                className="underline transition-colors cursor-pointer underline-offset-4 decoration-1 hover:decoration-amber-400 active:decoration-amber-400"
                // onClick={() => ref.current.scrollTo(1.15)}
              >
                works
              </a>
              ,
            </li>
            <li>
              <a className="underline transition-colors cursor-pointer underline-offset-4 decoration-1 hover:decoration-amber-400 active:decoration-amber-400">
                photography
              </a>
              ,
            </li>
            <li>
              <a
                className="underline transition-colors cursor-pointer underline-offset-4 decoration-1 hover:decoration-amber-400 active:decoration-amber-400"
                href="/about"
              >
                about
              </a>
            </li>
          </ul>
        </motion.section>

        <Projects />
        <GitHubActivity />
        <UpcomingBuild />
      </main>

      <footer className="grid w-screen h-screen place-items-center">
        <div className="flex flex-col items-center gap-8">
          <h4 className="text-2xl font-light dark:text-white">
            thank you for visiting! 🖤
          </h4>
          <button
            className="font-mono text-black lowercase border-none btn btn-sm btn-primary"
            // onClick={() => ref.current.scrollTo(0)}
          >
            scroll to top
          </button>
        </div>
      </footer>
    </motion.div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Kavan Paramathasan</title>;
