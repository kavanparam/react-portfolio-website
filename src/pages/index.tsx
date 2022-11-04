import * as React from "react";
import { useEffect, useRef, useState } from "react";
import type { HeadFC } from "gatsby";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
} from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import { Link, animateScroll as scroll } from "react-scroll";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

type WindowProps = {
  x: undefined | Number;
  y: undefined | Number;
};

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState<WindowProps>();
  const [isDarkMode, setIsDarkMode] = useState(true);

  const welcomePage = useRef<HTMLDivElement>(null);
  const welcomeProgress = useScroll({
    target: welcomePage,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(
    welcomeProgress.scrollYProgress,
    [0, 1],
    ["100%", "85%"]
  );
  let y = useTransform(welcomeProgress.scrollYProgress, [0, 1], ["0%", "45%"]);

  const mainPage = useRef<HTMLDivElement>(null);
  const mainProgress = useScroll({
    target: mainPage,
  });
  const width = useTransform(
    useSpring(mainProgress.scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    }),
    [0, 1],
    ["0", "100%"]
  );

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
      ? document.body.classList.add("bg-dark-black")
      : document.body.classList.remove("bg-dark-black");
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
          <div className="w-1 h-1 rounded-md bg-light-black dark:bg-dark-white"></div>
          <div className="w-1 h-1 rounded-md bg-light-black dark:bg-dark-white"></div>
          <div className="w-1 h-1 rounded-md bg-light-black dark:bg-dark-white"></div>
        </button>
        <nav
          className={`z-50 sm:block sm:w-full fixed sm:right-0 font-main ${
            isOpen && size?.x && size.x < 640 ? "right-0 bottom-0" : "hidden"
          }`}
        >
          <ul className="z-50 p-6 mb-32 font-mono text-4xl font-bold text-right uppercase sm:p-0 sm:text-start word-spacing-tight sm:text-sm dark:text-white">
            <li className="sm:fixed sm:top-6 sm:left-6">
              <a className="cursor-pointer" onClick={scroll.scrollToTop}>
                Kavan Paramathasan
              </a>
            </li>
            <li className="sm:fixed sm:-rotate-90 sm:bottom-12 sm:left-2">
              <a href="/about">about</a>
            </li>
            <li className="sm:fixed sm:right-0 sm:top-12">
              <ul className="sm:flex sm:flex-col sm:items-center sm:gap-8">
                <li className="sm:rotate-90">contact</li>
                <li>
                  <label className="swap swap-rotate">
                    {/* <!-- this hidden checkbox controls the state --> */}
                    <input
                      type="checkbox"
                      onClick={() => setIsDarkMode(!isDarkMode)}
                    />
                    {/* <!-- sun icon --> */}
                    <svg
                      className="w-10 h-10 fill-current sm:w-6 sm:h-6 swap-on"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>
                    {/* <!-- moon icon --> */}
                    <svg
                      className="w-10 h-10 fill-current sm:w-6 sm:h-6 swap-off"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                  </label>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>

      <motion.div
        style={{ width }}
        className="fixed top-0 z-50 h-1 bg-amber-500"
      ></motion.div>

      <main ref={mainPage} className="text-light-black dark:text-dark-white">
        {/* Welcome Page */}
        <motion.section
          style={{ y, scale, z: 0 }}
          ref={welcomePage}
          className="h-screen w-full p-[10%] bg-gray-50 dark:bg-dark-main rounded-3xl flex flex-col items-start justify-center gap-3"
        >
          <h1
            id="welcome"
            className="text-6xl font-bold sm:text-7xl drop-shadow-md"
          >
            Hi 👋🏼, I'm <span className="text-amber-500">Kavan</span>
          </h1>
          <ul className="flex gap-2 font-mono dark:text-dark-white/70 text-light-black/70">
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
                className="underline transition-all cursor-pointer underline-offset-4 decoration-1 hover:decoration-amber-400 hover:decoration-2 hover:underline-offset-8 focus:decoration-amber-400 focus:decoration-2 focus:underline-offset-8"
              >
                works
              </Link>
              ,
            </li>
            <li>
              <a className="underline transition-all cursor-pointer underline-offset-4 decoration-1 hover:decoration-amber-400 hover:decoration-2 hover:underline-offset-8 focus:decoration-amber-400 focus:decoration-2 focus:underline-offset-8">
                photography
              </a>
              ,
            </li>
            <li>
              <a
                className="underline transition-all cursor-pointer underline-offset-4 decoration-1 hover:decoration-amber-400 hover:decoration-2 hover:underline-offset-8 focus:decoration-amber-400 focus:decoration-2 focus:underline-offset-8"
                href="/about"
              >
                about
              </a>
            </li>
          </ul>
        </motion.section>

        {/* Projects */}
        <motion.section
          initial={{ opacity: 0.5 }}
          style={{ y: "-2%", z: 20 }}
          whileInView={{ opacity: 1 }}
          transition={{
            type: "spring",
            duration: 1,
          }}
          viewport={{ amount: 0.1, once: false }}
          className="sm:p-10 p-[4%] min-h-screen w-full mb-96 shadow-divUp dark:shadow-divUpDark rounded-3xl bg-gray-100 dark:bg-dark-main"
        >
          <h2 id="projects" className="mb-8 text-2xl font-thin cursor-pointer">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={1000}
            >
              my projects
            </Link>
          </h2>

          {/* MCF */}
          <div className="mb-16 md:mb-24">
            <div className="">
              {/* overview */}
              <div className="flex items-center justify-center">
                <div className="mb-6 space-y-4 w-96 lg:w-112">
                  <h3 className="inline-block text-5xl font-bold lg:text-6xl drop-shadow saturate-150">
                    <span className="text-transparent bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text">
                      Multiplication
                    </span>{" "}
                    <span className="text-transparent bg-gradient-to-r from-amber-500 to-orange-400 bg-clip-text">
                      Connect
                    </span>{" "}
                    <span className="text-transparent bg-gradient-to-r bg-clip-text from-rose-500 to-red-600">
                      Four
                    </span>
                  </h3>
                  <p className="text-lg sm:text-xl text-gray-800/80 dark:text-dark-white/80">
                    description goes here
                  </p>
                  <div className="btn-group">
                    <button className="lowercase bg-gray-700 border-none text-white/90 btn btn-sm">
                      live link
                    </button>
                    <button className="p-1 btn btn-square bg-amber-500 btn-primary btn-sm">
                      <StaticImage
                        src={"../images/GitHub-Mark-Light-64px.png"}
                        alt={""}
                        className="opacity-90"
                      />
                    </button>
                  </div>
                </div>
              </div>
              {/* features - make divs as square as possible*/}
              <div className="grid gap-6 md:grid-cols-4 md:gap-2">
                <div className="flex flex-col items-center justify-center flex-shrink-0 col-span-2 p-12 bg-gray-200 rounded-2xl md:p-8 dark:bg-dark-secondary">
                  <div>1</div>
                  <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis aspernatur, perferendis corrupti sunt atque cumque
                    hic molestiae debitis temporibus impedit amet quasi
                    laudantium rerum animi quas, ea voluptatibus! Eos, ducimus.
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center flex-shrink-0 p-12 bg-gray-200 rounded-2xl md:p-8 dark:bg-dark-secondary">
                  <div>2</div>
                  <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis aspernatur, perferendis corrupti sunt atque cumque
                    hic molestiae debitis temporibus impedit amet quasi
                    laudantium rerum animi quas, ea voluptatibus! Eos, ducimus.
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center flex-shrink-0 row-span-2 p-12 bg-gray-200 rounded-2xl md:p-8 dark:bg-dark-secondary">
                  <div>3</div>
                  <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis aspernatur, perferendis corrupti sunt atque cumque
                    hic molestiae debitis temporibus impedit amet quasi
                    laudantium rerum animi quas, ea voluptatibus! Eos, ducimus.
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center flex-shrink-0 p-12 bg-gray-200 rounded-2xl md:p-8 dark:bg-dark-secondary">
                  <div>4</div>
                  <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis aspernatur, perferendis corrupti sunt atque cumque
                    hic molestiae debitis temporibus impedit amet quasi
                    laudantium rerum animi quas, ea voluptatibus! Eos, ducimus.
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center flex-shrink-0 col-span-2 p-12 bg-gray-200 rounded-2xl md:p-8 dark:bg-dark-secondary">
                  <div>5</div>
                  <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis aspernatur, perferendis corrupti sunt atque cumque
                    hic molestiae debitis temporibus impedit amet quasi
                    laudantium rerum animi quas, ea voluptatibus! Eos, ducimus.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio */}
          <div className="mb-16 md:mb-24">
            <h3 className="mb-8 text-5xl font-bold text-center text-transparent lg:text-6xl bg-clip-text drop-shadow bg-gradient-to-b saturate-150 from-black/60 via-purple-800 to-violet-500">
              Portfolio Website
            </h3>

            <div className="relative flex flex-col">
              {/* v2 — overview */}
              <div className="flex items-center justify-center md:absolute md:top-0 md:left-0 md:w-[30%] h-full">
                <div className="mb-6 space-y-4 w-96 lg:w-112 md:mb-0">
                  <h4 className="text-3xl font-bold">v2</h4>
                  <p className="text-lg sm:text-xl text-gray-800/80 dark:text-dark-white/80">
                    description goes here
                  </p>
                  <div className="btn-group">
                    <button className="lowercase bg-gray-700 border-none text-white/90 btn btn-sm">
                      live link
                    </button>
                    <button className="p-1 btn btn-square bg-amber-500 btn-primary btn-sm">
                      <StaticImage
                        src={"../images/GitHub-Mark-Light-64px.png"}
                        alt={""}
                        className="opacity-90"
                      />
                    </button>
                  </div>
                </div>
              </div>
              {/* v2 — features */}
              <div className="grid md:grid-cols-2 md:w-[70%] md:ml-[30%] gap-6 md:gap-2">
                <div className="flex flex-col items-center justify-center flex-shrink-0 p-10 bg-gray-200 dark:bg-dark-secondary rounded-2xl">
                  <div>1</div>
                  <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tenetur hic repudiandae aliquid enim, perspiciatis iste
                    inventore rerum. Sapiente, reiciendis qui tempore possimus
                    laudantium corrupti eos totam, nihil, praesentium voluptas
                    dolore!
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center flex-shrink-0 p-10 bg-gray-200 dark:bg-dark-secondary rounded-2xl">
                  <div>2</div>
                  <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tenetur hic repudiandae aliquid enim, perspiciatis iste
                    inventore rerum. Sapiente, reiciendis qui tempore possimus
                    laudantium corrupti eos totam, nihil, praesentium voluptas
                    dolore!
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center flex-shrink-0 p-10 bg-gray-200 dark:bg-dark-secondary rounded-2xl">
                  <div>3</div>
                  <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tenetur hic repudiandae aliquid enim, perspiciatis iste
                    inventore rerum. Sapiente, reiciendis qui tempore possimus
                    laudantium corrupti eos totam, nihil, praesentium voluptas
                    dolore!
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center flex-shrink-0 p-10 bg-gray-200 dark:bg-dark-secondary rounded-2xl">
                  <div>4</div>
                  <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tenetur hic repudiandae aliquid enim, perspiciatis iste
                    inventore rerum. Sapiente, reiciendis qui tempore possimus
                    laudantium corrupti eos totam, nihil, praesentium voluptas
                    dolore!
                  </div>
                </div>
              </div>
            </div>

            <div className="divider before:bg-gradient-to-r before:from-transparent before:to-fuchsia-500/70 after:bg-fuchsia-500/70" />

            <div className="relative">
              {/* v1 — overview */}
              <div className="flex items-center justify-center md:absolute md:top-0 md:left-0 md:w-[30%] h-full">
                <div className="mb-6 space-y-4 w-96 lg:w-112 md:mb-0">
                  <h4 className="text-3xl font-bold">v1</h4>
                  <p className="text-lg sm:text-xl text-gray-800/80 dark:text-dark-white/80">
                    description goes here
                  </p>
                  <div className="btn-group">
                    <button className="lowercase bg-gray-700 border-none text-white/90 btn btn-sm">
                      live link
                    </button>
                    <button className="p-1 btn btn-square bg-amber-500 btn-primary btn-sm">
                      <StaticImage
                        src={"../images/GitHub-Mark-Light-64px.png"}
                        alt={""}
                        className="opacity-90"
                      />
                    </button>
                  </div>
                </div>
              </div>
              {/* v1 — features */}
              <div className="flex items-stretch md:w-[70%] md:ml-[30%] min-h-[40vh] gap-6 md:gap-2 overflow-x-scroll overflow-y-hidden">
                <div className="flex flex-shrink-0 p-16 w-96 flex-col items-center justify-center bg-gray-200 dark:bg-dark-secondary rounded-[2.5rem]">
                  <div>1</div>
                  <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tenetur hic repudiandae aliquid enim, perspiciatis iste
                    inventore rerum. Sapiente, reiciendis qui tempore possimus
                    laudantium corrupti eos totam, nihil, praesentium voluptas
                    dolore!
                  </div>
                </div>
                <div className="flex flex-shrink-0 p-16 w-96 flex-col items-center justify-center bg-gray-200 dark:bg-dark-secondary rounded-[2.5rem]">
                  <div>2</div>
                  <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tenetur hic repudiandae aliquid enim, perspiciatis iste
                    inventore rerum. Sapiente, reiciendis qui tempore possimus
                    laudantium corrupti eos totam, nihil, praesentium voluptas
                    dolore!
                  </div>
                </div>
                <div className="flex flex-shrink-0 p-16 w-96 flex-col items-center justify-center bg-gray-200 dark:bg-dark-secondary rounded-[2.5rem]">
                  <div>3</div>
                  <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tenetur hic repudiandae aliquid enim, perspiciatis iste
                    inventore rerum. Sapiente, reiciendis qui tempore possimus
                    laudantium corrupti eos totam, nihil, praesentium voluptas
                    dolore!
                  </div>
                </div>
                <div className="flex flex-shrink-0 p-16 w-96 flex-col items-center justify-center bg-gray-200 dark:bg-dark-secondary rounded-[2.5rem]">
                  <div>4</div>
                  <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tenetur hic repudiandae aliquid enim, perspiciatis iste
                    inventore rerum. Sapiente, reiciendis qui tempore possimus
                    laudantium corrupti eos totam, nihil, praesentium voluptas
                    dolore!
                  </div>
                </div>
                <div className="flex flex-shrink-0 p-16 w-96 flex-col items-center justify-center bg-gray-200 dark:bg-dark-secondary rounded-[2.5rem]">
                  <div>5</div>
                  <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tenetur hic repudiandae aliquid enim, perspiciatis iste
                    inventore rerum. Sapiente, reiciendis qui tempore possimus
                    laudantium corrupti eos totam, nihil, praesentium voluptas
                    dolore!
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pokedex */}
          <div className="mb-96">
            <h3 className="p-2 text-5xl font-bold text-center text-transparent lg:text-6xl drop-shadow bg-gradient-to-t from-amber-500 to-orange-500 bg-clip-text">
              Pokedex App
            </h3>
          </div>

          {/* BookStore */}
          <div className="mb-96">
            <h3 className="p-2 text-5xl font-bold text-center text-transparent lg:text-6xl saturate-200 drop-shadow bg-gradient-to-r from-cyan-600 to-red-600 bg-clip-text">
              Analyzing JSON Data
            </h3>
          </div>
        </motion.section>

        {/* GitHub Activity */}
        <motion.section
          initial={{ opacity: 0.5 }}
          whileInView={{ opacity: 1 }}
          transition={{
            type: "spring",
            duration: 1,
          }}
          viewport={{ amount: 0.3, once: false }}
          className="w-full z-30 p-[4%] min-h-screen mb-96 shadow-divUp dark:shadow-divUpDark rounded-3xl bg-gray-200 dark:bg-dark-main"
        >
          <h2 id="github" className="mb-8 text-2xl font-thin cursor-pointer">
            <Link
              to="github"
              spy={true}
              smooth={true}
              offset={-50}
              duration={1000}
            >
              recent github activity
            </Link>
          </h2>
        </motion.section>

        {/* Page Build */}
        <motion.section
          initial={{ opacity: 0.5 }}
          whileInView={{ opacity: 1 }}
          transition={{
            type: "spring",
            duration: 1,
          }}
          viewport={{ amount: 0.3, once: false }}
          className="z-40 min-h-screen p-[8%] bg-gray-300 dark:bg-dark-main rounded-3xl shadow-divUp dark:shadow-divUpDark text-gray-900 dark:text-dark-white/80"
        >
          <h2
            id="build"
            className="mb-8 text-4xl font-bold text-gray-800 cursor-pointer sm:text-5xl dark:text-dark-white"
          >
            <Link
              to="build"
              spy={true}
              smooth={true}
              offset={-50}
              duration={1000}
            >
              Upcoming Page
              <span className="text-purple-900">
                {" "}
                Build <span className="text-[125%] align-middle">⚡️</span>
              </span>
            </Link>
          </h2>
          <h3 className="mb-4 font-mono text-lg font-bold underline underline-offset-8 sm:text-2xl text-gray-800/80 dark:text-dark-white/80 dark:text-dark-white">
            Soon
          </h3>
          <ul className="flex flex-col gap-1 mt-2 ml-4 font-light list-disc marker:text-purple-900 sm:text-lg">
            <li>import projects</li>
            <li>add gifs/videos that demo projects</li>
            <li>import BookStore App project</li>
            <li>keep feature divs responsive for diff screen sizes</li>
          </ul>
          <div className="divider" />
          <h3 className="mb-4 font-mono text-lg font-bold underline underline-offset-8 sm:text-2xl text-gray-800/80 dark:text-dark-white/80 dark:text-dark-white">
            Outlined
          </h3>
          <ul className="flex flex-col gap-1 mt-2 ml-4 font-light list-disc marker:text-purple-900 sm:text-lg">
            <li>import Inter font</li>
            <li>
              change navbar font & clean up positioning s.t. it doesn't overlap
              w content
            </li>
            <li>fix mobile navbar w hook-window-resize — supports SSR</li>
            <li>implement more daisy UI — ideas: code, window</li>
            <li>
              add a credits section — listing technologies and libraries used
            </li>
            <li>clean up dark mode</li>
            <li>
              clean up code — extract this list into an object like initial
              gatsby formatting
            </li>
            <li>consider adding snapping functionality</li>
            <li>account for scrollbars on windows devices</li>
            <li>
              consider tailwind{" "}
              <a
                href="https://tailwindcss.com/blog/tailwindcss-v3-2#container-queries"
                className="link link-primary"
              >
                container queries
              </a>
            </li>
            <li>
              SEO + site design
              <ul className="list-decimal list-inside">
                <li>design a favicon</li>
                <li>
                  request{" "}
                  <a
                    className="link link-primary"
                    href="https://support.google.com/webmasters/answer/9012289#request_indexing"
                  >
                    google url indexing
                  </a>
                  ,{" "}
                  <a
                    href="https://blog.hubspot.com/marketing/submit-website-google"
                    className="link link-primary"
                  >
                    another link
                  </a>
                </li>
                <li>
                  get github profile to show up with a google search{" "}
                  <a
                    href="https://www.reddit.com/r/github/comments/hybpia/how_to_make_my_github_account_show_up_when/"
                    className="link link-primary"
                  >
                    (how to)
                  </a>
                </li>
                <li>
                  refine section glows — make the same color as the div itself,
                  & overall colors
                </li>
              </ul>
            </li>
            <li className="mt-8">
              <h5 className="font-bold">Move to Framer Motion</h5>
              <ul className="mt-1 ml-4 list-disc list-inside">
                <li>
                  make links functional again (navbar, welcome, footer scroll to
                  top)
                </li>
                <li>
                  (labeled w clickable links) progress bar w Framer
                  — amber-400/500
                  <ul className="ml-8 list-disc list-inside">
                    <li>
                      e.g.){" "}
                      <a
                        href="https://githubnext.com/"
                        className="link link-primary"
                      >
                        GitHub Next
                      </a>{" "}
                      (minus the progress bar)
                    </li>
                    <details className="">
                      <summary>previous idea (use the headings)</summary>
                      <ul className="steps steps-horizontal">
                        <li className="step step-primary">welcome</li>
                        <li className="step step-primary">project list</li>
                        <li className="step">github activity</li>
                        <li className="step">future page builds</li>
                      </ul>
                      <li>
                        auto-hide on mobile when not in use (clickable links)
                      </li>
                      <li>
                        use md:steps-vertical and pin off the side for larger
                        screens
                      </li>
                      <li>rm scroll to top once this is functional</li>
                    </details>
                  </ul>
                </li>
                <li>
                  rm unused npm packages w npm-check library or uninstall
                  command — react-spring, react-scroll
                </li>
              </ul>
            </li>
          </ul>
        </motion.section>
      </main>

      <footer className="grid w-screen h-screen place-items-center">
        <div className="flex flex-col items-center gap-8">
          <h4 className="text-2xl font-light dark:text-white">
            thank you for visiting! 🖤
          </h4>
          <button
            className="font-mono lowercase border-none text-light-black btn btn-sm btn-primary"
            onClick={scroll.scrollToTop}
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
