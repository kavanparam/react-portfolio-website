import { motion } from "framer-motion";
import React from "react";

const UpcomingBuild = () => {
  return (
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
        <li>import BookStore App project</li>
        <li>keep feature divs responsive for diff screen sizes</li>
      </ul>
      <div className="divider" />
      <h3 className="mb-4 font-mono text-lg font-bold underline underline-offset-8 sm:text-2xl text-zinc-800/80">
        Outlined
      </h3>
      <ul className="flex flex-col gap-1 mt-2 ml-4 font-light list-disc marker:text-purple-900 sm:text-lg">
        <li>import Inter font</li>
        <li>
          change navbar font & clean up positioning s.t. it doesn't overlap w
          content
        </li>
        <li>fix mobile navbar w hook-window-resize — supports SSR</li>
        <li>implement more daisy UI — ideas: code, window</li>
        <li>add a credits section — listing technologies and libraries used</li>
        <li>clean up dark mode</li>
        <li>
          clean up code — extract this list into an object like initial gatsby
          formatting
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
              refine section glows — make the same color as the div itself, &
              overall colors
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
              (labeled w clickable links) progress bar w Framer — amber-400/500
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
                  <li>auto-hide on mobile when not in use (clickable links)</li>
                  <li>
                    use md:steps-vertical and pin off the side for larger
                    screens
                  </li>
                  <li>rm scroll to top once this is functional</li>
                </details>
              </ul>
            </li>
            <li>
              rm unused npm packages w npm-check library or uninstall command —
              react-spring, react-scroll
            </li>
            <li>
              reduce bundle size — 
              <a
                href="https://www.framer.com/docs/guide-reduce-bundle-size/"
                className="link link-primary"
              >
                import as m & lazyload
              </a>{" "}
              the parts of FM that are used on site
            </li>
          </ul>
        </li>
      </ul>
    </motion.section>
  );
};

export default UpcomingBuild;
