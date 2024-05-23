/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poetsen: ['Poetsen One', 'sans-serif']
      },
      colors: {
        primary: "black",
        secondary: "#1a1e1f",
        menu: "#3b4142"
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
