/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: false,
  theme: {
    colors: {
      ...colors,
      primary: "#F53838",
      "brand-text": "#4F5665",
    },
    extend: {
      fontFamily: {
        rubik: ["Rubik", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
