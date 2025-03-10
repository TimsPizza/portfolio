/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        inriaSans: ["Inria Sans", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        domine: ["Domine", "serif"],
        sourceCodePro: ["Source Code Pro", "monospace"],
        firaCode: ["Fira Code", "serif"],
      },
      colors: {
        primary: "A6A6A6",
        secondary: "#3D3D3D",
        background: {
          dark: "#011727",
        },
        text: {
          light: "#E5E9EF",
          gray: "#405870",
        },
        "label-active": "#FDA55E",
        code: {
          keyword: "#4C5ACC",
          variable: "#42D9AD",
          string: "#FDA55E",
          comment: "#405870",
          number: "#FF6B6B",
          tag: "#e48bc1",
        },
        success: "#47D764",
        error: "#FF355B",
        warning: "#FFC021",
        info: "#2F86EB",
      },
      keyframes: {
        "slide-in": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "80%": { transform: "translateX(-5%)", opacity: "0.8" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-out": {
          "30%": { transform: "translateX(-5%)", opacity: "1" },
          "100%": { transform: "translateX(100%)", opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out forwards",
        "slide-out": "slide-out 0.5s ease-in forwards",
        "fade-out": "fade-out 0.5s ease-in forwards",
      },
    },
  },
  plugins: [],
};
