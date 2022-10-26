import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Projects = () => {
  return (
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
          <div className="flex flex-col md:w-1/2 md:ml-[50%] w-full gap-12 h-full">
            <div className="flex flex-shrink-0 h-96 flex-col justify-center items-center p-16 bg-zinc-200 rounded-[2.5rem]">
              <div>1</div>
              <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis aspernatur, perferendis corrupti sunt atque cumque hic
                molestiae debitis temporibus impedit amet quasi laudantium rerum
                animi quas, ea voluptatibus! Eos, ducimus.
              </div>
            </div>
            <div className="flex flex-shrink-0 h-96 flex-col justify-center items-center p-16 bg-zinc-200 rounded-[2.5rem]">
              <div>2</div>
              <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis aspernatur, perferendis corrupti sunt atque cumque hic
                molestiae debitis temporibus impedit amet quasi laudantium rerum
                animi quas, ea voluptatibus! Eos, ducimus.
              </div>
            </div>
            <div className="flex flex-shrink-0 h-96 flex-col justify-center items-center p-16 bg-zinc-200 rounded-[2.5rem]">
              <div>3</div>
              <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis aspernatur, perferendis corrupti sunt atque cumque hic
                molestiae debitis temporibus impedit amet quasi laudantium rerum
                animi quas, ea voluptatibus! Eos, ducimus.
              </div>
            </div>
            <div className="flex flex-shrink-0 h-96 flex-col justify-center items-center p-16 bg-zinc-200 rounded-[2.5rem]">
              <div>4</div>
              <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis aspernatur, perferendis corrupti sunt atque cumque hic
                molestiae debitis temporibus impedit amet quasi laudantium rerum
                animi quas, ea voluptatibus! Eos, ducimus.
              </div>
            </div>
            <div className="flex flex-shrink-0 h-96 flex-col justify-center items-center p-16 bg-zinc-200 rounded-[2.5rem]">
              <div>5</div>
              <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis aspernatur, perferendis corrupti sunt atque cumque hic
                molestiae debitis temporibus impedit amet quasi laudantium rerum
                animi quas, ea voluptatibus! Eos, ducimus.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio */}
      <div className="mb-16 md:mb-24">
        <h3 className="mb-8 text-5xl font-bold text-center text-transparent lg:text-6xl bg-clip-text drop-shadow bg-gradient-to-b saturate-150 from-gray-900 via-purple-900 to-violet-600">
          Portfolio Website
        </h3>

        <div className="relative flex flex-col md:h-[95vh] h-[100vh] overflow-hidden">
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
          <div className="flex items-center md:w-[70%] md:ml-[30%] gap-12 md:h-1/2 h-full overflow-x-scroll overflow-y-hidden">
            <div className="flex flex-shrink-0 w-96 h-full p-16 flex-col items-center justify-center bg-zinc-200 rounded-[2.5rem]">
              <div>1</div>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur hic repudiandae aliquid enim, perspiciatis iste
                inventore rerum. Sapiente, reiciendis qui tempore possimus
                laudantium corrupti eos totam, nihil, praesentium voluptas
                dolore!
              </div>
            </div>
            <div className="flex flex-shrink-0 w-96 h-full p-16 flex-col items-center justify-center bg-zinc-200 rounded-[2.5rem]">
              <div>2</div>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur hic repudiandae aliquid enim, perspiciatis iste
                inventore rerum. Sapiente, reiciendis qui tempore possimus
                laudantium corrupti eos totam, nihil, praesentium voluptas
                dolore!
              </div>
            </div>
            <div className="flex flex-shrink-0 w-96 h-full p-16 flex-col items-center justify-center bg-zinc-200 rounded-[2.5rem]">
              <div>3</div>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur hic repudiandae aliquid enim, perspiciatis iste
                inventore rerum. Sapiente, reiciendis qui tempore possimus
                laudantium corrupti eos totam, nihil, praesentium voluptas
                dolore!
              </div>
            </div>
            <div className="flex flex-shrink-0 w-96 h-full p-16 flex-col items-center justify-center bg-zinc-200 rounded-[2.5rem]">
              <div>4</div>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur hic repudiandae aliquid enim, perspiciatis iste
                inventore rerum. Sapiente, reiciendis qui tempore possimus
                laudantium corrupti eos totam, nihil, praesentium voluptas
                dolore!
              </div>
            </div>
            <div className="flex flex-shrink-0 w-96 h-full p-16 flex-col items-center justify-center bg-zinc-200 rounded-[2.5rem]">
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

          <div className="divider" />

          {/* v2 — overview */}
          <div className="flex items-center justify-center md:absolute md:top-1/2 md:left-0 md:w-[30%] h-1/2">
            <div className="mb-6 space-y-4 w-96 lg:w-112 md:mb-0">
              <h4 className="text-3xl font-bold">v2</h4>
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
          {/* v2 — features */}
          <div className="flex items-center md:w-[70%] md:ml-[30%] gap-12 md:h-1/2 h-full overflow-x-scroll overflow-y-hidden">
            <div className="flex flex-shrink-0 w-96 h-full p-16 flex-col items-center justify-center bg-zinc-200 rounded-[2.5rem]">
              <div>1</div>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur hic repudiandae aliquid enim, perspiciatis iste
                inventore rerum. Sapiente, reiciendis qui tempore possimus
                laudantium corrupti eos totam, nihil, praesentium voluptas
                dolore!
              </div>
            </div>
            <div className="flex flex-shrink-0 w-96 h-full p-16 flex-col items-center justify-center bg-zinc-200 rounded-[2.5rem]">
              <div>2</div>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur hic repudiandae aliquid enim, perspiciatis iste
                inventore rerum. Sapiente, reiciendis qui tempore possimus
                laudantium corrupti eos totam, nihil, praesentium voluptas
                dolore!
              </div>
            </div>
            <div className="flex flex-shrink-0 w-96 h-full p-16 flex-col items-center justify-center bg-zinc-200 rounded-[2.5rem]">
              <div>3</div>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur hic repudiandae aliquid enim, perspiciatis iste
                inventore rerum. Sapiente, reiciendis qui tempore possimus
                laudantium corrupti eos totam, nihil, praesentium voluptas
                dolore!
              </div>
            </div>
            <div className="flex flex-shrink-0 w-96 h-full p-16 flex-col items-center justify-center bg-zinc-200 rounded-[2.5rem]">
              <div>4</div>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur hic repudiandae aliquid enim, perspiciatis iste
                inventore rerum. Sapiente, reiciendis qui tempore possimus
                laudantium corrupti eos totam, nihil, praesentium voluptas
                dolore!
              </div>
            </div>
            <div className="flex flex-shrink-0 w-96 h-full p-16 flex-col items-center justify-center bg-zinc-200 rounded-[2.5rem]">
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
  );
};

export default Projects;
