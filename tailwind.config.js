const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        divUp: ["0 -75px 150px 60px rgba(255,255,255,.8)"],
        divUpDark: ["0 -75px 150px 60px rgba(255,255,255,.2)"],
      },
      colors: {
        "dark-white": "#f1f1f1",
        "dark-black": "#0f0f0f",
        "dark-secondary": "#3F3F3F",
        "dark-main": "#272727",
        neutralgray: colors.neutral,
      },
      fontFamily: {
        main: "-apple-system, Roboto, sans-serif, serif",
      },
      width: {
        112: "28rem",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: false,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  darkMode: "class",
};
