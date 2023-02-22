/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      white: "#FCFCFC",
      black: "#161617",
      primary: {
        200: "#93C5FD",
        300: "#F1EDE7",
        400: "#B6B0A8",
        600: "#B8A68C",
        700: "#B29B79",
        900: "#AC916B",
      },

      secondary: {
        100: "#EFEFEF",
        300: "#E3E3E3",
        400: "#BEBEBE",
        800: "#7D7D7D",
        900: "#636363",
      },

      info: {
        100: "#E5F5FC",
        50: "#E5F5FC",
      },

      success: {
        100: "#10AC84",
        50: "#EAF3EB",
      },

      warning: {
        100: "#E99400",
        50: "#FDF4E5",
      },

      error: {
        100: "#C0392B",
        50: "#FCEAEA",
      },

      surface: {
        "overlay-60": "#00000099",
        "overlay-40": "#00000066",
        "overlay-20": "#00000033",
        background: "#DEDEDE",
      },
    },
    extend: {
      fontFamily: (theme) => ({
        "Open-Sans": ["Open Sans", "sans-serif"],
        "Josefin-Slab": ["Josefin Slab", "serif"],
        sans: ["Open Sans", "sans-serif"],
      }),
      animation: ["group-hover"],
    },
  },
  plugins: [],
};
