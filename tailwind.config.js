/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3b4747",
        secondary: "#1f2324",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
