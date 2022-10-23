import * as React from "react";
import { useEffect, useRef, useState } from "react";
import type { HeadFC } from "gatsby";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
// import { Link, animateScroll as scroll } from "react-scroll";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

type WindowProps = {
  x: undefined | Number;
  y: undefined | Number;
};

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState<WindowProps>();
  const [isDarkMode, setIsDarkMode] = useState(true);
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
      className={`font-main ${isDarkMode && "dark"}`}
      data-theme="bumblebee"
    >
      {/* Extract to nav component */}
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

      {/* DM colours:
      - background: rgba(20, 21, 23, 1)
      - divs: rgba(34, 35, 38, 1)
      - shadowed text inside: rgba(57, 59, 59, 1) */}

      <main className="overflow-x-hidden">
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

        {/* Projects */}
        <motion.section
          initial={{ scale: 0.9, y: 0, opacity: 0.5 }}
          whileInView={{ scale: 1, y: -30, opacity: 1 }}
          transition={{
            type: "spring",
            duration: 1,
          }}
          viewport={{ amount: 0.15, once: false }}
          className="z-20 p-[4%] min-h-screen w-full mb-96 shadow-divUp dark:shadow-divUpDark rounded-3xl bg-zinc-100 dark:bg-zinc-800"
        >
          <h2 id="projects" className="mb-8 text-2xl font-thin">
            my projects
          </h2>

          {/* MCF */}
          <div className="mb-16 md:mb-24">
            <div className="relative h-[100vh] md:h-[95vh] overflow-auto">
              {/* overview */}
              <div className="sticky top-0 flex items-center justify-center md:h-full md:w-1/2 md:left-0">
                <div className="mb-6 space-y-4 w-96 lg:w-112 md:mb-0">
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
                  <p className="text-lg sm:text-xl text-zinc-800/80">
                    description goes here
                  </p>
                  <div className="btn-group">
                    <button className="lowercase text-white/90 btn btn-sm bg-zinc-700">
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
              <div className="md:w-1/2 md:ml-[50%] w-full space-y-12 h-full">
                <div className="flex flex-col justify-center items-center aspect-square bg-zinc-200 rounded-[2.5rem]">
                  1
                </div>
                <div className="flex flex-col justify-center items-center aspect-square bg-zinc-200 rounded-[2.5rem]">
                  2
                </div>
                <div className="flex flex-col justify-center items-center aspect-square bg-zinc-200 rounded-[2.5rem]">
                  3
                </div>
                <div className="flex flex-col justify-center items-center aspect-square bg-zinc-200 rounded-[2.5rem]">
                  4
                </div>
                <div className="flex flex-col justify-center items-center aspect-square bg-zinc-200 rounded-[2.5rem]">
                  5
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio */}
          <div className="mb-16 md:mb-24">
            {/* heading */}
            <h3 className="mb-8 text-5xl font-bold text-center text-transparent lg:text-6xl bg-clip-text drop-shadow bg-gradient-to-b saturate-150 from-gray-900 via-purple-900 to-violet-600">
              Portfolio Website
            </h3>

            <div className="relative flex flex-col justify-center md:h-[95vh] h-[100vh] overflow-hidden">
              {/* v1 — overview */}
              <div className="flex items-center justify-center md:absolute md:top-0 md:left-0 md:w-[30%] h-1/2">
                <div className="mb-6 space-y-4 w-96 lg:w-112 md:mb-0">
                  <h4 className="text-3xl font-bold">v1</h4>
                  <p className="text-lg sm:text-xl text-zinc-800/80">
                    description goes here
                  </p>
                  <div className="btn-group">
                    <button className="lowercase text-white/90 btn btn-sm bg-zinc-700">
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
              <div className="flex md:w-[70%] md:ml-[30%] w-full gap-12 md:h-1/2 h-full overflow-scroll">
                <div className="flex flex-col justify-center items-center p-56 bg-zinc-200 rounded-[2.5rem]">
                  1
                </div>
                <div className="flex flex-col justify-center items-center p-56 bg-zinc-200 rounded-[2.5rem]">
                  2
                </div>
                <div className="flex flex-col justify-center items-center p-56 bg-zinc-200 rounded-[2.5rem]">
                  3
                </div>
                <div className="flex flex-col justify-center items-center p-56 bg-zinc-200 rounded-[2.5rem]">
                  4
                </div>
                <div className="flex flex-col justify-center items-center p-56 bg-zinc-200 rounded-[2.5rem]">
                  5
                </div>
              </div>

              <div className="divider" />
              {/* v2 */}
              <div className="flex items-center justify-center md:w-1/2 h-1/2">
                <h4 className="text-3xl font-bold">v2</h4>
              </div>
            </div>
          </div>

          {/* Pokedex */}
          <div className="mb-96">
            <h3 className="text-5xl font-bold text-center text-transparent lg:text-6xl drop-shadow bg-gradient-to-t from-amber-500 to-orange-500 bg-clip-text">
              Pokedex App
            </h3>
          </div>

          {/* BookStore */}
          <div className="mb-96">
            <h3 className="text-5xl font-bold text-center text-transparent lg:text-6xl saturate-200 drop-shadow bg-gradient-to-r from-cyan-600 to-red-600 bg-clip-text">
              BookStore App
            </h3>
          </div>
        </motion.section>

        {/* GitHub Activity */}
        <motion.section
          initial={{ scale: 0.9, opacity: 0.5 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            duration: 1,
          }}
          viewport={{ amount: 0.3, once: false }}
          className="w-full z-30 p-[4%] min-h-screen mb-96 shadow-divUp dark:shadow-divUpDark rounded-3xl bg-zinc-200 dark:bg-zinc-800"
        >
          <h2 id="projects" className="mb-8 text-2xl font-thin">
            recent github activity
          </h2>
        </motion.section>

        {/* Page Build */}
        <motion.section
          initial={{ scale: 0.9, opacity: 0.5 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            duration: 1,
          }}
          viewport={{ amount: 0.3, once: false }}
          className="z-40 min-h-screen p-[8%] bg-zinc-300 dark:bg-zinc-800 rounded-3xl shadow-divUp dark:shadow-divUpDark text-zinc-900"
        >
          <h2 className="mb-8 text-4xl font-bold sm:text-5xl text-zinc-800">
            Upcoming Page
            <span className="text-purple-900">
              {" "}
              Build <span className="text-[125%] align-middle">⚡️</span>
            </span>
          </h2>
          <h3 className="mb-4 font-mono text-lg font-bold underline underline-offset-8 sm:text-2xl text-zinc-800/80">
            Soon
          </h3>
          <ul className="flex flex-col gap-1 mt-2 ml-4 font-light list-disc marker:text-purple-900 sm:text-lg">
            <li>import projects</li>
            <li>add gifs/videos that demo projects</li>
          </ul>
          <div className="divider" />
          <h3 className="mb-4 font-mono text-lg font-bold underline underline-offset-8 sm:text-2xl text-zinc-800/80">
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
