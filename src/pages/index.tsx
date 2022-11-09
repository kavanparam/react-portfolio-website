import * as React from "react";
import { useEffect, useRef, useState } from "react";
import type { HeadFC } from "gatsby";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
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
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [progressBar, setProgressBar] = useState(0);

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
  let y = useTransform(welcomeProgress.scrollYProgress, [0, 1], ["0%", "40%"]);

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

  useEffect(() => {
    return mainProgress.scrollYProgress.onChange((latest) => {
      const scrollPercent = Math.round(latest * 100);
      setProgressBar(scrollPercent);
    });
  }, [mainProgress]);

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
      <header className="transition-colors duration-500 text-light-black dark:text-white">
        <button
          className={`z-50 fixed right-0 flex flex-col gap-1 p-5 mr-2 sm:hidden`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-1 h-1 rounded-md bg-light-black dark:bg-dark-white"></div>
          <div className="w-1 h-1 rounded-md bg-light-black dark:bg-dark-white"></div>
          <div className="w-1 h-1 rounded-md bg-light-black dark:bg-dark-white"></div>
        </button>
        <nav
          className={`z-50 sm:block sm:w-full fixed sm:pt-2.5 sm:backdrop-blur sm:dark:bg-dark-main/75 sm:bg-dark-white/75 sm:border-b sm:border-dark-black/10 sm:dark:border-dark-white/10 transition-colors duration-500 ${
            isOpen && size?.x && size.x < 640 ? "right-0 bottom-0" : "hidden"
          }`}
        >
          <ul className="p-6 mb-32 sm:flex sm:items-center sm:gap-8 font-mono text-4xl font-semibold text-right uppercase sm:mb-0 sm:p-0 sm:px-8 sm:py-1.5 sm:text-start word-spacing-tight sm:text-sm drop-shadow-xl sm:drop-shadow-none">
            <li className="mr-auto">
              <a className="cursor-pointer" onClick={scroll.scrollToTop}>
                Kavan Paramathasan
              </a>
            </li>
            <li className="">
              <a
              // href="/about"
              >
                <label htmlFor="my-modal-4">about</label>
              </a>
            </li>
            <li className="">
              <label htmlFor="my-modal-4">contact</label>
            </li>
            <li className="mt-0.5">
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
        </nav>
      </header>

      {/* Progress Bar */}
      <motion.div
        style={{ width }}
        className="fixed z-50 flex justify-end h-3 shadow-sm rounded-r-md bg-gradient-to-l from-amber-500 to-yellow-300/40 text-dark-white/90"
      >
        <div className="flex items-center mr-2 font-mono text-xs tracking-wider">
          <span className="">{progressBar}%</span>
        </div>
      </motion.div>

      {/* Not implemented modal */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label
        htmlFor="my-modal-4"
        className="cursor-pointer modal"
        data-theme={isDarkMode ? "dark" : "light"}
      >
        <label
          className="relative modal-box text-light-black bg-dark-white dark:text-dark-white dark:bg-dark-main"
          htmlFor=""
        >
          <h3 className="text-lg font-bold">
            Please note <span className="text-2xl">✍🏼</span>
          </h3>
          <p className="py-4">
            This has not been implemented yet, but will be in an upcoming build!
          </p>
        </label>
      </label>

      <main
        ref={mainPage}
        className="transition-colors duration-500 text-light-black dark:text-dark-white"
      >
        {/* Welcome Page */}
        <motion.section
          style={{ y, scale, z: 0 }}
          ref={welcomePage}
          className="min-h-screen w-full p-[10%] bg-white dark:bg-dark-main rounded-3xl flex flex-col items-start justify-center gap-3 transition-colors duration-500"
        >
          <h1
            id="welcome"
            className="text-6xl font-bold sm:text-7xl drop-shadow-md"
          >
            Hi 👋🏼, I'm{" "}
            <span className="text-transparent bg-gradient-to-tr bg-clip-text from-amber-500 to-yellow-300 saturate-150">
              Kavan
            </span>
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
                <label htmlFor="my-modal-4">photography</label>
              </a>
              ,
            </li>
            <li>
              <a
                className="underline transition-all cursor-pointer underline-offset-4 decoration-1 hover:decoration-amber-400 hover:decoration-2 hover:underline-offset-8 focus:decoration-amber-400 focus:decoration-2 focus:underline-offset-8"
                // href="/about"
              >
                <label htmlFor="my-modal-4">about</label>
              </a>
            </li>
          </ul>
        </motion.section>

        {/* Projects */}
        <motion.section
          initial={{ opacity: 0.6, scale: 0.98 }}
          style={{ y: "-3%", z: 20 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            duration: 1,
          }}
          viewport={{ amount: 0.1, once: false }}
          className="w-full min-h-screen p-6 transition-colors duration-500 bg-white md:p-8 mb-96 shadow-divUp dark:shadow-divUpDark rounded-3xl dark:bg-dark-main"
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
          <div className="mb-16 md:mb-72">
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
            {/* features */}
            <div className="grid gap-6 md:grid-cols-3 md:grid-rows-3 md:gap-2">
              <div className="flex flex-col items-center justify-center flex-shrink-0 p-12 bg-light-secondary sm:row-span-2 rounded-2xl md:p-8 dark:bg-dark-secondary">
                <div>1</div>
                <div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis aspernatur, perferendis corrupti sunt atque cumque
                  hic molestiae debitis temporibus impedit amet quasi laudantium
                  rerum animi quas, ea voluptatibus! Eos, ducimus.
                </div>
              </div>
              <div className="flex flex-col items-center justify-center flex-shrink-0 p-12 bg-light-secondary sm:row-span-1 rounded-2xl md:p-8 dark:bg-dark-secondary">
                <div>2</div>
                <div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis aspernatur, perferendis corrupti sunt atque cumque
                  hic molestiae debitis temporibus impedit amet quasi laudantium
                  rerum animi quas, ea voluptatibus! Eos, ducimus.
                </div>
              </div>
              <div className="flex flex-col items-center justify-center flex-shrink-0 p-12 bg-light-secondary sm:row-span-2 rounded-2xl md:p-8 dark:bg-dark-secondary">
                <div>3</div>
                <div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis aspernatur, perferendis corrupti sunt atque cumque
                  hic molestiae debitis temporibus impedit amet quasi laudantium
                  rerum animi quas, ea voluptatibus! Eos, ducimus.
                </div>
              </div>
              <div className="flex flex-col items-center justify-center flex-shrink-0 p-12 bg-light-secondary sm:row-span-2 rounded-2xl md:p-8 dark:bg-dark-secondary">
                <div>4</div>
                <div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis aspernatur, perferendis corrupti sunt atque cumque
                  hic molestiae debitis temporibus impedit amet quasi laudantium
                  rerum animi quas, ea voluptatibus! Eos, ducimus.
                </div>
              </div>
              <div className="flex flex-col items-center justify-center flex-shrink-0 p-12 bg-light-secondary sm:row-span-2 rounded-2xl md:p-8 dark:bg-dark-secondary">
                <div>5</div>
                <div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis aspernatur, perferendis corrupti sunt atque cumque
                  hic molestiae debitis temporibus impedit amet quasi laudantium
                  rerum animi quas, ea voluptatibus! Eos, ducimus.
                </div>
              </div>
              <div className="flex flex-col items-center justify-center flex-shrink-0 p-12 bg-light-secondary sm:row-span-2 rounded-2xl md:p-8 dark:bg-dark-secondary">
                <div>6</div>
                <div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis aspernatur, perferendis corrupti sunt atque cumque
                  hic molestiae debitis temporibus impedit amet quasi laudantium
                  rerum animi quas, ea voluptatibus! Eos, ducimus.
                </div>
              </div>
              <div className="flex flex-col items-center justify-center flex-shrink-0 p-12 bg-light-secondary sm:row-span-1 rounded-2xl md:p-8 dark:bg-dark-secondary">
                <div>7</div>
                <div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis aspernatur, perferendis corrupti sunt atque cumque
                  hic molestiae debitis temporibus impedit amet quasi laudantium
                  rerum animi quas, ea voluptatibus! Eos, ducimus.
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio */}
          <div className="mb-16 md:mb-72">
            {/* v2 — overview */}
            <div className="flex items-center justify-center">
              <div className="mb-6 space-y-4 w-96 lg:w-112">
                <h3 className="text-5xl font-bold text-transparent lg:text-6xl bg-clip-text drop-shadow bg-gradient-to-b saturate-150 from-black/60 via-purple-800 to-violet-500">
                  Portfolio Website
                </h3>
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
            <div className="grid gap-6 md:grid-cols-4 md:gap-2">
              <div className="flex flex-col items-center justify-center flex-shrink-0 p-12 bg-light-secondary sm:col-span-2 rounded-2xl md:p-8 dark:bg-dark-secondary">
                <div>1</div>
                <div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis aspernatur, perferendis corrupti sunt atque cumque
                  hic molestiae debitis temporibus impedit amet quasi laudantium
                  rerum animi quas, ea voluptatibus! Eos, ducimus.
                </div>
              </div>
              <div className="flex flex-col items-center justify-center flex-shrink-0 p-12 bg-light-secondary rounded-2xl md:p-8 dark:bg-dark-secondary">
                <div>2</div>
                <div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis aspernatur, perferendis corrupti sunt atque cumque
                  hic molestiae debitis temporibus impedit amet quasi laudantium
                  rerum animi quas, ea voluptatibus! Eos, ducimus.
                </div>
              </div>
              <div className="flex flex-col items-center justify-center flex-shrink-0 p-12 bg-light-secondary sm:row-span-2 rounded-2xl md:p-8 dark:bg-dark-secondary">
                <div>3</div>
                <div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis aspernatur, perferendis corrupti sunt atque cumque
                  hic molestiae debitis temporibus impedit amet quasi laudantium
                  rerum animi quas, ea voluptatibus! Eos, ducimus.
                </div>
              </div>
              <div className="flex flex-col items-center justify-center flex-shrink-0 p-12 bg-light-secondary rounded-2xl md:p-8 dark:bg-dark-secondary">
                <div>4</div>
                <div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis aspernatur, perferendis corrupti sunt atque cumque
                  hic molestiae debitis temporibus impedit amet quasi laudantium
                  rerum animi quas, ea voluptatibus! Eos, ducimus.
                </div>
              </div>
              <div className="flex flex-col items-center justify-center flex-shrink-0 p-12 bg-light-secondary sm:col-span-2 rounded-2xl md:p-8 dark:bg-dark-secondary">
                <div>5</div>
                <div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis aspernatur, perferendis corrupti sunt atque cumque
                  hic molestiae debitis temporibus impedit amet quasi laudantium
                  rerum animi quas, ea voluptatibus! Eos, ducimus.
                </div>
              </div>
            </div>

            <div className="divider before:bg-gradient-to-r before:from-transparent before:to-purple-500 after:bg-purple-500" />

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
              <div className="carousel carousel-center items-stretch md:w-[70%] md:ml-[30%] min-h-[40vh] gap-6 md:gap-2 rounded-2xl">
                <div className="carousel-item flex-shrink-0 p-16 w-80 flex-col items-center justify-center bg-light-secondary dark:bg-dark-secondary rounded-[2.5rem]">
                  <div>1</div>
                  <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tenetur hic repudiandae aliquid enim, perspiciatis iste
                    inventore rerum. Sapiente, reiciendis qui tempore possimus
                    laudantium corrupti eos totam, nihil, praesentium voluptas
                    dolore!
                  </div>
                </div>
                <div className="carousel-item flex-shrink-0 p-16 w-80 flex-col items-center justify-center bg-light-secondary dark:bg-dark-secondary rounded-[2.5rem]">
                  <div>2</div>
                  <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tenetur hic repudiandae aliquid enim, perspiciatis iste
                    inventore rerum. Sapiente, reiciendis qui tempore possimus
                    laudantium corrupti eos totam, nihil, praesentium voluptas
                    dolore!
                  </div>
                </div>
                <div className="carousel-item flex-shrink-0 p-16 w-80 flex-col items-center justify-center bg-light-secondary dark:bg-dark-secondary rounded-[2.5rem]">
                  <div>3</div>
                  <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tenetur hic repudiandae aliquid enim, perspiciatis iste
                    inventore rerum. Sapiente, reiciendis qui tempore possimus
                    laudantium corrupti eos totam, nihil, praesentium voluptas
                    dolore!
                  </div>
                </div>
                <div className="carousel-item flex-shrink-0 p-16 w-80 flex-col items-center justify-center bg-light-secondary dark:bg-dark-secondary rounded-[2.5rem]">
                  <div>4</div>
                  <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tenetur hic repudiandae aliquid enim, perspiciatis iste
                    inventore rerum. Sapiente, reiciendis qui tempore possimus
                    laudantium corrupti eos totam, nihil, praesentium voluptas
                    dolore!
                  </div>
                </div>
                <div className="carousel-item flex-shrink-0 p-16 w-80 flex-col items-center justify-center bg-light-secondary dark:bg-dark-secondary rounded-[2.5rem]">
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
          <div className="relative mb-16 md:mb-72 min-h-[50vh]">
            {/* overview */}
            <div className="flex items-center justify-center h-full md:absolute md:top-0 md:right-0 md:w-[45%]">
              <div className="mb-6 space-y-4 w-96 lg:w-112">
                <h3 className="text-5xl font-bold text-transparent lg:text-6xl drop-shadow bg-gradient-to-t from-amber-400 to-orange-600 bg-clip-text">
                  Pokedex App
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
            {/* features */}
            <div className="flex flex-col md:w-[50%] gap-6 md:gap-4">
              <div className="flex flex-col items-center justify-center flex-shrink-0 p-10 bg-light-secondary dark:bg-dark-secondary rounded-2xl">
                <div>1</div>
                <div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Tenetur hic repudiandae aliquid enim, perspiciatis iste
                  inventore rerum. Sapiente, reiciendis qui tempore possimus
                  laudantium corrupti eos totam, nihil, praesentium voluptas
                  dolore!
                </div>
              </div>
              <div className="flex flex-col items-center justify-center flex-shrink-0 p-10 bg-light-secondary dark:bg-dark-secondary rounded-2xl">
                <div>2</div>
                <div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Tenetur hic repudiandae aliquid enim, perspiciatis iste
                  inventore rerum. Sapiente, reiciendis qui tempore possimus
                  laudantium corrupti eos totam, nihil, praesentium voluptas
                  dolore!
                </div>
              </div>
              <div className="flex flex-col items-center justify-center flex-shrink-0 p-10 bg-light-secondary dark:bg-dark-secondary rounded-2xl">
                <div>3</div>
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

          {/* JSON data */}
          <div className="mb-16 md:mb-72">
            {/* overview */}
            <div className="flex items-center justify-center">
              <div className="mb-6 space-y-4 w-96 lg:w-112">
                <h3 className="text-5xl font-bold text-transparent lg:text-6xl saturate-200 drop-shadow bg-gradient-to-r from-cyan-700 to-red-800 bg-clip-text">
                  Analyzing JSON Data
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
            {/* features */}
            <div className="grid gap-6 md:grid-cols-3 md:gap-2">
              <div className="flex flex-col items-center justify-center flex-shrink-0 p-12 bg-light-secondary rounded-2xl md:p-8 dark:bg-dark-secondary">
                <div>1</div>
                <div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis aspernatur, perferendis corrupti sunt atque cumque
                  hic molestiae debitis temporibus impedit amet quasi laudantium
                  rerum animi quas, ea voluptatibus! Eos, ducimus.
                </div>
              </div>
              <div className="flex flex-col items-center justify-center flex-shrink-0 p-12 bg-light-secondary rounded-2xl md:p-8 dark:bg-dark-secondary">
                <div>2</div>
                <div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis aspernatur, perferendis corrupti sunt atque cumque
                  hic molestiae debitis temporibus impedit amet quasi laudantium
                  rerum animi quas, ea voluptatibus! Eos, ducimus.
                </div>
              </div>
              <div className="flex flex-col items-center justify-center flex-shrink-0 p-12 bg-light-secondary rounded-2xl md:p-8 dark:bg-dark-secondary">
                <div>3</div>
                <div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis aspernatur, perferendis corrupti sunt atque cumque
                  hic molestiae debitis temporibus impedit amet quasi laudantium
                  rerum animi quas, ea voluptatibus! Eos, ducimus.
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* GitHub Activity */}
        <motion.section
          initial={{ opacity: 0.6, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            duration: 1,
          }}
          viewport={{ amount: 0.3, once: false }}
          className="z-30 w-full min-h-screen p-6 transition-colors duration-500 bg-white md:p-8 mb-96 shadow-divUp dark:shadow-divUpDark rounded-3xl dark:bg-dark-main"
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
          initial={{ opacity: 0.6, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            duration: 1,
          }}
          viewport={{ amount: 0.3, once: false }}
          className="z-40 min-h-screen p-6 text-gray-900 transition-colors duration-500 bg-white md:p-8 dark:bg-dark-main rounded-3xl shadow-divUp dark:shadow-divUpDark dark:text-dark-white/80"
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
              <li>
                rm unused npm packages w npm-check library or uninstall command
                — react-spring, react-scroll
              </li>
            </li>
          </ul>
        </motion.section>
      </main>

      <footer className="grid w-screen h-screen transition-colors duration-500 place-items-center">
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
