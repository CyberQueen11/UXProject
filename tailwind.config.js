/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        brown: "#4D0009",
        darkred: "#870B1C",
        darkblue: "#141E46",
        lightred: "#FF6969",
        creamywhite: "#FBF6EB",
        lightgray: "#D9D9D9",
        darkgray: "#A4A1A1",
      },
    },
    fontFamily: {
      Quattrocento: "quattrocento",
      RedHatDisplay: "redhatdisplay",
    },
    container: {
      center: true,
    },
    screens: {
      xs: "344px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
  },
  plugins: [require('daisyui')]
};
