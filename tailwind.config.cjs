/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
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
        "roboto": ['Roboto'],
        
      }
    },
  },
  plugins: [],
}
