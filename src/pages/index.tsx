import * as React from "react";
import { useEffect, useRef, useState } from "react";
import type { HeadFC } from "gatsby";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
// import { Link, animateScroll as scroll } from "react-scroll";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

type WindowProps = {
  x: undefined | Number;
  y: undefined | Number;
};

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState<WindowProps>();
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  const ref = useRef(null);
  const isInView = useInView(ref, {
    // margin: "-15%",
    amount: 0.3,
  });

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
    console.log("isInView:", isInView);
  }, [isInView]);

  // console.log("isOpen", isOpen);
  // console.log("window size:", size?.x, size?.y);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1.5 }}
      className="font-main"
      data-theme="bumblebee"
    >
      <header>
        {/* Extract to nav component */}
        <button
          className={`z-50 fixed right-0 flex flex-col gap-1 p-5 mr-2 sm:hidden`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-1 h-1 bg-black rounded-md"></div>
          <div className="w-1 h-1 bg-black rounded-md"></div>
          <div className="w-1 h-1 bg-black rounded-md"></div>
        </button>
        <nav
          className={`z-50 sm:block sm:w-full fixed sm:right-0 font-main ${
            isOpen && size?.x && size.x < 640 ? "right-0 bottom-0" : "hidden"
          }`}
        >
          <ul className="z-50 p-6 mb-32 font-mono text-4xl font-bold uppercase justify-right word-spacing-tight sm:gap-12 sm:flex sm:text-sm sm:mb-0 sm:mr-0">
            <li className="mr-auto uppercase">
              <a
                className="cursor-pointer"
                // onClick={() => ref.current.scrollTo(0)}
              >
                Kavan Paramathasan
              </a>
            </li>
            <li className="block sm:fixed sm:-rotate-90 sm:bottom-12 ">
              <a href="/about">about</a>
            </li>
            <li className="block sm:fixed sm:right-4 sm:top-12 sm:rotate-90">
              contact
            </li>
          </ul>
        </nav>
      </header>

      <main className="relative">
        {/* Welcome Page */}
        <motion.section className="z-0 h-screen p-[18%] bg-zinc-50 rounded-2xl -mb-[10%]">
          {/* filters */}
          <div>
            {/* <div className="-z-10 absolute -inset-px mx-auto max-w-[1440px] opacity-50 lg:opacity-100">
            <svg
              viewBox="0 0 768 578"
              fill="none"
              className="w-100% overflow-visible"
            >
              <g filter="url(#filter0_f_15_148)">
                <path
                  d="M326.41 357.121c171.758 23.383 359.676 2.307 239.619-215.368 3.759 50.782-29.668 142.424-193.445 102.744a407.52 407.52 0 01-10.617-2.722L445.13-28c-44.511 74.031-102.835 158.559-162.836 233.733-60.2-45.861-39.597-108.11-14.674-140.506C178.271 25.074-2.51 17.47-10.837 308.268c-5.886 205.535 148.494 78.676 293.131-102.535 18.338 13.971 44.175 26.42 79.673 36.042L326.41 357.121z"
                  fill="url(#paint0_linear_15_148)"
                  fill-opacity="0.3"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_f_15_148"
                  x="-175"
                  y="-192"
                  width="943"
                  height="770"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="82"
                    result="effect1_foregroundBlur_15_148"
                  ></feGaussianBlur>
                </filter>
                <linearGradient
                  id="paint0_linear_15_148"
                  x1="563.85"
                  y1="335.141"
                  x2="270.219"
                  y2="-94.2389"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#67E8F9"></stop>
                  <stop offset="0.481847" stop-color="#8B5CF6"></stop>
                  <stop offset="1" stop-color="#EC4899"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div> */}

            {/* <div className="-z-10 absolute -inset-px mx-auto flex max-w-[1440px] justify-end opacity-50 lg:opacity-100">
            <svg
              viewBox="0 0 692 748"
              fill="none"
              className="w-full overflow-visible"
            >
              <g filter="url(#filter0_f_15_147)">
                <path
                  d="M280.846 246.59C232.81 74.832 276.108-113.086 723.276 6.971c-104.32-3.759-292.58 29.668-211.065 193.445a259.026 259.026 0 005.591 10.617L1072 127.87c-152.083 44.511-325.728 102.835-480.157 162.836 94.211 60.2 222.09 39.597 288.641 14.674 82.485 89.349 98.109 270.129-499.28 278.457-422.23 5.886-161.624-148.494 210.639-293.131-28.7-18.338-54.276-44.175-74.041-79.673L280.846 246.59z"
                  fill="url(#paint0_linear_15_147)"
                  fill-opacity="0.3"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_f_15_147"
                  x="0"
                  y="-195"
                  width="1236"
                  height="943"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="82"
                    result="effect1_foregroundBlur_15_147"
                  ></feGaussianBlur>
                </filter>
                <linearGradient
                  id="paint0_linear_15_147"
                  x1="326.001"
                  y1="9.14971"
                  x2="761.364"
                  y2="620.762"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#67E8F9"></stop>
                  <stop offset="0.481847" stop-color="#8B5CF6"></stop>
                  <stop offset="1" stop-color="#EC4899"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div> */}
          </div>

          {/* content */}
          <div>
            <h1 className="mt-[25%] mb-8 text-6xl font-bold drop-shadow-md">
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
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          ref={ref}
          initial={{ y: 0 }}
          animate={isInView ? { y: -300, transition: { duration: 0.5 } } : ""}
          className="z-20 p-[4%] min-h-fit w-full mb-48 shadow-divUp rounded-3xl bg-gradient-to-b from-zinc-100 to-zinc-200"
        >
          <h2 id="projects" className="mb-8 text-2xl font-thin">
            my projects
          </h2>

          <div className="mb-96">
            <h3 className="text-3xl font-bold text-center drop-shadow">
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
          </div>

          <div className="mb-96">
            <h3 className="text-3xl font-bold text-center text-transparent bg-clip-text drop-shadow bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600">
              Portfolio Website
            </h3>
          </div>

          <div className="mb-96">
            <h3 className="text-3xl font-bold text-center text-transparent drop-shadow bg-gradient-to-t from-amber-500 to-orange-600 bg-clip-text">
              Pokedex App
            </h3>
          </div>

          <div className="mb-96">
            <h3 className="text-3xl font-bold text-center text-transparent saturate-200 drop-shadow bg-gradient-to-r from-cyan-600 to-red-600 bg-clip-text">
              BookStore App
            </h3>
          </div>
        </motion.section>

        {/* GitHub Activity */}
        <motion.section className="w-full z-30 p-[4%] h-screen mb-48 shadow-divUp rounded-3xl bg-zinc-300">
          <h2 id="projects" className="mb-8 text-2xl font-thin">
            recent github activity
          </h2>
        </motion.section>

        {/* Page Build */}
        <motion.section className="z-40 p-[8%] bg-zinc-400 rounded-3xl shadow-divUp overflow-scroll">
          <h2 className="mb-8 text-3xl font-bold">
            Upcoming Page
            <span className="text-purple-900"> Build ⚡️</span>
          </h2>
          <code className="p-1 text-lg text-orange-900 underline bg-yellow-100 rounded underline-offset-4 decoration-0 ">
            outline
          </code>
          <ul className="mt-2 mb-24 ml-4 font-light list-disc marker:text-purple-900">
            <li>
              <s>watch the react tailwind tutorial by dev ed</s> — setup dark
              mode toggle
            </li>
            <li>import projects</li>
            <li>
              setup daisyUI page progress bar when scrolling — fixed, only
              appears on scroll, horizontal+centered on mobile, vertical off the
              side on desktop, rm scroll to top after
            </li>
            <li>implement more daisy UI — ideas: code, window</li>
            <li>change navbar font</li>
            <li>
              add a credits section — listing technologies and libraries used
            </li>
            <li>
              clean up code — extract this list into an object like initial
              gatsby formatting
            </li>
            <li className="mt-4">
              rm unused npm packages w npm-check library or uninstall command —
              react-spring, react-scroll
            </li>
            <li>
              <h5 className="font-bold ">Move to Framer Motion</h5>
              <p>
                Oversight using the current library for Parallax Effects.
                <br />
                “Pages” are defined in ParallaxLayer in react-spring with a
                factor prop. This isn’t proportional to the content inside the
                ParallaxLayer. Meaning that content overflows on mobile with
                current implementation in this project, and isn’t easily
                fixable.
              </p>
              <ul className="mt-2 ml-4 list-disc list-inside">
                <li>
                  setup parallax w previous overlapping behaviour (& spring
                  effect)
                </li>
                <li>
                  make links functional again (navbar, welcome, footer scroll to
                  top)
                </li>
              </ul>
            </li>
          </ul>

          <h4 className="text-xl font-semibold">
            Page Progress Bar — to be built
          </h4>
          <h5 className="underline">Build</h5>
          <ul className="ml-6 list-disc list-outside marker:text-amber-700 marker:content-['+_'] marker:font-bold   ">
            <li>make sections clickable</li>
            <li>rm scroll to top once this is functional</li>
            <li>auto-hide on mobile</li>
            <li>
              use md:steps-vertical and pin off the side for larger screens
            </li>
            <li>might want to replace with a labeled progress bar w Framer</li>
          </ul>
          <div className="mt-4 text-center">
            <ul className="steps steps-horizontal">
              <li className="step step-primary">welcome</li>
              <li className="step step-primary">project list</li>
              <li className="step">github activity</li>
              <li className="step">future page builds</li>
            </ul>
          </div>
        </motion.section>
      </main>

      <footer className="w-screen my-24">
        <div className="flex flex-col items-center gap-8">
          <h4 className="text-2xl font-light">thank you for visiting! 🖤</h4>
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
