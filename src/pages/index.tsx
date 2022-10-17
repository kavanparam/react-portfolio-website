import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import type { HeadFC } from "gatsby";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

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
    <div data-theme="bumblebee">
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
                onClick={() => ref.current.scrollTo(0)}
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

      <Parallax pages={6.25} ref={ref}>
        <main className="font-main">
          {/* Main */}
          <ParallaxLayer
            factor={1}
            speed={-0.75}
            className="z-10 p-[18%] bg-zinc-50 rounded-2xl"
          >
            <section>
              <h1 className="mt-40 mb-8 text-6xl font-bold drop-shadow-md">
                Hi 👋🏼, I'm <span className="text-amber-500">Kavan</span>
              </h1>
              <ul className="flex gap-2 font-mono">
                <li>
                  <a
                    className="underline transition-colors cursor-pointer underline-offset-4 decoration-1 hover:decoration-amber-400 active:decoration-amber-400"
                    onClick={() => ref.current.scrollTo(1.15)}
                  >
                    works
                  </a>
                  ,
                </li>
                <li>
                  <Link
                    className="underline transition-colors cursor-pointer underline-offset-4 decoration-1 hover:decoration-amber-400 active:decoration-amber-400"
                    activeClass="active"
                    to="photography"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={800}
                  >
                    photography
                  </Link>
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
          </ParallaxLayer>

          {/* Projects */}
          <ParallaxLayer
            offset={0.9}
            factor={2}
            speed={-0.25}
            className="z-20 p-14 shadow-divUp rounded-3xl bg-gradient-to-b from-zinc-100 to-zinc-200"
          >
            <section>
              <div className="">
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
              </div>

              <div className="">
                <div className="mb-96">
                  <h3 className="text-3xl font-bold text-center text-transparent drop-shadow bg-gradient-to-t from-amber-500 to-orange-600 bg-clip-text">
                    Pokedex App
                  </h3>
                </div>
                <div className="">
                  <h3 className="text-3xl font-bold text-center text-transparent saturate-200 drop-shadow bg-gradient-to-r from-cyan-600 to-red-600 bg-clip-text">
                    BookStore App
                  </h3>
                </div>
              </div>
            </section>
          </ParallaxLayer>

          {/* GitHub Activity */}
          <ParallaxLayer
            offset={3.75}
            factor={1}
            speed={-0.1}
            className="z-20 p-[4%] shadow-divUp rounded-3xl bg-zinc-300"
          >
            <section>
              <h2 id="projects" className="mb-8 text-2xl font-thin">
                recent github activity
              </h2>
            </section>
          </ParallaxLayer>

          {/* Page Build */}
          <ParallaxLayer
            offset={4.9}
            factor={1}
            speed={0.05}
            className="z-30 p-12 bg-zinc-400 rounded-3xl shadow-divUp"
          >
            <section>
              <h2 className="mb-8 text-3xl font-bold">
                Upcoming Page
                <span className="text-gatsby-purple"> Build ⚡️</span>
              </h2>
              <code className="p-1 text-lg underline rounded underline-offset-4 decoration-0 bg-gatsby-bg-code text-gatsby-purple">
                outline
              </code>
              <ul className="mb-24 ml-4 font-light list-disc">
                <li>
                  <s>watch the react tailwind tutorial by dev ed</s> — setup
                  dark mode toggle
                </li>
                <li>import projects</li>
                <li>
                  setup daisyUI page progress bar when scrolling — fixed, only
                  appears on scroll, horizontal+centered on mobile, vertical off
                  the side on desktop, rm scroll to top after
                </li>
                <li>implement more daisy UI — ideas: code, window</li>
                <li>change navbar font</li>
                <li>
                  add a credits section — listing technologies and libraries
                  used
                </li>
                <li>
                  rm unused plugins — react smooth scroll {`<Link>`} elements{" "}
                </li>
              </ul>

              <h4 className="text-xl font-semibold">
                Page Progress Bar — to be built
              </h4>
              <ul className="steps steps-vertical lg:steps-horizontal">
                <li className="step step-primary">welcome</li>
                <li className="step step-primary">project list</li>
                <li className="step">github activity</li>
                <li className="step">future page builds</li>
              </ul>
            </section>
          </ParallaxLayer>
        </main>

        <footer className="absolute bottom-0 w-screen mb-24">
          <div className="flex flex-col items-center gap-8">
            <h4 className="text-2xl font-light">thank you for visiting! 🖤</h4>
            <button
              className="p-2 font-mono text-sm rounded-md shadow-md bg-amber-600"
              onClick={() => ref.current.scrollTo(0)}
            >
              scroll to top
            </button>
          </div>
        </footer>
      </Parallax>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Kavan Paramathasan</title>;
