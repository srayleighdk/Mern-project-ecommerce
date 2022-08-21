/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
      Aboreto: ["Aboreto", "cursive"],
      OpenSans: ["Open Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("tailwind-clip-path")],
};
