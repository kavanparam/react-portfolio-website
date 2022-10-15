/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        div: [
          "0 -100px 50px rgba(255, 255, 255, 1)",
          "0 50px 90px rgba(255, 255, 255, 1)",
        ],
      },
      colors: {
        "gatsby-purple": "#663399",
        "gatsby-code": "#8A6534",
        "gatsby-bg-code": "#FFF4DB",
      },
      fontFamily: {
        main: "-apple-system, Roboto, sans-serif, serif",
      },
    },
  },
  plugins: [],
};
