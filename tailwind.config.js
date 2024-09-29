/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./dist/**/*.html",
    "./dist/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#1F1F1F",
        content: "#545454",
      },
      fontSize: {
        "6xl": "100px",
        paragraph: "22px",
      },
      fontFamily: {
        main: "Inter",
      },
      lineHeight: {
        h1: "70.19px",
      },
    },
  },
  plugins: [],
};
