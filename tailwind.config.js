const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: '#F5385D',
      },
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "66v": "66.9vh",
        "70v": "70vh",
        "80v": "80vh",
        "83v": "83.9vh",
        "90v": "90vh",
        "94v": "94vh",
        "100v": "100vh",
      },
    },
  },
  plugins: [
    flowbite.plugin({
      charts:true,
    }
    ),
  ],
}

