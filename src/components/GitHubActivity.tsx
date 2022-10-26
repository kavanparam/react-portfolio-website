import { motion } from "framer-motion";
import React from "react";

const GitHubActivity = () => {
  return (
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
  );
};

export default GitHubActivity;
