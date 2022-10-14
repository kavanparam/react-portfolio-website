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
    <div className="flex flex-col">
      {/* Extract to nav component */}
      <button
        className={`z-50  fixed flex flex-col self-end gap-1 p-5 mr-2 sm:hidden`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-1 h-1 rounded bg-slate-900"></div>
        <div className="w-1 h-1 rounded bg-slate-900"></div>
        <div className="w-1 h-1 rounded bg-slate-900"></div>
      </button>
      <nav
        className={`z-50 sm:block font-main ${
          isOpen && size?.x && size.x < 640
            ? "fixed right-0 bottom-0"
            : "hidden"
        }`}
      >
        <ul className="sm:flex sm:text-xl text-4xl font-thin py-2 justify-end sm:gap-[15%] sm:space-y-0 sm:mb-0 space-y-12 mb-32 mr-16">
          <li>home</li>
          <li>
            <a href="/about">about</a>
          </li>
          <li>email</li>
        </ul>
      </nav>

      <main className="font-main">
        <Parallax pages={5}>
          {/* may need to rm section & h-screens for this to work as expected */}

          <ParallaxLayer className="z-10 h-screen p-12 bg-zinc-50 rounded-2xl">
            <section>
              <h1 className="mt-40 mb-8 text-5xl font-bold drop-shadow-md">
                Hi 👋🏼, I'm <span className="text-amber-500">Kavan</span>
              </h1>
              <ul className="flex gap-2 font-mono">
                <li>
                  <Link
                    className="underline cursor-pointer underline-offset-4 decoration-0"
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={800}
                  >
                    works
                  </Link>
                  ,
                </li>
                <li>
                  <Link
                    className="underline cursor-pointer underline-offset-4 decoration-0"
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
                    className="underline underline-offset-4 decoration-0"
                    href="/about"
                  >
                    about
                  </a>
                </li>
              </ul>
            </section>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            factor={2}
            className="z-20 h-screen p-8 drop-shadow-[0px_0px_50px_rgba(240,150,10,0.2)] rounded-3xl bg-gradient-to-b from-zinc-100 to-zinc-200"
          >
            <section>
              <div className="">
                <h2 id="projects" className="mb-8 text-2xl font-thin">
                  my projects
                </h2>
                <div className="mb-96">
                  <h3 className="text-3xl font-bold text-center drop-shadow-2xl">
                    <span className="text-transparent bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text">
                      Multiplication
                    </span>{" "}
                    <span className="text-transparent bg-gradient-to-r from-amber-500 to-orange-400 bg-clip-text">
                      Connect
                    </span>{" "}
                    <span className="text-transparent bg-gradient-to-r bg-clip-text from-red-500 to-red-700">
                      Four
                    </span>
                  </h3>
                </div>
                <div className="mb-96">
                  <h3 className="text-3xl font-bold text-center drop-shadow-2xl text-fuchsia-500 ">
                    Portfolio Website
                  </h3>
                </div>
              </div>

              <div className="">
                <div className="mb-96">
                  <h3 className="text-3xl font-bold text-center text-transparent drop-shadow-2xl bg-gradient-to-t from-amber-500 to-orange-600 bg-clip-text">
                    Pokedex App
                  </h3>
                </div>
                <div className="">
                  <h3 className="text-3xl font-bold text-center text-transparent drop-shadow-2xl bg-gradient-to-r from-cyan-600 to-red-600 bg-clip-text">
                    BookStore App
                  </h3>
                </div>
              </div>
            </section>
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            className="z-20 h-screen p-8 drop-shadow-[0px_0px_50px_rgba(240,150,10,0.2)] rounded-3xl bg-zinc-300"
          >
            <section>
              <h2 id="projects" className="mb-8 text-2xl font-thin">
                recent github activity
              </h2>
            </section>
          </ParallaxLayer>

          <ParallaxLayer
            offset={4}
            className="z-30 h-screen p-12 bg-zinc-400 rounded-3xl drop-shadow-[0px_0px_50px_rgba(240,150,10,0.2)]"
          >
            <section>
              <h2 className="max-w-xs mb-16 text-3xl font-bold">
                Page <span className="text-gatsby-purple">Build ⚡️</span>
              </h2>
              <code className="p-1 text-xl underline rounded underline-offset-4 decoration-0 bg-gatsby-bg-code text-gatsby-purple">
                outline
              </code>
              <ul className="mb-24 ml-4 font-light list-disc">
                <li>
                  <s>watch the react tailwind tutorial by dev ed</s> — setup
                  dark mode toggle
                </li>
                <li>setup parallax scrolling</li>
                <li>import projects</li>
              </ul>
            </section>
          </ParallaxLayer>
        </Parallax>
      </main>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Kavan Paramathasan</title>;
