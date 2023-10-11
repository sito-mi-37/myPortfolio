/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryLight: "#394e6a",
        secondryLight: "#057aff",
        bgLight: "#f0f6ff",
        buttonLight: "#c6dfff",
        primaryDark: "#b3c5ef",
        secondaryDark: "#3abff8",
        bgDark: "#0f1729",
        buttonDark: "#002b3d",
        danger: "#fb6f78",
        warm: "#f4c152",
        success: "#05f646",
        aspect: "#828df8",
      },

      fontFamily: {
        roboto: ["Roboto"],
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
        "show-image": {
          "0%": { transform: "scale(0)", opacity: "0"  },
          "80%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        "slide-left": {
          "0%": { transform: "translateX(-50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "disappear": {
          "0%": { transform: "translateY(-50px)", opacity: "0" },
          "20%": { transform: "translateY(0)", opacity: "1" },
          "40%": { transform: "translateY(0)", opacity: "1" },
          "80%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-50px)", opacity: "0" },
        },
        "float-image": {
          "0%": { transform: "translateY(0)"},
          "50%": { transform: "translateY(-5px)"},
          "100%": { transform: "translateY(0)"},
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
        "show-image": "show-image 0.7s ease forwards",
        "slide-left": "slide-left 1s ease forwards",
        "float-image": "float-image 4s ease-in-out infinite",
        "disappear": "disappear 5s ease forwards",
      },
    },
  },
  plugins: [],
};
