
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,css}"],
  theme: {
    extend: {
      colors: {
        blue: "#154360",
        primary: {
          blue: "#154360",
          green: "#60ce80",
          gray: "#f0f0f0",
        },
      },
    },
  },
  plugins: [],
};
