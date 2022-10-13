/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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
