import * as React from "react";
import { useEffect, useRef, useState } from "react";
import type { HeadFC } from "gatsby";
import { motion } from "framer-motion";
// import { Link, animateScroll as scroll } from "react-scroll";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

type WindowProps = {
  x: undefined | Number;
  y: undefined | Number;
};

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState<WindowProps>();
  const ref = useRef<any>();

  const updateSize = () =>
    setSize({
      x: window.innerWidth,
      y: window.innerHeight,
    });

  useEffect(() => {
    window.onload = updateSize;
    window.onresize = updateSize;
  }, []);

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

      <main>
        {/* Welcome Page */}
        <section className="h-screen z-10 p-[18%] bg-zinc-50 rounded-2xl mb-20">
          <h1 className="mt-[40%] mb-8 text-6xl font-bold drop-shadow-md">
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
        </section>

        {/* Projects */}
        <section className="z-20 p-[4%] min-h-min mb-20 shadow-divUp rounded-3xl bg-gradient-to-b from-zinc-100 to-zinc-200">
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
        </section>

        {/* GitHub Activity */}
        <section className="z-20 p-[4%] h-screen mb-20 shadow-divUp rounded-3xl bg-zinc-300">
          <h2 id="projects" className="mb-8 text-2xl font-thin">
            recent github activity
          </h2>
        </section>

        {/* Page Build */}
        <section className="z-30 p-[8%] bg-zinc-400 rounded-3xl shadow-divUp overflow-scroll">
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
        </section>
      </main>

      <footer className="w-screen my-24">
        <div className="flex flex-col items-center gap-8">
          <h4 className="text-2xl font-light">thank you for visiting! 🖤</h4>
          <button
            className="p-2 font-mono text-sm rounded-md shadow-md bg-amber-600"
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
