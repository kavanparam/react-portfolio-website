import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import type { HeadFC } from "gatsby";

// Refactor to social links
const docLinks = [
  {
    text: "TypeScript Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
    color: "#8954A8",
  },
  {
    text: "GraphQL Typegen Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/",
    color: "#8954A8",
  },
];

// Refactor for projects — can store description, title, link in this format, and maybe features as well to be formatted into grid card style format
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
];

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

      <main className="h-screen font-main">
        <section className="z-10 h-screen p-12 -mb-10 bg-zinc-50 rounded-2xl">
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
        {/* <ul style={doclistStyles}>
        {docLinks.map((doc) => (
          <li key={doc.url} style={docLinkStyle}>
            <a
              style={linkStyle}
              href={`${doc.url}?utm_source=starter&utm_medium=ts-docs&utm_campaign=minimal-starter-ts`}
            >
              {doc.text}
            </a>
          </li>
        ))}
      </ul> */}

        {/* <ul style={listStyles}>
        {links.map((link) => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter-ts`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul> */}
        <section className="z-20 p-8 -mb-10 drop-shadow-[0px_0px_50px_rgba(240,150,10,0.2)] rounded-3xl bg-zinc-100">
          <div className="h-screen">
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

          <div className="h-screen">
            <div className="mb-96">
              <h3 className="text-3xl font-bold text-center text-transparent drop-shadow-2xl bg-gradient-to-t from-amber-500 to-orange-600 bg-clip-text">
                Pokedex App
              </h3>
            </div>
            <div className="mb-96">
              <h3 className="text-3xl font-bold text-center text-transparent drop-shadow-2xl bg-gradient-to-r from-cyan-600 to-red-600 bg-clip-text">
                BookStore App
              </h3>
            </div>
          </div>
        </section>

        <section className="z-20 h-screen p-8 -mb-10 drop-shadow-[0px_0px_50px_rgba(240,150,10,0.2)] rounded-3xl bg-zinc-200">
          <h2 id="projects" className="mb-8 text-2xl font-thin">
            recent github activity
          </h2>
        </section>

        <section className="z-30 h-screen p-12 -mb-5 bg-zinc-300 rounded-3xl drop-shadow-[0px_0px_50px_rgba(240,150,10,0.2)]">
          <h2 className="max-w-xs mb-16 text-3xl font-bold">
            Page <span className="text-gatsby-purple">Build ⚡️</span>
          </h2>
          <code className="p-1 text-xl underline rounded underline-offset-4 decoration-0 bg-gatsby-bg-code text-gatsby-purple">
            outline
          </code>
          <ul className="mb-24 ml-4 font-light list-disc">
            <li>
              <s>watch the react tailwind tutorial by dev ed</s>
            </li>
            <li>setup parallax scrolling</li>
            <li>import projects</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Kavan Paramathasan</title>;
